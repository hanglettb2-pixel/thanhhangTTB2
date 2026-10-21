import { StudyBuddyResponse } from "../types";
import { findStandardizedLesson } from "../data/standardizedLessons";

export function generateClientFallbackLesson(
  topic: string,
  subject?: "all" | "toan" | "tieng-viet",
  ageGroup?: string
): StudyBuddyResponse {
  const cleanTopic = topic.trim() || (subject === "tieng-viet" ? "Biện pháp so sánh" : "Bảng nhân 2");

  // 1. Check standardized curriculum database first
  const standardized = findStandardizedLesson(cleanTopic, subject);
  if (standardized) {
    return {
      ...standardized,
      topic: cleanTopic.length < 30 ? cleanTopic : standardized.topic,
    };
  }

  const lower = cleanTopic.toLowerCase();
  const isMath =
    subject === "toan" ||
    lower.includes("toán") ||
    lower.includes("nhân") ||
    lower.includes("chia") ||
    lower.includes("cộng") ||
    lower.includes("trừ") ||
    lower.includes("hình") ||
    lower.includes("số") ||
    lower.includes("đo") ||
    lower.includes("kg") ||
    lower.includes("lít") ||
    lower.includes("mét") ||
    lower.includes("cm") ||
    /\d+/.test(cleanTopic);

  if (isMath) {
    return {
      topic: cleanTopic,
      topicEmoji: "🔢",
      summaryBadge: "Môn Toán Lớp 2 • Cô Thanh Hằng",
      simpleExplanation: {
        title: `Cùng Cô Thanh Hằng giải bài toán: ${cleanTopic}`,
        content: `Chào con yêu! Trong môn Toán lớp 2, kiến thức về "${cleanTopic}" rất quan trọng và gần gũi với cuộc sống. Khi con hiểu rõ bản chất của các con số và thực hiện phép tính cẩn thận từng bước, mọi bài toán đều trở nên dễ dàng!`,
        analogy: `Hãy tưởng tượng các con số giống như những bậc thang vững chắc, con bước từng bước từ hàng đơn vị đến hàng chục thì bậc thang nào con cũng bước qua tự tin!`
      },
      relatableExamples: [
        {
          title: "Ví dụ chia quà cùng các bạn",
          description: "Mẹ mua cho con một túi gồm 12 chiếc bánh, con chia đều cho 2 bạn nhỏ. Mỗi bạn nhận được: 12 : 2 = 6 chiếc bánh ngọt ngào.",
          emoji: "🧁"
        },
        {
          title: "Ví dụ góp hoa điểm 10",
          description: "Tuần này con đạt được 15 bông hoa điểm 10, tuần sau con đạt thêm 12 bông hoa nữa. Cả hai tuần con có tất cả: 15 + 12 = 27 bông hoa rực rỡ.",
          emoji: "🌸"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Đọc kỹ dữ kiện đề bài",
          takeaway: "Xác định rõ đề bài cho biết gì, hỏi gì và đại lượng cần tìm là gì.",
          iconHint: "🔍"
        },
        {
          number: 2,
          title: "Đặt tính và tính cẩn thận",
          takeaway: "Thực hiện phép tính từ phải sang trái (từ hàng đơn vị sang hàng chục).",
          iconHint: "📐"
        },
        {
          number: 3,
          title: "Kiểm tra lại kết quả",
          takeaway: "Thử lại phép tính ngược lại (thử phép trừ bằng phép cộng, thử phép chia bằng phép nhân) để đảm bảo đúng 100%.",
          iconHint: "⭐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: `Quy tắc trọng tâm của "${cleanTopic}" là gì?`,
          back: `Nắm chắc các công thức thành phần phép tính và quy tắc tính từ hàng đơn vị sang hàng chục.`,
          category: "Công thức toán học",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Khi thực hiện phép tính có nhớ, bước quan trọng nhất là gì?",
          back: "Nhớ cộng thêm 1 (hoặc bớt 1) vào hàng chục tiếp theo để kết quả không bị thiếu hụt.",
          category: "Mẹo làm bài",
          emoji: "💡"
        },
        {
          id: 3,
          front: "Bài toán yêu cầu tìm 'tất cả' thì con làm phép tính gì?",
          back: "Thông thường con làm phép tính CỘNG (gộp tất cả các số hạng lại với nhau).",
          category: "Phương pháp giải toán",
          emoji: "➕"
        },
        {
          id: 4,
          front: "Bài toán yêu cầu tìm phần 'còn lại' thì con làm phép tính gì?",
          back: "Con làm phép tính TRỪ (lấy số ban đầu trừ đi số đã bớt hoặc đã bán).",
          category: "Phương pháp giải toán",
          emoji: "➖"
        },
        {
          id: 5,
          front: "Bí quyết đạt điểm 10 môn Toán của Cô Thanh Hằng là gì?",
          back: "Hiểu bản chất, viết số nắn nót thẳng hàng thẳng cột và luôn kiểm tra lại bài trước khi nộp!",
          category: "Lời khuyên từ Cô",
          emoji: "🌸"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: `Cho phép tính cộng: 45 + 32 = 77. Trong phép tính này, số 77 được gọi là gì?`,
          options: ["Tổng", "Số hạng", "Hiệu", "Thương"],
          correctIndex: 0,
          hint: "Kết quả của một phép tính cộng luôn được gọi là gì nhỉ?",
          explanation: "Chính xác! Trong phép tính cộng, kết quả nhận được (77) được gọi là TỔNG.",
          funFact: "Các con số trong toán học luôn tuân theo những trật tự logic vô cùng kỳ diệu!"
        },
        {
          id: 2,
          question: `Có 18 quyển vở chia đều cho 2 tổ học sinh. Hỏi mỗi tổ nhận được bao nhiêu quyển vở?`,
          options: ["8 quyển", "9 quyển", "10 quyển", "16 quyển"],
          correctIndex: 1,
          hint: "Chia đều 18 quyển vở cho 2 tổ: 18 : 2 = ?",
          explanation: "Rất giỏi! Ta làm phép chia: 18 : 2 = 9 (quyển vở). Mỗi tổ nhận được 9 quyển vở.",
          funFact: "Số 9 là số có một chữ số lớn nhất trong hệ đếm thập phân của chúng ta!"
        },
        {
          id: 3,
          question: `Một cửa hàng có 65 kg gạo, buổi sáng đã bán được 28 kg gạo. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?`,
          options: ["37 kg", "47 kg", "35 kg", "43 kg"],
          correctIndex: 0,
          hint: "Số gạo còn lại = 65 kg - 28 kg.",
          explanation: "Cô khen con xuất sắc! Ta lấy 65 - 28 = 37 (kg). Vậy cửa hàng còn lại đúng 37 kg gạo.",
          funFact: "Phép trừ có nhớ được thực hiện bằng cách mượn 1 chục ở hàng chục đấy con yêu!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi sự tập trung và chăm chỉ của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        `Cô Hằng ơi, có mẹo nào tính nhẩm nhanh chủ đề ${cleanTopic} không ạ?`,
        "Cho con thêm một câu đố vui toán học nữa đi cô!",
        "Ứng dụng của bài học này khi đi siêu thị là gì ạ?"
      ]
    };
  }

  // Tiếng Việt fallback
  return {
    topic: cleanTopic,
    topicEmoji: "📖",
    summaryBadge: "Môn Tiếng Việt Lớp 2 • Cô Thanh Hằng",
    simpleExplanation: {
      title: `Cùng Cô Thanh Hằng khám phá bài học: ${cleanTopic}`,
      content: `Chào con yêu! Tiếng Việt của chúng mình trong sáng, giàu đẹp và chan chứa yêu thương. Khi học bài "${cleanTopic}", con sẽ biết cách dùng từ ngữ chuẩn xác, viết câu văn mượt mà và tự tin biểu đạt suy nghĩ của mình!`,
      analogy: `Mỗi từ ngữ giống như một bông hoa xinh đẹp, khi con xếp các bông hoa khéo léo bên nhau, con sẽ tạo nên một vườn hoa câu văn tỏa ngát hương thơm!`
    },
    relatableExamples: [
      {
        title: "Ví dụ trong câu văn miêu tả",
        description: "Khi tả đôi mắt mẹ: 'Đôi mắt mẹ sáng lung linh như những vì sao đêm', câu văn lập tức trở nên ấm áp và chan chứa tình yêu thương.",
        emoji: "✨"
      },
      {
        title: "Ví dụ trong giao tiếp hằng ngày",
        description: "Khi nói lời 'Cảm ơn' hay 'Xin lỗi' thật lễ phép và chân thành với ông bà, cha mẹ, thầy cô và bạn bè.",
        emoji: "🌸"
      }
    ],
    keyPoints: [
      {
        number: 1,
        title: "Hiểu đúng nghĩa của từ",
        takeaway: "Chọn từ ngữ chính xác, giàu hình ảnh và phù hợp với hoàn cảnh câu chuyện.",
        iconHint: "📚"
      },
      {
        number: 2,
        title: "Viết đúng chính tả và dấu câu",
        takeaway: "Chữ đầu câu nhớ viết hoa, cuối câu đặt dấu chấm, dấu chấm hỏi hoặc dấu chấm than thích hợp.",
        iconHint: "✍️"
      },
      {
        number: 3,
        title: "Gửi gắm cảm xúc vào bài viết",
        takeaway: "Sử dụng từ ngữ gợi cảm xúc và hình ảnh so sánh ví von để bài văn thêm cuốn hút.",
        iconHint: "💖"
      }
    ],
    flashcards: [
      {
        id: 1,
        front: `Trọng tâm kiến thức của bài "${cleanTopic}" là gì?`,
        back: `Hiểu rõ khái niệm ngữ pháp, nhận diện từ loại và vận dụng đặt câu văn đúng chính tả, giàu cảm xúc.`,
        category: "Kiến thức trọng tâm",
        emoji: "📖"
      },
      {
        id: 2,
        front: "Đầu câu văn cần chú ý quy tắc chính tả gì?",
        back: "Bắt buộc phải VIẾT HOA chữ cái đầu câu.",
        category: "Quy tắc chính tả",
        emoji: "✍️"
      },
      {
        id: 3,
        front: "Mẹo để bài tập làm văn được cô giáo khen điểm 10 là gì?",
        back: "Dùng các từ ngữ chỉ màu sắc, âm thanh, hình ảnh so sánh sinh động và viết chữ nắn nót sạch đẹp.",
        category: "Bí kíp làm văn",
        emoji: "✨"
      },
      {
        id: 4,
        front: "Cuối câu bộc lộ cảm xúc vui mừng, ngạc nhiên thì đặt dấu câu nào?",
        back: "Đặt DẤU CHẤM THAN (!).",
        category: "Dấu câu",
        emoji: "❗"
      },
      {
        id: 5,
        front: "Lời khuyên luyện đọc của Cô Thanh Hằng là gì?",
        back: "Đọc to, rõ ràng, ngắt nghỉ đúng dấu phẩy, dấu chấm và đọc sách truyện thiếu nhi 15 phút mỗi ngày!",
        category: "Lời khuyên từ Cô",
        emoji: "🌸"
      }
    ],
    quizQuestions: [
      {
        id: 1,
        question: `Trong câu văn: 'Mặt trời đỏ rực như một quả cầu lửa khổng lồ', biện pháp nghệ thuật nào đã được sử dụng?`,
        options: ["Biện pháp so sánh", "Biện pháp nhân hóa", "Biện pháp lặp từ", "Không dùng biện pháp nào"],
        correctIndex: 0,
        hint: "Có từ 'như' nối giữa mặt trời và quả cầu lửa.",
        explanation: "Chính xác! Câu văn sử dụng biện pháp so sánh (Mặt trời đỏ rực như quả cầu lửa) giúp hình ảnh hiện lên rực rỡ.",
        funFact: "Biện pháp so sánh là chiếc đũa thần giúp bài văn của học sinh lớp 2 luôn được cô giáo khen ngợi!"
      },
      {
        id: 2,
        question: `Từ nào sau đây viết ĐÚNG CHÍNH TẢ tiếng Việt?`,
        options: ["Kính yêu", "Con ghà", "Bàn ghỗ", "Lắng nge"],
        correctIndex: 0,
        hint: "Nhớ quy tắc: K đi với i, e, ê. Còn g đơn và ng đơn đi với a, o, ô, u...",
        explanation: "Rất chuẩn! 'Kính yêu' viết đúng quy tắc (chữ k đi với âm i). Các từ kia viết sai: phải là con gà, bàn gỗ, lắng nghe.",
        funFact: "Tiếng Việt có dấu thanh du dương như một bản nhạc khiến bạn bè quốc tế rất ngưỡng mộ!"
      },
      {
        id: 3,
        question: `Câu nào sau đây được viết theo mẫu câu 'Ai là gì?' dùng để giới thiệu?`,
        options: [
          "Cô Lê Thị Thanh Hằng là cô giáo dạy giỏi của trường em",
          "Cô giáo đang giảng bài say sưa",
          "Cô giáo rất dịu dàng và hiền hậu",
          "Học sinh kính cẩn chào cô giáo"
        ],
        correctIndex: 0,
        hint: "Câu có chữ 'là' dùng để giới thiệu chức vụ, nghề nghiệp của cô giáo.",
        explanation: "Cô khen con xuất sắc! 'Cô Lê Thị Thanh Hằng là cô giáo dạy giỏi của trường em' thuộc mẫu câu 'Ai là gì?'.",
        funFact: "Mẫu câu 'Ai là gì?' là chiếc cầu nối thân thiện giúp các bạn nhỏ làm quen và giới thiệu bản thân!"
      }
    ],
    encouragementMessage: "Cô Lê Thị Thanh Hằng gửi tặng con một bông hoa điểm 10 tươi thắm! Con học Tiếng Việt rất thông minh và chăm chỉ!",
    followUpSuggestions: [
      `Cô Hằng ơi, viết đoạn văn ngắn về "${cleanTopic}" như thế nào ạ?`,
      "Có câu đố chữ vui nào về bài này không cô?",
      "Cách phân biệt từ chỉ hoạt động và từ chỉ đặc điểm dễ nhớ nhất là gì ạ?"
    ]
  };
}
