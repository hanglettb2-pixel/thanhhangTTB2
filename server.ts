import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { generateClientFallbackLesson } from "./src/utils/fallbackLessons";

dotenv.config();

const app = express();
const portArgIndex = process.argv.indexOf("--port");
const cliPort = portArgIndex !== -1 ? parseInt(process.argv[portArgIndex + 1], 10) : undefined;
const PORT = cliPort || 3000;

app.use(express.json());

// Fast health-check endpoint for dev server monitors
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", port: PORT, teacher: "Cô Lê Thị Thanh Hằng", school: "Trường Tiểu học Tân Thành Bình" });
});

// Lazy-safe Gemini AI client initialization
function getGenAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set. Using fallback responses if needed.");
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Fallback response generator for children when offline/no-key
function generateFallbackResponse(topic: string, subject?: string, ageGroup?: string) {
  return generateClientFallbackLesson(topic, subject as any, ageGroup);
}

// Main API to teach a topic to kids (6-10 years old)
app.post("/api/learn", async (req, res) => {
  try {
    const { topic, ageGroup = "6-10", subject = "all" } = req.body;
    if (!topic || typeof topic !== "string" || !topic.trim()) {
      return res.status(400).json({ error: "Vui lòng nhập chủ đề bé muốn học cùng Cô Thanh Hằng!" });
    }

    const ai = getGenAIClient();
    if (!ai) {
      const fallback = generateFallbackResponse(topic, subject);
      return res.json(fallback);
    }

    const systemPrompt = `Bạn là "CÔ THANH HẰNG" - Cô giáo tiểu học dịu dàng, nhiệt huyết, yêu thương học sinh và vô cùng giỏi chuyên môn giảng dạy hai môn trọng tâm: TOÁN và TIẾNG VIỆT cho học sinh tiểu học Việt Nam từ 6 đến 10 tuổi (Lớp 1 đến Lớp 5).

XƯNG HÔ VÀ PHONG CÁCH CỦA CÔ THANH HẰNG:
- Xưng hô: "Cô", "Cô Thanh Hằng" hoặc "Cô Hằng" và gọi học sinh là "con", "bé yêu", "bạn nhỏ".
- Giọng điệu: Ngọt ngào, ân cần, kiên nhẫn, tràn đầy năng lượng tích cực, luôn khích lệ sự tự tin và niềm vui học tập.
- Chuyên môn TOÁN HỌC: Giải thích bản chất số học, hình học, quy tắc tính toán bằng sơ đồ tư duy, que tính, viên kẹo, trò chơi; hướng dẫn phương pháp suy luận từng bước (bài toán cho gì, hỏi gì, làm phép tính nào), KHÔNG bao giờ chỉ ném đáp án cuối cùng.
- Chuyên môn TIẾNG VIỆT: Dạy từ ngữ, chính tả, dấu câu, tập làm văn (kể chuyện, miêu tả), biện pháp tu từ (so sánh, nhân hóa) bằng ví dụ thơ ca, câu đố, tranh vẽ và hình ảnh gần gũi với tuổi thơ.

CẤU TRÚC BẮT BUỘC TRẢ VỀ THEO 5 PHẦN CHUẨN:
1. Giải thích đơn giản (Simple Explanation): Ngắn gọn, trong sáng, dễ hiểu cho trẻ 6-10 tuổi, có ví von "Hãy tưởng tượng..." gần gũi.
2. Ví dụ dễ hiểu (Relatable Examples): Ít nhất 2 ví dụ thực tế diễn ra ngay trong đời sống thường ngày (ở nhà, ở trường, chia đồ chơi, viết thư tặng bố mẹ...).
3. 3 ý quan trọng cần nhớ (Key Points): Đúng 3 ý ngắn gọn, súc tích, đúc kết như bí kíp điểm 10 của Cô Hằng.
4. 5 Thẻ Flashcard Ôn Tập (Flashcards): Đúng 5 flashcard ôn tập lật 2 mặt cho chủ đề này:
   - id: 1 đến 5
   - front: Mặt trước là câu hỏi hoặc thuật ngữ (VD: "Phép nhân là gì?", "Biện pháp so sánh là gì?")
   - back: Mặt sau là câu trả lời hoặc giải thích súc tích, rõ ràng, dễ hiểu của Cô Hằng
   - category: Phân loại ("Thuật ngữ", "Câu hỏi tư duy", "Mẹo làm bài", "Quy tắc")
   - emoji: Biểu tượng phù hợp (🌸, 🔢, 💡, 📐, ✍️, ⭐...)
5. 3 CÂU HỎI KIỂM TRA KIẾN THỨC CHUẨN HÓA THEO SÁCH GIÁO KHOA LỚP 2 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG):
   - TUYỆT ĐỐI KHÔNG ra các câu hỏi chung chung sáo rỗng về thái độ học tập (như "khi gặp bài khó con làm gì", "bước 1 con làm gì", "bí quyết học là gì").
   - 100% CẢ 3 CÂU HỎI PHẢI LÀ BÀI TẬP VÀ CÂU HỎI KIẾN THỨC CỤ THỂ theo đúng nội dung bài học:
     + Câu 1 (Mức độ Nhận biết): Hỏi khái niệm / công thức / nhận diện thành phần phép tính (số hạng, tổng, số bị trừ, số trừ, hiệu, thừa số, tích, số bị chia, thương) hoặc nhận diện từ loại (từ chỉ sự vật, hoạt động, đặc điểm, mẫu câu Ai là gì / Ai làm gì / Ai thế nào, quy tắc chính tả c/k, l/n, g/gh, ng/ngh, dấu câu).
     + Câu 2 (Mức độ Thông hiểu - Tính toán/Áp dụng): Một phép tính cụ thể (cộng trừ có nhớ, bảng nhân 2/5, bảng chia 2/5, đổi đơn vị dm/m/km/kg/lít) hoặc bài tập điền từ/dấu câu vào câu văn cụ thể.
     + Câu 3 (Mức độ Vận dụng - Toán lời văn / Phân tích): Một bài toán có lời văn thực tế gần gũi học sinh lớp 2 (chia kẹo, đếm đồ dùng học tập, tính cân nặng kg, lít, độ dài đường gấp khúc, xác suất chắc chắn/có thể/không thể) hoặc phân tích hình ảnh so sánh, chọn câu đúng trong bài đọc lớp 2.
   - Mỗi câu có đúng 4 phương án trắc nghiệm rõ ràng (A, B, C, D)
   - correctIndex (0, 1, 2 hoặc 3): Vị trí đáp án đúng chính xác
   - hint: Gợi ý tư duy ngắn gọn, ân cần của Cô Hằng để bé tự suy luận ra cách làm
   - explanation: Lời khen ngợi và lời giải thích cặn kẽ từng bước (với môn Toán phải ghi rõ phép tính và đáp số; với Tiếng Việt chỉ rõ vì sao chọn từ đó)
   - funFact: 1 kiến thức thực tế lý thú, bổ ích liên quan trực tiếp đến bài học.

Định dạng trả về: JSON thuần túy theo schema yêu cầu.`;

    // Call Gemini 3.8 Flash with a strict 10s timeout to avoid gateway timeouts or hangs
    const generateWithTimeout = Promise.race([
      ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: `Học sinh tiểu học ${ageGroup} tuổi muốn học chủ đề "${topic.trim()}" (Thuộc môn: ${subject === "toan" ? "Toán học" : subject === "tieng-viet" ? "Tiếng Việt" : "Toán hoặc Tiếng Việt"}). Hãy giảng bài cho con nhé!`,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING, description: "Tên chủ đề đã chuẩn hóa" },
              topicEmoji: { type: Type.STRING, description: "1 emoji đại diện phù hợp nhất cho chủ đề (VD: 🔢, ➕, 📖, ✍️, 🌸, 📐...)" },
              summaryBadge: { type: Type.STRING, description: "Nhãn phân loại ngắn như: Toán học Cô Hằng, Tiếng Việt diệu kỳ, Bài toán điểm 10, Bí kíp làm văn..." },
              simpleExplanation: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Tiêu đề bài giảng dịu dàng của Cô Hằng" },
                  content: { type: Type.STRING, description: "Nội dung giải thích chính bằng ngôn ngữ học sinh 6-10 tuổi" },
                  analogy: { type: Type.STRING, description: "Một so sánh ví von gần gũi ('Hãy tưởng tượng như...')" }
                },
                required: ["title", "content", "analogy"]
              },
              relatableExamples: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING, description: "Tên ví dụ" },
                    description: { type: Type.STRING, description: "Mô tả chi tiết ví dụ trong đời sống" },
                    emoji: { type: Type.STRING, description: "Emoji minh họa cho ví dụ" }
                  },
                  required: ["title", "description", "emoji"]
                }
              },
              keyPoints: {
                type: Type.ARRAY,
                description: "Đúng 3 ý quan trọng cần nhớ",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    number: { type: Type.INTEGER, description: "Số thứ tự 1, 2, 3" },
                    title: { type: Type.STRING, description: "Tiêu đề ngắn của ý ghi nhớ" },
                    takeaway: { type: Type.STRING, description: "Nội dung cốt lõi cần nhớ trong 1-2 câu" },
                    iconHint: { type: Type.STRING, description: "Biểu tượng hoặc emoji gợi ý" }
                  },
                  required: ["number", "title", "takeaway", "iconHint"]
                }
              },
              flashcards: {
                type: Type.ARRAY,
                description: "Đúng 5 thẻ Flashcard ôn tập (Mặt trước: câu hỏi hoặc thuật ngữ; Mặt sau: câu trả lời)",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER, description: "Số thứ tự 1 đến 5" },
                    front: { type: Type.STRING, description: "Mặt trước: Câu hỏi hoặc thuật ngữ cốt lõi" },
                    back: { type: Type.STRING, description: "Mặt sau: Câu trả lời hoặc giải thích chi tiết" },
                    category: { type: Type.STRING, description: "Phân loại ngắn (Thuật ngữ, Quy tắc, Mẹo tính...)" },
                    emoji: { type: Type.STRING, description: "Emoji minh họa cho thẻ" }
                  },
                  required: ["id", "front", "back", "category", "emoji"]
                }
              },
              quizQuestions: {
                type: Type.ARRAY,
                description: "Đúng 3 câu hỏi trắc nghiệm kiểm tra kiến thức",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER, description: "ID câu hỏi (1, 2, 3)" },
                    question: { type: Type.STRING, description: "Nội dung câu hỏi đố vui" },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "4 lựa chọn trả lời A, B, C, D"
                    },
                    correctIndex: { type: Type.INTEGER, description: "Chỉ số đáp án đúng (0, 1, 2, hoặc 3)" },
                    hint: { type: Type.STRING, description: "Gợi ý suy nghĩ nhẹ nhàng từ Cô Hằng" },
                    explanation: { type: Type.STRING, description: "Lời khen ngợi và giải thích của Cô Hằng" },
                    funFact: { type: Type.STRING, description: "Sự thật thú vị nho nhỏ mở rộng kiến thức" }
                  },
                  required: ["id", "question", "options", "correctIndex", "hint", "explanation", "funFact"]
                }
              },
              encouragementMessage: { type: Type.STRING, description: "Lời chúc mừng và bông hoa điểm 10 Cô Hằng gửi tặng con" },
              followUpSuggestions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "3 câu hỏi tò mò gợi ý con hỏi tiếp Cô Hằng"
              }
            },
            required: [
              "topic",
              "topicEmoji",
              "summaryBadge",
              "simpleExplanation",
              "relatableExamples",
              "keyPoints",
              "flashcards",
              "quizQuestions",
              "encouragementMessage",
              "followUpSuggestions"
            ]
          }
        }
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("AI generation timed out after 10s")), 10000)
      )
    ]);

    const response = await generateWithTimeout;
    const responseText = response.text;
    if (!responseText) {
      throw new Error("Không nhận được phản hồi từ Cô Thanh Hằng");
    }

    const data = JSON.parse(responseText);
    return res.json(data);
  } catch (error: any) {
    console.warn("Using smart fallback response for topic:", req.body?.topic, error?.message);
    const fallback = generateFallbackResponse(req.body?.topic || "Bài học", req.body?.subject);
    return res.json(fallback);
  }
});

// Follow-up Q&A endpoint with Cô Thanh Hằng
app.post("/api/ask-followup", async (req, res) => {
  try {
    const { currentTopic, question } = req.body;
    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Vui lòng nhập câu hỏi cho Cô Hằng nhé!" });
    }

    const ai = getGenAIClient();
    if (!ai) {
      return res.json({
        answer: `Câu hỏi của con rất hay! Để giải quyết vấn đề này trong ${currentTopic || "bài học"}, con hãy thử vẽ sơ đồ hoặc dùng các ví dụ gần gũi xung quanh nhé. Cô tin con sẽ làm được ngay!`,
      });
    }

    const response = await Promise.race([
      ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: `Học sinh tiểu học 6-10 tuổi đang học về "${currentTopic || 'Chủ đề'}" và hỏi Cô giáo Thanh Hằng: "${question}".
Hãy trả lời con với tư cách Cô Thanh Hằng dịu dàng, ân cần, giải thích dễ hiểu về Toán hoặc Tiếng Việt, khích lệ con tự suy nghĩ và khen ngợi con.`,
        config: {
          systemInstruction: "Bạn là Cô giáo Thanh Hằng - Trợ lý học tập môn Toán & Tiếng Việt cho học sinh tiểu học (6-10 tuổi).",
          temperature: 0.7,
        }
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 8000)
      )
    ]);

    return res.json({
      answer: response.text || "Câu hỏi của con rất xuất sắc! Cô Hằng rất tự hào về tinh thần tự học của con!"
    });
  } catch (error) {
    console.warn("Error/timeout in /api/ask-followup:", error);
    return res.json({
      answer: "Cô Thanh Hằng rất vui vì con đã chủ động đặt câu hỏi! Hãy cùng cô tiếp tục khám phá bài học nhé!"
    });
  }
});

// Vite middleware & Static serving
async function start() {
  try {
    if (process.env.NODE_ENV !== "production") {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);

      // Serve index.html transformed by Vite for any client routes/reloads
      app.use("*", async (req, res, next) => {
        if (req.originalUrl.startsWith("/api") || req.originalUrl.startsWith("/assets")) {
          return next();
        }
        try {
          const indexPath = path.resolve(process.cwd(), "index.html");
          let template = fs.readFileSync(indexPath, "utf-8");
          template = await vite.transformIndexHtml(req.originalUrl, template);
          res.status(200).set({ "Content-Type": "text/html" }).end(template);
        } catch (e) {
          vite.ssrFixStacktrace(e as Error);
          next(e);
        }
      });
    } else {
      const distPath = path.join(process.cwd(), "dist");
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        if (req.originalUrl.startsWith("/api")) {
          return res.status(404).json({ error: "Route not found" });
        }
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    const server = app.listen(PORT, "0.0.0.0", () => {
      console.log(`AI Study Buddy server running on http://0.0.0.0:${PORT}`);
    });

    server.on("error", (err: any) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`Port ${PORT} is already in use, reusing active socket.`);
      } else {
        console.error("Server listen error:", err);
      }
    });
  } catch (err) {
    console.error("Critical server startup error:", err);
  }
}

start();
