import { StudyBuddyResponse } from "../types";

export function generateClientFallbackLesson(
  topic: string,
  subject?: "all" | "toan" | "tieng-viet",
  ageGroup?: string
): StudyBuddyResponse {
  const cleanTopic = topic.trim() || (subject === "tieng-viet" ? "Biện pháp so sánh" : "Bảng nhân 5");
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
    lower.includes("chu vi") ||
    lower.includes("diện tích") ||
    lower.includes("phân số") ||
    lower.includes("que tính") ||
    lower.includes("đo lường") ||
    lower.includes("kg") ||
    lower.includes("lít") ||
    lower.includes("mét") ||
    lower.includes("cm");

  if (isMath) {
    return {
      topic: cleanTopic,
      topicEmoji: "🔢",
      summaryBadge: "Môn Toán Cô Thanh Hằng",
      simpleExplanation: {
        title: `Bí quyết học giỏi ${cleanTopic} cùng Cô Thanh Hằng`,
        content: `Chào con yêu! Trong môn Toán của Cô Thanh Hằng, ${cleanTopic} là một kiến thức rất thú vị và bổ ích. Toán học không hề khô khan mà giống như trò chơi ghép hình thông minh: khi con hiểu rõ quy luật của các con số và hình khối, con sẽ tìm ra đáp án nhanh như chớp!`,
        analogy: `Hãy tưởng tượng các con số giống như những bậc thang kỳ diệu, con bước từng bước vững chắc thì bậc thang nào con cũng vượt qua dễ dàng!`
      },
      relatableExamples: [
        {
          title: "Ví dụ chia kẹo ngọt cùng bạn thân",
          description: "Nếu con có 10 chiếc kẹo và chia đều cho 2 bạn, mỗi bạn sẽ nhận được đúng 5 chiếc kẹo thơm ngon (10 : 2 = 5).",
          emoji: "🍬"
        },
        {
          title: "Ví dụ đếm đồ chơi trong phòng học",
          description: "Mỗi ngăn kệ có 3 quyển truyện tranh, nếu con có 4 ngăn thì tổng cộng con có 12 quyển truyện hay (3 x 4 = 12).",
          emoji: "📚"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Đọc thật kỹ đề bài",
          takeaway: "Gạch chân dưới dữ kiện bài toán cho biết gì và câu hỏi bài toán yêu cầu tìm gì.",
          iconHint: "🔍"
        },
        {
          number: 2,
          title: "Hiểu bản chất phép tính",
          takeaway: "Nắm chắc quy tắc thực hiện phép tính, đặt tính thẳng cột từ hàng đơn vị đến hàng chục.",
          iconHint: "💡"
        },
        {
          number: 3,
          title: "Luôn kiểm tra lại kết quả",
          takeaway: "Tính nhẩm ngược lại một lần nữa để chắc chắn nhận trọn điểm 10 rực rỡ của Cô nhé!",
          iconHint: "⭐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: `Bản chất của ${cleanTopic} là gì?`,
          back: `Là quy luật toán học giúp con tính toán nhanh, tư duy logic và giải quyết các bài toán một cách chính xác.`,
          category: "Thuật ngữ Toán",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Khi gặp bài toán có lời văn, bước 1 con làm gì?",
          back: "Đọc thật kỹ đề bài ít nhất 2 lần và xác định rõ: Bài toán cho biết gì? Bài toán hỏi gì?",
          category: "Phương pháp giải",
          emoji: "🔍"
        },
        {
          id: 3,
          front: "Mẹo kiểm tra lại kết quả phép tính như thế nào?",
          back: "Thực hiện phép tính ngược lại (kiểm tra phép trừ bằng phép cộng, kiểm tra phép chia bằng phép nhân).",
          category: "Bí kíp tính nhanh",
          emoji: "💡"
        },
        {
          id: 4,
          front: "Làm sao để không bị nhầm lẫn khi đặt tính rồi tính?",
          back: "Viết các chữ số thẳng hàng thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.",
          category: "Quy tắc trình bày",
          emoji: "📐"
        },
        {
          id: 5,
          front: "Bí quyết học giỏi Toán của Cô Thanh Hằng là gì?",
          back: "Hiểu bản chất số học, chăm chỉ luyện tập 15 phút mỗi ngày và tự tin phát biểu xây dựng bài!",
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
            "Bỏ qua bài toán khó",
            "Chỉ đoán mò kết quả"
          ],
          correctIndex: 0,
          hint: "Đọc kỹ đề bài là chiếc chìa khóa vàng giúp con không bao giờ làm nhầm.",
          explanation: "Cô khen con rất giỏi! Đọc kỹ đề bài giúp con hiểu đúng và tìm ra cách giải nhanh nhất!",
          funFact: "Các nhà toán học nổi tiếng thế giới luôn dành phần lớn thời gian để phân tích đề bài thật cẩn thận đấy!"
        },
        {
          id: 2,
          question: "Nếu con gặp một bài toán khó chưa nghĩ ra ngay, con nên làm như thế nào?",
          options: [
            "Bỏ cuộc không làm nữa",
            "Tách bài toán thành các bước nhỏ và vẽ sơ đồ minh họa",
            "Nhờ người khác làm hộ từ đầu đến cuối",
            "Khoanh bừa một đáp án"
          ],
          correctIndex: 1,
          hint: "Hình vẽ hoặc sơ đồ đoạn thẳng sẽ giúp đáp án hiện ra ngay trước mắt con.",
          explanation: "Hoan hô bạn nhỏ! Tách nhỏ bài toán và vẽ sơ đồ là phương pháp học đỉnh cao của học sinh giỏi Toán Cô Thanh Hằng!",
          funFact: "Hình vẽ minh họa giúp não bộ của con tư duy nhanh gấp 3 lần so với chỉ nhìn chữ viết!"
        },
        {
          id: 3,
          question: "Để tính toán nhanh và tự tin đạt điểm 10 môn Toán, bí quyết của con là gì?",
          options: [
            "Học thuộc bảng tính và rèn luyện 15 phút mỗi ngày",
            "Chỉ học trước ngày thi một buổi",
            "Không cần làm bài tập về nhà",
            "Chỉ tính nhẩm đại khái"
          ],
          correctIndex: 0,
          hint: "Chăm chỉ đều đặn mỗi ngày sẽ biến con thành kiện tướng toán học.",
          explanation: "Tuyệt vời luôn con yêu! Chăm chỉ mỗi ngày sẽ giúp con luôn tự tin đứng đầu lớp môn Toán!",
          funFact: "Bộ não sẽ phát triển thêm hàng triệu kết nối thông minh mỗi khi con giải quyết thành công một câu đố toán học!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng gửi tặng con một bông hoa điểm 10 tươi thắm! Con rất thông minh và chăm chỉ, tiếp tục phát huy nhé!",
      followUpSuggestions: [
        `Cô Hằng ơi, có mẹo nào tính nhanh ${cleanTopic} không ạ?`,
        `Cô Hằng cho con thêm một câu đố vui về ${cleanTopic} được không ạ?`,
        `Ứng dụng của ${cleanTopic} trong đời sống hàng ngày là gì ạ?`
      ]
    };
  }

  // Tiếng Việt default fallback
  return {
    topic: cleanTopic,
    topicEmoji: "📖",
    summaryBadge: "Môn Tiếng Việt Cô Thanh Hằng",
    simpleExplanation: {
      title: `Cùng Cô Thanh Hằng khám phá ${cleanTopic}`,
      content: `Chào con yêu! Tiếng Việt của chúng mình giàu đẹp, trong sáng và chan chứa yêu thương. Khi tìm hiểu về ${cleanTopic}, con sẽ biết cách dùng từ ngữ thật hay, viết câu văn mượt mà và diễn đạt cảm xúc chân thật nhất.`,
      analogy: `Hãy tưởng tượng những con chữ giống như những nốt nhạc vui nhộn, khi con sắp xếp đúng điệu, con sẽ tạo nên một bài ca tuyệt hay!`
    },
    relatableExamples: [
      {
        title: "Ví dụ trong câu văn miêu tả sinh động",
        description: "Khi tả đôi mắt mẹ: 'Mắt mẹ sáng lung linh như những vì sao đêm', câu văn lập tức trở nên ấm áp và tràn đầy tình cảm.",
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
        takeaway: "Chữ đầu câu nhớ viết hoa, cuối câu đặt dấu chấm hoặc dấu câu thích hợp.",
        iconHint: "✍️"
      },
      {
        number: 3,
        title: "Gửi gắm cảm xúc vào bài viết",
        takeaway: "Sử dụng từ ngữ gợi cảm và hình ảnh so sánh, nhân hóa để bài văn thêm cuốn hút.",
        iconHint: "💖"
      }
    ],
    flashcards: [
      {
        id: 1,
        front: `Thế nào là ${cleanTopic}?`,
        back: `Là kiến thức Tiếng Việt quan trọng giúp con diễn đạt ý nghĩ mạch lạc, lời văn trong sáng và giàu cảm xúc.`,
        category: "Khái niệm Tiếng Việt",
        emoji: "📖"
      },
      {
        id: 2,
        front: "Mẹo để đoạn văn hay và lôi cuốn người đọc là gì?",
        back: "Sử dụng các từ ngữ gợi tả âm thanh, màu sắc và biện pháp so sánh, nhân hóa gần gũi.",
        category: "Bí kíp làm văn",
        emoji: "✨"
      },
      {
        id: 3,
        front: "Quy tắc vàng về dấu câu trong Tiếng Việt là gì?",
        back: "Đầu câu bắt buộc viết hoa, kết thúc câu trọn ý phải có dấu chấm hoặc dấu câu phù hợp.",
        category: "Quy tắc ngữ pháp",
        emoji: "✍️"
      },
      {
        id: 4,
        front: "Làm sao để không bao giờ bị viết sai chính tả?",
        back: "Hiểu rõ nghĩa của từ, phát âm chuẩn xác và tích cực đọc sách thiếu nhi mỗi ngày.",
        category: "Bí kíp chính tả",
        emoji: "📚"
      },
      {
        id: 5,
        front: "Lời nhắn nhủ của Cô Thanh Hằng khi học Tiếng Việt?",
        back: "Yêu quý tiếng mẹ đẻ, tự tin viết nên những trang văn giàu cảm xúc và gửi gắm yêu thương vào từng câu chữ!",
        category: "Lời khuyên từ Cô",
        emoji: "🌸"
      }
    ],
    quizQuestions: [
      {
        id: 1,
        question: `Khi viết một câu văn Tiếng Việt hoàn chỉnh, con cần ghi nhớ điều gì nhất?`,
        options: [
          "Đầu câu viết hoa và cuối câu có dấu câu thích hợp",
          "Viết tùy thích không cần dấu câu",
          "Chỉ cần viết một từ duy nhất",
          "Không cần chú ý lỗi chính tả"
        ],
        correctIndex: 0,
        hint: "Dấu chấm câu giúp người đọc hiểu trọn vẹn câu văn của con.",
        explanation: "Chính xác luôn con yêu! Cô Thanh Hằng rất khen con đã ghi nhớ quy tắc vàng về dấu câu!",
        funFact: "Dấu câu giống như những biển chỉ dẫn giao thông giúp bài văn trôi chảy và rõ ràng đấy!"
      },
      {
        id: 2,
        question: "Làm thế nào để bài tập làm văn của con trở nên sinh động và giàu cảm xúc hơn?",
        options: [
          "Sử dụng hình ảnh so sánh và từ gợi tả màu sắc, âm thanh",
          "Chép nguyên văn bài của bạn khác",
          "Viết thật ngắn cho nhanh xong",
          "Không dùng bất kỳ từ chỉ cảm xúc nào"
        ],
        correctIndex: 0,
        hint: "Những hình ảnh so sánh ví von sẽ làm bài văn bừng sáng.",
        explanation: "Giỏi lắm bạn nhỏ của cô! Những hình ảnh so sánh ví von gần gũi sẽ mang về điểm 10 rực rỡ cho con!",
        funFact: "Những nhà văn vĩ đại nhất đều là những người rất thích quan sát thiên nhiên và cuộc sống xung quanh!"
      },
      {
        id: 3,
        question: "Bí quyết để con mở rộng vốn từ và không bao giờ viết sai chính tả là gì?",
        options: [
          "Chăm chỉ đọc sách truyện thiếu nhi và viết nắn nót mỗi ngày",
          "Không cần đọc sách",
          "Viết thật nhanh ẩu",
          "Không bao giờ kiểm tra lại bài viết"
        ],
        correctIndex: 0,
        hint: "Mỗi trang sách hay là một người thầy dạy chính tả và vốn từ tuyệt vời.",
        explanation: "Tuyệt vời luôn con! Đọc sách mỗi ngày cùng Cô Hằng sẽ giúp con trở thành cây bút nhí xuất sắc!",
        funFact: "Đọc 10 trang sách thiếu nhi mỗi ngày giúp con tích lũy thêm hơn 1.000 từ ngữ mới mỗi năm!"
      }
    ],
    encouragementMessage: "Cô Lê Thị Thanh Hằng gửi tặng con một bông hoa điểm 10 rực rỡ! Con rất chăm chỉ và yêu thích Tiếng Việt!",
    followUpSuggestions: [
      `Cô Hằng ơi, viết đoạn văn ngắn về ${cleanTopic} như thế nào ạ?`,
      `Có câu đố vui chữ nào về ${cleanTopic} không cô Hằng?`,
      `Mẹo phân biệt các từ dễ lẫn trong Tiếng Việt là gì ạ?`
    ]
  };
}
