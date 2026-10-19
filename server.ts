import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

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
function generateFallbackResponse(topic: string, subject?: string) {
  const cleanTopic = topic.trim() || (subject === "tieng-viet" ? "Biện pháp so sánh" : "Bảng nhân 5");
  const isToan = subject === "toan" || cleanTopic.toLowerCase().includes("toán") || cleanTopic.toLowerCase().includes("cộng") || cleanTopic.toLowerCase().includes("nhân") || cleanTopic.toLowerCase().includes("hình");
  
  if (isToan) {
    return {
      topic: cleanTopic,
      topicEmoji: "🔢",
      summaryBadge: "Môn Toán Cô Thanh Hằng",
      simpleExplanation: {
        title: `Bí quyết học tốt ${cleanTopic}`,
        content: `Chào con yêu! Trong môn Toán của Cô Thanh Hằng, ${cleanTopic} giống như những viên gạch xếp hình kỳ diệu. Khi con hiểu rõ quy luật của các con số, con sẽ giải toán nhanh như một siêu anh hùng nhí đấy!`,
        analogy: `Hãy tưởng tượng các con số giống như những người bạn đang cùng chơi một trò chơi xếp kẹo, cứ mỗi bước đi là một khám phá bất ngờ!`
      },
      relatableExamples: [
        {
          title: "Ví dụ chia kẹo cùng bạn bè",
          description: "Nếu con có 10 chiếc kẹo và muốn chia đều cho 2 bạn, mỗi bạn sẽ nhận được đúng 5 chiếc kẹo ngọt ngào (10 : 2 = 5).",
          emoji: "🍬"
        },
        {
          title: "Ví dụ đếm đồ chơi trong phòng",
          description: "Mỗi hộp đựng 3 bạn gấu bông, nếu con có 4 hộp thì tổng cộng có 12 bạn gấu (3 x 4 = 12).",
          emoji: "🧸"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Đọc kỹ đề bài",
          takeaway: "Gạch chân dưới những con số và câu hỏi đề bài yêu cầu tìm.",
          iconHint: "🔍"
        },
        {
          number: 2,
          title: "Hiểu bản chất phép tính",
          takeaway: "Nhớ kỹ quy tắc cộng, trừ, nhân, chia để không bao giờ bị nhầm lẫn.",
          iconHint: "💡"
        },
        {
          number: 3,
          title: "Kiểm tra lại kết quả",
          takeaway: "Luôn tính lại một lần nữa để chắc chắn nhận trọn điểm 10 của Cô nhé!",
          iconHint: "⭐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: `Bản chất của ${cleanTopic} là gì?`,
          back: `Là quy luật toán học giúp con tính toán và tư duy nhanh chóng, chính xác dựa trên các số liệu cho trước.`,
          category: "Thuật ngữ Toán",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Khi gặp bài toán có lời văn, bước 1 con làm gì?",
          back: "Đọc thật kỹ đề bài ít nhất 2 lần và gạch chân các dữ kiện 'bài toán cho biết gì' và 'bài toán hỏi gì'.",
          category: "Phương pháp giải",
          emoji: "🔍"
        },
        {
          id: 3,
          front: "Mẹo kiểm tra lại kết quả phép tính như thế nào?",
          back: "Lấy kết quả tính ngược lại (Ví dụ: kiểm tra phép trừ bằng phép cộng, kiểm tra phép chia bằng phép nhân).",
          category: "Bí kíp tính nhanh",
          emoji: "💡"
        },
        {
          id: 4,
          front: "Làm sao để không bị nhầm lẫn khi đặt tính rồi tính?",
          back: "Viết các chữ số thẳng cột với nhau: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.",
          category: "Quy tắc trình bày",
          emoji: "📐"
        },
        {
          id: 5,
          front: "Bí quyết học giỏi Toán của Cô Thanh Hằng là gì?",
          back: "Hiểu bản chất, chăm chỉ luyện tập 15 phút mỗi ngày và tự tin đặt câu hỏi khi chưa hiểu bài!",
          category: "Lời khuyên từ Cô",
          emoji: "🌸"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: `Khi làm bài tập về ${cleanTopic}, bước đầu tiên con cần làm là gì?`,
          options: [
            "Đọc kỹ đề bài và xem bài toán cho gì, hỏi gì",
            "Viết ngay đáp án mà không cần suy nghĩ",
            "Bỏ qua không làm",
            "Chỉ đoán mò kết quả"
          ],
          correctIndex: 0,
          hint: "Đọc kỹ đề bài là chiếc chìa khóa vạn năng để mở ra lời giải đúng.",
          explanation: "Đúng rồi con yêu! Cô Thanh Hằng luôn nhắc: Đọc kỹ đề bài sẽ giúp con không bao giờ làm sai!",
          funFact: "Các nhà toán học nổi tiếng thế giới cũng luôn bắt đầu từ việc đọc đề thật cẩn thận đấy!"
        },
        {
          id: 2,
          question: "Nếu con gặp một bài toán khó, con nên làm như thế nào?",
          options: [
            "Khóc nhè và bỏ cuộc",
            "Tách bài toán thành các bước nhỏ và vẽ sơ đồ minh họa",
            "Nhờ người khác làm hộ từ đầu đến cuối",
            "Chọn bừa một đáp án"
          ],
          correctIndex: 1,
          hint: "Vẽ hình hoặc sơ đồ sẽ giúp con nhìn thấy đáp án ngay trước mắt.",
          explanation: "Hoan hô con! Tách nhỏ bài toán và vẽ sơ đồ là phương pháp học toán đỉnh cao của học sinh giỏi!",
          funFact: "Hình vẽ giúp não bộ của con tư duy nhanh gấp 3 lần chữ viết thông thường!"
        },
        {
          id: 3,
          question: "Để tính toán nhanh và chính xác môn Toán, bí quyết của con là gì?",
          options: [
            "Học thuộc bảng tính và chăm chỉ rèn luyện mỗi ngày",
            "Chỉ học trước ngày thi một hôm",
            "Không cần làm bài tập về nhà",
            "Tính nhẩm bừa"
          ],
          correctIndex: 0,
          hint: "Chăm chỉ rèn luyện sẽ biến con thành kiện tướng toán học.",
          explanation: "Tuyệt vời! Chăm chỉ mỗi ngày 15 phút sẽ giúp con tự tin đạt điểm 10 môn Toán của Cô Thanh Hằng!",
          funFact: "Bộ não của con sẽ tạo thêm hàng ngàn đường truyền thông minh mỗi khi con giải xong một bài toán khó!"
        }
      ],
      encouragementMessage: "Cô Thanh Hằng rất tự hào về con! Con thông minh và chăm chỉ lắm, hãy tiếp tục phát huy nhé!",
      followUpSuggestions: [
        `Cô Hằng ơi, có mẹo nào nhớ nhanh ${cleanTopic} không ạ?`,
        `Cho con một bài toán vui về ${cleanTopic} được không cô?`,
        `Ứng dụng ${cleanTopic} trong mua sắm như thế nào ạ?`
      ]
    };
  }

  // Tiếng Việt fallback
  return {
    topic: cleanTopic,
    topicEmoji: "📖",
    summaryBadge: "Môn Tiếng Việt Cô Thanh Hằng",
    simpleExplanation: {
      title: `Cùng Cô Hằng tìm hiểu ${cleanTopic}`,
      content: `Chào con yêu! Tiếng Việt của chúng mình đẹp và giàu cảm xúc vô cùng. Khi tìm hiểu về ${cleanTopic}, con sẽ biết cách dùng từ thật hay, viết câu văn mượt mà và biểu đạt tình cảm trọn vẹn.`,
      analogy: `Hãy tưởng tượng những câu chữ giống như những nốt nhạc vui tươi, khi con ghép đúng cách, con sẽ tạo nên một bài hát tuyệt đẹp!`
    },
    relatableExamples: [
      {
        title: "Ví dụ trong câu văn miêu tả",
        description: "Khi tả đôi mắt mẹ: 'Mắt mẹ sáng long lanh như những vì sao đêm', câu văn sẽ trở nên sinh động và ấm áp biết bao.",
        emoji: "✨"
      },
      {
        title: "Ví dụ trong giao tiếp hằng ngày",
        description: "Khi nói lời cảm ơn hay xin lỗi thật lễ phép với ông bà, cha mẹ và thầy cô.",
        emoji: "🌸"
      }
    ],
    keyPoints: [
      {
        number: 1,
        title: "Hiểu đúng nghĩa của từ",
        takeaway: "Dùng từ ngữ chính xác, đúng ngữ cảnh và giàu hình ảnh.",
        iconHint: "📚"
      },
      {
        number: 2,
        title: "Viết đúng chính tả & ngữ pháp",
        takeaway: "Đầu câu viết hoa, cuối câu có dấu chấm, phân biệt rõ các âm vần dễ lẫn.",
        iconHint: "✍️"
      },
      {
        number: 3,
        title: "Thêm cảm xúc vào bài văn",
        takeaway: "Dùng từ ngữ gợi tả và hình ảnh so sánh để bài viết sinh động hơn.",
        iconHint: "💖"
      }
    ],
    flashcards: [
      {
        id: 1,
        front: `Thế nào là ${cleanTopic}?`,
        back: `Là kiến thức Tiếng Việt quan trọng giúp con diễn đạt ý nghĩ trong sáng, câu văn sinh động và giàu cảm xúc.`,
        category: "Khái niệm Tiếng Việt",
        emoji: "📖"
      },
      {
        id: 2,
        front: "Mẹo để câu văn hay và cuốn hút người đọc là gì?",
        back: "Sử dụng từ ngữ gợi tả màu sắc, âm thanh và các hình ảnh so sánh, nhân hóa gần gũi.",
        category: "Bí kíp làm văn",
        emoji: "✨"
      },
      {
        id: 3,
        front: "Quy tắc vàng về dấu câu trong Tiếng Việt là gì?",
        back: "Chữ cái đầu câu phải viết hoa, kết thúc câu phải có dấu chấm hoặc dấu câu thích hợp.",
        category: "Quy tắc ngữ pháp",
        emoji: "✍️"
      },
      {
        id: 4,
        front: "Cách phân biệt và viết đúng chính tả các từ dễ lẫn?",
        back: "Hiểu nghĩa của từ, phát âm chuẩn và tích cực đọc sách thiếu nhi mỗi ngày.",
        category: "Bí kíp chính tả",
        emoji: "📚"
      },
      {
        id: 5,
        front: "Lời khuyên của Cô Thanh Hằng khi học Tiếng Việt?",
        back: "Yêu quý tiếng mẹ đẻ, tự tin viết nên những câu chuyện đẹp và gửi gắm yêu thương vào từng con chữ!",
        category: "Lời khuyên từ Cô",
        emoji: "🌸"
      }
    ],
    quizQuestions: [
      {
        id: 1,
        question: `Khi viết một câu văn Tiếng Việt hoàn chỉnh, con cần chú ý điều gì nhất?`,
        options: [
          "Đầu câu viết hoa và cuối câu có dấu câu phù hợp",
          "Viết không cần dấu câu",
          "Chỉ cần viết một từ duy nhất",
          "Không cần chú ý chính tả"
        ],
        correctIndex: 0,
        hint: "Dấu chấm câu giúp người đọc hiểu trọn vẹn ý của con.",
        explanation: "Chính xác! Cô Thanh Hằng rất khen con đã nhớ quy tắc vàng khi viết câu Tiếng Việt!",
        funFact: "Dấu câu giống như những biển báo giao thông giúp bài văn của con trôi chảy và rõ nghĩa!"
      },
      {
        id: 2,
        question: "Làm thế nào để bài tập làm văn của con hay và giàu cảm xúc hơn?",
        options: [
          "Sử dụng các hình ảnh so sánh, từ ngữ gợi tả sinh động",
          "Chép nguyên bài của người khác",
          "Viết thật ngắn cho xong",
          "Không dùng từ chỉ màu sắc, âm thanh"
        ],
        correctIndex: 0,
        hint: "So sánh và từ gợi cảm xúc sẽ làm bừng sáng bài văn.",
        explanation: "Giỏi lắm con yêu! Những hình ảnh so sánh ví von sẽ làm bài văn của con điểm 10 rực rỡ!",
        funFact: "Các nhà văn lớn đều là những người rất thích quan sát thiên nhiên và đời sống xung quanh đấy!"
      },
      {
        id: 3,
        question: "Bí quyết để không bao giờ bị sai lỗi chính tả Tiếng Việt là gì?",
        options: [
          "Đọc nhiều sách truyện thiếu nhi và chăm viết bài cẩn thận",
          "Không cần đọc sách",
          "Viết thật nhanh ẩu",
          "Không kiểm tra lại bài"
        ],
        correctIndex: 0,
        hint: "Mỗi trang sách hay là một người thầy dạy chính tả tuyệt vời.",
        explanation: "Tuyệt vời! Đọc sách mỗi ngày cùng Cô Hằng sẽ giúp vốn từ của con phong phú và viết chuẩn chính tả!",
        funFact: "Đọc 10 trang sách mỗi ngày giúp con biết thêm hơn 1000 từ ngữ đẹp trong một năm!"
      }
    ],
    encouragementMessage: "Cô Thanh Hằng gửi tặng con một bông hoa điểm 10! Con rất chăm chỉ và yêu thích Tiếng Việt!",
    followUpSuggestions: [
      `Cô Hằng ơi, viết đoạn văn ngắn về ${cleanTopic} như thế nào ạ?`,
      `Có câu đố chữ nào vui về ${cleanTopic} không cô?`,
      `Cách phân biệt chính tả dễ nhớ nhất là gì ạ?`
    ]
  };
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
5. 3 câu hỏi kiểm tra kiến thức (Quiz Questions): Đúng 3 câu hỏi trắc nghiệm đố vui có 4 đáp án (A, B, C, D), kèm theo:
   - correctIndex (0, 1, 2 hoặc 3)
   - hint (gợi ý nhẹ nhàng của Cô Hằng để bé tự suy nghĩ)
   - explanation (lời khen ngợi và giảng giải chi tiết của Cô Hằng)
   - funFact (1 sự thật thú vị toán học/ngôn ngữ mở rộng kiến thức)

Định dạng trả về: JSON thuần túy theo schema yêu cầu.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
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
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Không nhận được phản hồi từ Cô Thanh Hằng");
    }

    const data = JSON.parse(responseText);
    return res.json(data);
  } catch (error: any) {
    console.error("Error in /api/learn:", error);
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

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: `Học sinh tiểu học 6-10 tuổi đang học về "${currentTopic || 'Chủ đề'}" và hỏi Cô giáo Thanh Hằng: "${question}".
Hãy trả lời con với tư cách Cô Thanh Hằng dịu dàng, ân cần, giải thích dễ hiểu về Toán hoặc Tiếng Việt, khích lệ con tự suy nghĩ và khen ngợi con.`,
      config: {
        systemInstruction: "Bạn là Cô giáo Thanh Hằng - Trợ lý học tập môn Toán & Tiếng Việt cho học sinh tiểu học (6-10 tuổi).",
        temperature: 0.7,
      }
    });

    return res.json({
      answer: response.text || "Câu hỏi của con rất xuất sắc! Cô Hằng rất tự hào về tinh thần tự học của con!"
    });
  } catch (error) {
    console.error("Error in /api/ask-followup:", error);
    return res.json({
      answer: "Cô Thanh Hằng rất vui vì con đã chủ động đặt câu hỏi! Hãy cùng cô tiếp tục khám phá bài học nhé!"
    });
  }
});

// Vite middleware & Static serving
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI Study Buddy server running on http://0.0.0.0:${PORT}`);
  });
}

start();
