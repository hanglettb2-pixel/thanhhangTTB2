import { StudyBuddyResponse } from "../types";

export interface StandardizedLessonEntry {
  keywords: string[];
  data: StudyBuddyResponse;
}

export const STANDARDIZED_LESSONS: StandardizedLessonEntry[] = [
  // =========================================================================
  // TOÁN 2 TẬP 1
  // =========================================================================
  {
    keywords: ["số hạng", "tổng", "so hang", "tong"],
    data: {
      topic: "Toán lớp 2: Số hạng và Tổng",
      topicEmoji: "➕",
      summaryBadge: "SGK Toán 2 • Bài 3 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết nhận biết Số hạng và Tổng cùng Cô Thanh Hằng",
        content: "Chào con yêu! Trong phép tính cộng, các số đem cộng lại với nhau được gọi là 'Số hạng', còn kết quả tính được gọi là 'Tổng'. Phép cộng giúp con gom các đồ vật lại để biết có tất cả bao nhiêu đấy!",
        analogy: "Hãy tưởng tượng con có một đĩa táo và một đĩa cam. Táo là số hạng thứ nhất, cam là số hạng thứ hai. Khi con gom chung vào một rổ to, toàn bộ hoa quả trong rổ chính là Tổng!"
      },
      relatableExamples: [
        {
          title: "Ví dụ góp bi cùng bạn Nam",
          description: "Con có 12 viên bi đỏ (số hạng), bạn Nam góp thêm 15 viên bi xanh (số hạng). Cả hai bạn có 27 viên bi (12 + 15 = 27 là tổng).",
          emoji: "🔴"
        },
        {
          title: "Ví dụ đếm hoa tặng Cô giáo",
          description: "Tổ Một hái được 20 bông hoa, Tổ Hai hái được 14 bông hoa. Cả hai tổ hái được: 20 + 14 = 34 bông hoa (34 là tổng).",
          emoji: "💐"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Công thức vàng",
          takeaway: "Số hạng + Số hạng = Tổng.",
          iconHint: "💡"
        },
        {
          number: 2,
          title: "Hai cách gọi của Tổng",
          takeaway: "Kết quả của phép cộng là một tổng, và bản thân phép tính (Ví dụ: 25 + 14) cũng được gọi là một tổng.",
          iconHint: "⭐"
        },
        {
          number: 3,
          title: "Đặt tính thẳng cột",
          takeaway: "Khi đặt tính theo cột dọc: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.",
          iconHint: "📐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Trong phép tính 32 + 15 = 47, số 47 được gọi là gì?",
          back: "Số 47 được gọi là TỔNG (kết quả của phép cộng).",
          category: "Thành phần phép tính",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Trong phép tính 20 + 30 = 50, các số 20 và 30 được gọi là gì?",
          back: "Số 20 và 30 được gọi là các SỐ HẠNG.",
          category: "Thành phần phép tính",
          emoji: "🔍"
        },
        {
          id: 3,
          front: "Biểu thức 18 + 12 có được gọi là một tổng không?",
          back: "Có! Cả phép tính 18 + 12 cũng được gọi là một tổng.",
          category: "Quy tắc Toán 2",
          emoji: "💡"
        },
        {
          id: 4,
          front: "Muốn tìm tổng của hai số hạng 40 và 25, ta làm phép tính gì?",
          back: "Ta làm phép tính cộng: 40 + 25 = 65.",
          category: "Cách tính",
          emoji: "📐"
        },
        {
          id: 5,
          front: "Khi đổi chỗ hai số hạng thì tổng có thay đổi không?",
          back: "Tổng KHÔNG thay đổi (Ví dụ: 3 + 5 = 5 + 3 = 8).",
          category: "Tính chất phép cộng",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Trong phép cộng: 35 + 24 = 59, số 59 được gọi là gì?",
          options: ["Số hạng", "Số bị trừ", "Tổng", "Hiệu"],
          correctIndex: 2,
          hint: "Kết quả của phép cộng hai số luôn có tên gọi là gì nhỉ?",
          explanation: "Chính xác! Trong phép cộng: 35 (số hạng) + 24 (số hạng) = 59 (Tổng).",
          funFact: "Dấu cộng (+) được các nhà toán học phát minh ra hơn 500 năm trước để viết tắt chữ 'thêm vào'!"
        },
        {
          id: 2,
          question: "Biết hai số hạng lần lượt là 40 và 18. Tổng của hai số đó là bao nhiêu?",
          options: ["58", "48", "22", "50"],
          correctIndex: 0,
          hint: "Muốn tìm tổng, con lấy số hạng thứ nhất cộng với số hạng thứ hai: 40 + 18.",
          explanation: "Tuyệt vời con yêu! Ta lấy 40 + 18 = 58. Vậy tổng của hai số là 58.",
          funFact: "Số tròn chục như 40 cộng với số có hai chữ số rất dễ nhẩm: 4 chục + 1 chục = 5 chục, thêm 8 đơn vị là 58!"
        },
        {
          id: 3,
          question: "Một cửa hàng buổi sáng bán được 25kg gạo, buổi chiều bán được 32kg gạo. Cả hai buổi cửa hàng bán được tất cả bao nhiêu ki-lô-gam gạo?",
          options: ["47 kg", "57 kg", "55 kg", "67 kg"],
          correctIndex: 1,
          hint: "Tìm số gạo 'cả hai buổi' tức là tìm tổng số gạo: lấy số gạo buổi sáng cộng số gạo buổi chiều.",
          explanation: "Cô khen con xuất sắc! Phép tính là: 25 + 32 = 57 (kg). Vậy cả hai buổi bán được 57 kg gạo.",
          funFact: "Gạo là lương thực quý báu nuôi sống hàng triệu gia đình Việt Nam mỗi ngày!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con đã nắm chắc bài học Số hạng và Tổng! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, có mẹo nào cộng nhẩm nhanh hai số có 2 chữ số không ạ?",
        "Khi đổi chỗ các số hạng thì tổng có đổi không cô?",
        "Cho con một bài toán vui về tìm số hạng còn thiếu nhé cô!"
      ]
    }
  },
  {
    keywords: ["số bị trừ", "số trừ", "hiệu", "so bi tru", "so tru", "hieu"],
    data: {
      topic: "Toán lớp 2: Số bị trừ, Số trừ và Hiệu",
      topicEmoji: "➖",
      summaryBadge: "SGK Toán 2 • Bài 3 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết nhớ tên Số bị trừ, Số trừ và Hiệu cùng Cô Thanh Hằng",
        content: "Chào con yêu! Trong phép tính trừ: Số đứng trước dấu trừ gọi là 'Số bị trừ', số đứng sau dấu trừ gọi là 'Số trừ', và kết quả nhận được gọi là 'Hiệu'. Phép trừ giúp con tìm phần còn lại hoặc so sánh xem số này hơn số kia bao nhiêu!",
        analogy: "Hãy tưởng tượng con có một đĩa bánh gồm 10 cái (Số bị trừ). Con chia cho bạn 3 cái (Số trừ). Số bánh còn lại trên đĩa là 7 cái chính là Hiệu!"
      },
      relatableExamples: [
        {
          title: "Ví dụ đĩa cam mẹ mua",
          description: "Mẹ mua 15 quả cam (số bị trừ), cả nhà ăn hết 5 quả (số trừ). Trên đĩa còn lại 10 quả cam (15 - 5 = 10 là hiệu).",
          emoji: "🍊"
        },
        {
          title: "Ví dụ đếm số trang sách",
          description: "Quyển truyện có 48 trang (số bị trừ), con đã đọc được 20 trang (số trừ). Con còn phải đọc 28 trang nữa (48 - 20 = 28 là hiệu).",
          emoji: "📖"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Công thức chuẩn",
          takeaway: "Số bị trừ - Số trừ = Hiệu.",
          iconHint: "💡"
        },
        {
          number: 2,
          title: "Cách gọi của Hiệu",
          takeaway: "Kết quả của phép trừ là một hiệu, và bản thân phép tính (Ví dụ: 65 - 20) cũng được gọi là một hiệu.",
          iconHint: "⭐"
        },
        {
          number: 3,
          title: "Quy tắc kiểm tra",
          takeaway: "Muốn thử lại phép trừ xem đúng chưa, con lấy Hiệu cộng với Số trừ sẽ ra Số bị trừ!",
          iconHint: "🔍"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Trong phép trừ 76 - 32 = 44, số 76 được gọi là gì?",
          back: "Số 76 đứng đầu tiên nên được gọi là SỐ BỊ TRỪ.",
          category: "Thành phần phép trừ",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Trong phép trừ 76 - 32 = 44, số 32 được gọi là gì?",
          back: "Số 32 đứng sau dấu trừ nên được gọi là SỐ TRỪ.",
          category: "Thành phần phép trừ",
          emoji: "🔍"
        },
        {
          id: 3,
          front: "Trong phép trừ 76 - 32 = 44, số 44 được gọi là gì?",
          back: "Số 44 là kết quả của phép trừ, được gọi là HIỆU.",
          category: "Thành phần phép trừ",
          emoji: "💡"
        },
        {
          id: 4,
          front: "Số bị trừ là 50, số trừ là 20. Hiệu bằng bao nhiêu?",
          back: "Hiệu là: 50 - 20 = 30.",
          category: "Cách tính",
          emoji: "📐"
        },
        {
          id: 5,
          front: "Một số trừ đi chính nó thì hiệu bằng mấy?",
          back: "Bằng 0! Ví dụ: 8 - 8 = 0, 45 - 45 = 0.",
          category: "Quy tắc đặc biệt",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Trong phép trừ: 68 - 25 = 43, số 68 được gọi là gì?",
          options: ["Số trừ", "Số bị trừ", "Hiệu", "Tổng"],
          correctIndex: 1,
          hint: "Số đứng trước dấu trừ bị đem đi bớt một phần gọi là số gì nhỉ?",
          explanation: "Đúng rồi! Số đứng trước dấu trừ gọi là Số bị trừ (68), số trừ là 25, và hiệu là 43.",
          funFact: "Từ 'bị' trong 'Số bị trừ' nghĩa là số đó chịu sự bớt đi đấy!"
        },
        {
          id: 2,
          question: "Cho số bị trừ là 85, số trừ là 30. Hiệu của hai số đó là bao nhiêu?",
          options: ["55", "45", "65", "115"],
          correctIndex: 0,
          hint: "Muốn tìm hiệu, con lấy Số bị trừ trừ đi Số trừ: 85 - 30.",
          explanation: "Hoan hô con! Ta thực hiện phép trừ: 85 - 30 = 55. Vậy hiệu là 55.",
          funFact: "Khi trừ số tròn chục, con chỉ cần trừ hàng chục (8 chục - 3 chục = 5 chục), hàng đơn vị giữ nguyên 5!"
        },
        {
          id: 3,
          question: "Trên cây có 18 chú chim đang hót líu lo, sau đó có 6 chú chim bay đi. Hỏi trên cây còn lại bao nhiêu chú chim?",
          options: ["24 chú chim", "14 chú chim", "12 chú chim", "10 chú chim"],
          correctIndex: 2,
          hint: "Có 18 chú chim, bay đi 6 chú là làm phép tính trừ: 18 - 6.",
          explanation: "Cô khen con rất thông minh! Số chim còn lại là: 18 - 6 = 12 (chú chim).",
          funFact: "Loài chim bay đi kiếm mồi rồi buổi chiều sẽ lại bay về tổ ấm của mình cùng bầy đàn!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen con đã phân biệt cực chuẩn Số bị trừ, Số trừ và Hiệu! Con xứng đáng nhận hoa điểm 10!",
      followUpSuggestions: [
        "Cô Hằng ơi, nếu biết Hiệu và Số trừ thì tìm Số bị trừ thế nào ạ?",
        "Một số trừ đi 0 thì bằng mấy hả cô?",
        "Cho con thử sức thêm bài toán đố về phép trừ nhé cô!"
      ]
    }
  },
  {
    keywords: ["tia số", "số liền trước", "số liền sau", "tia so", "so lien truoc", "so lien sau"],
    data: {
      topic: "Toán lớp 2: Tia số, số liền trước và số liền sau",
      topicEmoji: "➡️",
      summaryBadge: "SGK Toán 2 • Bài 2 Kết nối tri thức",
      simpleExplanation: {
        title: "Khám phá Tia số và Thứ tự các số cùng Cô Thanh Hằng",
        content: "Chào con yêu! Tia số là một đường thẳng có gốc là số 0 và mũi tên chỉ chiều tăng dần từ trái sang phải. Trên tia số, mỗi số có một người bạn đứng ngay trước (số liền trước) và một người bạn đứng ngay sau (số liền sau)!",
        analogy: "Hãy tưởng tượng các bạn học sinh đang xếp hàng vào lớp: bạn đứng ngay trước con là 'liền trước' (kém con 1 bạn), bạn đứng ngay sau con là 'liền sau' (hơn con 1 bạn)!"
      },
      relatableExamples: [
        {
          title: "Ví dụ đếm tuổi của bé",
          description: "Năm nay con 7 tuổi. Số tuổi năm ngoái của con là 6 tuổi (số liền trước của 7). Sang năm con 8 tuổi (số liền sau của 7).",
          emoji: "🎂"
        },
        {
          title: "Ví dụ các ngày trong tuần",
          description: "Hôm nay là ngày 15. Ngày hôm qua là ngày 14 (liền trước của 15). Ngày mai là ngày 16 (liền sau của 15).",
          emoji: "📅"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Mẹo tìm số liền trước",
          takeaway: "Muốn tìm số liền trước của một số, ta lấy số đó bớt đi 1 đơn vị (- 1).",
          iconHint: "⬅️"
        },
        {
          number: 2,
          title: "Mẹo tìm số liền sau",
          takeaway: "Muốn tìm số liền sau của một số, ta lấy số đó thêm 1 đơn vị (+ 1).",
          iconHint: "➡️"
        },
        {
          number: 3,
          title: "Quy luật trên tia số",
          takeaway: "Số đứng bên trái luôn bé hơn số đứng bên phải trên tia số.",
          iconHint: "📏"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Muốn tìm số liền trước của số 50, con làm phép tính gì?",
          back: "Lấy 50 - 1 = 49. Vậy số liền trước của 50 là 49.",
          category: "Số liền trước",
          emoji: "⬅️"
        },
        {
          id: 2,
          front: "Số liền sau của số 99 là số nào?",
          back: "Lấy 99 + 1 = 100. Số liền sau của 99 là 100.",
          category: "Số liền sau",
          emoji: "➡️"
        },
        {
          id: 3,
          front: "Gốc của tia số thông thường là số mấy?",
          back: "Gốc của tia số bắt đầu từ số 0.",
          category: "Đặc điểm tia số",
          emoji: "📍"
        },
        {
          id: 4,
          front: "Hai số liền nhau hơn kém nhau mấy đơn vị?",
          back: "Hai số liền nhau luôn hơn kém nhau đúng 1 đơn vị.",
          category: "Quy luật",
          emoji: "💡"
        },
        {
          id: 5,
          front: "Số liền trước của số 1 là số nào?",
          back: "Là số 0 (1 - 1 = 0).",
          category: "Trường hợp đặc biệt",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Số liền trước của số 70 là số nào?",
          options: ["69", "71", "68", "80"],
          correctIndex: 0,
          hint: "Muốn tìm số liền trước, con lấy số đó trừ đi 1: 70 - 1.",
          explanation: "Chính xác! Lấy 70 - 1 = 69. Vậy số liền trước của 70 là 69.",
          funFact: "Số liền trước của một số tròn chục luôn có chữ số tận cùng là 9!"
        },
        {
          id: 2,
          question: "Số liền sau của số 99 là số nào?",
          options: ["98", "100", "90", "101"],
          correctIndex: 1,
          hint: "Muốn tìm số liền sau, con lấy số đó cộng thêm 1 đơn vị: 99 + 1.",
          explanation: "Tuyệt vời! 99 + 1 = 100. Số 100 là số có 3 chữ số nhỏ nhất!",
          funFact: "Số 100 trong tiếng Việt còn gọi là 'Một trăm' hay 'Điểm 10 chục' đấy!"
        },
        {
          id: 3,
          question: "Trên tia số, hai số đứng liền kề nhau thì hơn kém nhau bao nhiêu đơn vị?",
          options: ["1 đơn vị", "2 đơn vị", "10 đơn vị", "5 đơn vị"],
          correctIndex: 0,
          hint: "Ví dụ: số 4 và số 5, số 19 và số 20 hơn kém nhau mấy đơn vị?",
          explanation: "Cô khen con! Trên tia số các số tự nhiên liên tiếp, hai số đứng cạnh nhau luôn hơn kém nhau đúng 1 đơn vị.",
          funFact: "Thước kẻ học sinh của con chính là một hình ảnh thu nhỏ tuyệt đẹp của tia số có vạch chia centimet!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng chúc mừng con đã đọc tia số siêu nhanh! Tặng con bông hoa học tốt rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, tia số có điểm kết thúc không ạ?",
        "Làm sao so sánh hai số thật nhanh bằng tia số?",
        "Đố cô tìm được số liền trước của số bé nhất có hai chữ số!"
      ]
    }
  },
  {
    keywords: ["bảng cộng", "cộng qua 10", "9 cộng", "8 cộng", "7 cộng", "6 cộng", "bang cong qua 10"],
    data: {
      topic: "Toán lớp 2: Bảng cộng qua 10 trong phạm vi 20",
      topicEmoji: "➕",
      summaryBadge: "SGK Toán 2 • Bài 10 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí kíp cộng qua 10 siêu nhanh cùng Cô Thanh Hằng",
        content: "Chào con yêu! Khi cộng hai số mà kết quả lớn hơn 10 (như 9 + 5, 8 + 6, 7 + 5), bí quyết vàng của Cô Hằng là: 'Tách số thứ hai để ghép với số thứ nhất cho vừa tròn 10, rồi lấy 10 cộng với phần còn lại'!",
        analogy: "Hãy tưởng tượng con có một chiếc hộp đựng vừa khít 10 quả trứng. Hộp đã có 9 quả, con chỉ cần lấy thêm đúng 1 quả nữa là đầy hộp (10 quả). Phần còn lại con để ra ngoài và đếm rất nhanh!"
      },
      relatableExamples: [
        {
          title: "Ví dụ tính 9 + 4",
          description: "9 cần thêm 1 để thành 10. Tách 4 thành 1 và 3. Ta có: 9 + 1 = 10, rồi 10 + 3 = 13. Vậy 9 + 4 = 13!",
          emoji: "🥚"
        },
        {
          title: "Ví dụ tính 8 + 5",
          description: "8 cần thêm 2 để thành 10. Tách 5 thành 2 và 3. Ta có: 8 + 2 = 10, rồi 10 + 3 = 13. Vậy 8 + 5 = 13!",
          emoji: "🍎"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Quy tắc 9 cộng với một số",
          takeaway: "Tách 1 ở số sau để gộp với 9 thành 10, rồi lấy 10 cộng với số còn lại.",
          iconHint: "9️⃣"
        },
        {
          number: 2,
          title: "Quy tắc 8 cộng với một số",
          takeaway: "Tách 2 ở số sau để gộp với 8 thành 10, rồi lấy 10 cộng với số còn lại.",
          iconHint: "8️⃣"
        },
        {
          number: 3,
          title: "Quy tắc 7 cộng với một số",
          takeaway: "Tách 3 ở số sau để gộp với 7 thành 10, rồi lấy 10 cộng với số còn lại.",
          iconHint: "7️⃣"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "9 + 5 bằng bao nhiêu?",
          back: "9 + 5 = 14 (Tách 5 thành 1 và 4: 9 + 1 = 10, 10 + 4 = 14).",
          category: "Bảng cộng 9",
          emoji: "🌸"
        },
        {
          id: 2,
          front: "8 + 7 bằng bao nhiêu?",
          back: "8 + 7 = 15 (Tách 7 thành 2 và 5: 8 + 2 = 10, 10 + 5 = 15).",
          category: "Bảng cộng 8",
          emoji: "⭐"
        },
        {
          id: 3,
          front: "7 + 6 bằng bao nhiêu?",
          back: "7 + 6 = 13 (Tách 6 thành 3 và 3: 7 + 3 = 10, 10 + 3 = 13).",
          category: "Bảng cộng 7",
          emoji: "💡"
        },
        {
          id: 4,
          front: "6 + 5 bằng bao nhiêu?",
          back: "6 + 5 = 11 (Tách 5 thành 4 và 1: 6 + 4 = 10, 10 + 1 = 11).",
          category: "Bảng cộng 6",
          emoji: "📐"
        },
        {
          id: 5,
          front: "Vì sao mẹo làm tròn 10 lại giúp tính nhẩm nhanh?",
          back: "Vì số 10 cộng với bất kỳ số có một chữ số nào cũng ra đáp án ngay tức khắc!",
          category: "Bí quyết tính nhẩm",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Kết quả của phép tính: 9 + 6 là bao nhiêu?",
          options: ["14", "15", "16", "17"],
          correctIndex: 1,
          hint: "Tách 6 thành 1 và 5. Lấy 9 + 1 = 10, sau đó 10 + 5 bằng mấy?",
          explanation: "Chính xác! 9 + 6 = 15. Tách 6 thành 1 và 5, ta có: 9 + 1 = 10, 10 + 5 = 15.",
          funFact: "Khi cộng 9 với một số có 1 chữ số, chữ số hàng đơn vị của kết quả luôn kém số đó 1 đơn vị (9 + 6 tận cùng là 5, 9 + 7 tận cùng là 6)!"
        },
        {
          id: 2,
          question: "Để tính nhẩm phép cộng 8 + 7 bằng cách làm cho tròn 10, con tách số 7 thành hai số nào?",
          options: ["2 và 5", "1 và 6", "3 và 4", "0 và 7"],
          correctIndex: 0,
          hint: "Số 8 cần thêm mấy để được 10? Vậy con cần tách số 7 ra số đó trước.",
          explanation: "Rất giỏi! 8 cần 2 để tròn 10, nên ta tách 7 thành 2 và 5: 8 + 2 = 10, rồi 10 + 5 = 15.",
          funFact: "Phương pháp tách số làm tròn 10 được học sinh trên toàn thế giới yêu thích vì không bao giờ sợ đếm nhầm ngón tay!"
        },
        {
          id: 3,
          question: "Mẹ mua 7 quả cam, bố mua thêm 8 quả cam nữa. Hỏi cả bố và mẹ đã mua tất cả bao nhiêu quả cam?",
          options: ["14 quả", "15 quả", "16 quả", "13 quả"],
          correctIndex: 1,
          hint: "Làm phép cộng: 7 + 8 = ? (Có thể tính 8 + 7 = 15).",
          explanation: "Hoan hô con! Phép tính là: 7 + 8 = 15 (quả cam). Cả bố và mẹ đã mua tất cả 15 quả cam.",
          funFact: "Quả cam chứa rất nhiều vitamin C giúp các bé có sức đề kháng khỏe mạnh để học tập thật tốt!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen con tính nhẩm bảng cộng qua 10 siêu đỉnh! Con xứng đáng nhận hoa điểm 10 tươi thắm!",
      followUpSuggestions: [
        "Cô Hằng ơi, có bảng cộng 6, 7, 8, 9 tổng hợp không ạ?",
        "Làm sao tính nhẩm 9 + 9 trong 1 giây cô nhỉ?",
        "Cho con thêm 3 bài tập đố vui về bảng cộng qua 10 nhé!"
      ]
    }
  },
  {
    keywords: ["bảng trừ", "trừ qua 10", "11 trừ", "12 trừ", "13 trừ", "14 trừ", "bang tru qua 10"],
    data: {
      topic: "Toán lớp 2: Bảng trừ qua 10 trong phạm vi 20",
      topicEmoji: "➖",
      summaryBadge: "SGK Toán 2 • Bài 11 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết trừ qua 10 trong nháy mắt cùng Cô Thanh Hằng",
        content: "Chào con yêu! Khi làm các phép trừ như 11 - 5, 12 - 7, 13 - 8, cách làm chuẩn nhất theo SGK Kết nối tri thức là: 'Trừ để được 10 rồi lấy 10 trừ đi số còn lại'!",
        analogy: "Ví dụ tính 12 - 5: Số 12 gồm 1 chục và 2 đơn vị. Con trừ 2 trước để còn lại tròn 10. Con cần trừ 5 mà mới trừ 2, nên con trừ thêm 3 nữa: 10 - 3 = 7. Thế là xong!"
      },
      relatableExamples: [
        {
          title: "Ví dụ tính 11 - 4",
          description: "11 bớt 1 thành 10. Tách 4 thành 1 và 3. Lấy 11 - 1 = 10, rồi 10 - 3 = 7. Vậy 11 - 4 = 7!",
          emoji: "🍬"
        },
        {
          title: "Ví dụ tính 13 - 6",
          description: "13 bớt 3 thành 10. Tách 6 thành 3 và 3. Lấy 13 - 3 = 10, rồi 10 - 3 = 7. Vậy 13 - 6 = 7!",
          emoji: "🎈"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Bước 1: Bớt về 10",
          takeaway: "Lấy số bị trừ bớt đi chữ số hàng đơn vị để được số tròn 10.",
          iconHint: "1️⃣"
        },
        {
          number: 2,
          title: "Bước 2: Lấy 10 trừ tiếp",
          takeaway: "Lấy 10 trừ đi phần còn lại của số trừ.",
          iconHint: "2️⃣"
        },
        {
          number: 3,
          title: "Quan hệ cộng - trừ",
          takeaway: "Nếu con nhớ bảng cộng: vì 8 + 5 = 13 nên 13 - 5 = 8 và 13 - 8 = 5 ngay!",
          iconHint: "💡"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "11 - 6 bằng bao nhiêu?",
          back: "11 - 6 = 5 (Vì 5 + 6 = 11, hoặc 11 - 1 = 10, 10 - 5 = 5).",
          category: "Bảng trừ 11",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "12 - 5 bằng bao nhiêu?",
          back: "12 - 5 = 7 (12 - 2 = 10, 10 - 3 = 7).",
          category: "Bảng trừ 12",
          emoji: "⭐"
        },
        {
          id: 3,
          front: "13 - 7 bằng bao nhiêu?",
          back: "13 - 7 = 6 (13 - 3 = 10, 10 - 4 = 6).",
          category: "Bảng trừ 13",
          emoji: "🌸"
        },
        {
          id: 4,
          front: "15 - 8 bằng bao nhiêu?",
          back: "15 - 8 = 7 (15 - 5 = 10, 10 - 3 = 7).",
          category: "Bảng trừ 15",
          emoji: "💡"
        },
        {
          id: 5,
          front: "17 - 9 bằng bao nhiêu?",
          back: "17 - 9 = 8 (17 - 7 = 10, 10 - 2 = 8).",
          category: "Bảng trừ 17",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Kết quả của phép tính: 14 - 8 là bao nhiêu?",
          options: ["5", "6", "7", "8"],
          correctIndex: 1,
          hint: "Tách 8 thành 4 và 4. 14 - 4 = 10, rồi 10 - 4 bằng mấy?",
          explanation: "Chính xác! 14 - 8 = 6. Hoặc vì 6 + 8 = 14 nên 14 - 8 = 6.",
          funFact: "Số 6 là con số hoàn hảo đầu tiên trong toán học vì 1 + 2 + 3 = 6!"
        },
        {
          id: 2,
          question: "Để tính nhẩm 12 - 5 bằng cách bớt để được 10, con làm như thế nào?",
          options: [
            "Lấy 12 - 2 = 10, rồi lấy 10 - 3 = 7",
            "Lấy 12 - 5 = 10 rồi cộng thêm 2",
            "Lấy 10 - 5 = 5 rồi trừ 2",
            "Lấy 12 trừ 10"
          ],
          correctIndex: 0,
          hint: "12 trừ mấy thì vừa tròn 10? Sau đó 5 đã trừ đi phần đó thì còn mấy phải trừ tiếp?",
          explanation: "Quá xuất sắc! Số 12 có hàng đơn vị là 2, nên lấy 12 - 2 = 10. Số 5 tách thành 2 và 3, nên lấy tiếp 10 - 3 = 7.",
          funFact: "Nắm vững bảng trừ qua 10 sẽ giúp con làm các phép trừ có nhớ sau này cực kỳ nhẹ nhàng!"
        },
        {
          id: 3,
          question: "Lớp 2A có 15 bạn đăng ký tham gia đội văn nghệ, trong đó có 8 bạn nữ. Hỏi có bao nhiêu bạn nam tham gia?",
          options: ["6 bạn nam", "7 bạn nam", "8 bạn nam", "9 bạn nam"],
          correctIndex: 1,
          hint: "Muốn tìm số bạn nam, con lấy tổng số bạn trừ đi số bạn nữ: 15 - 8.",
          explanation: "Cô khen con rất thông minh! Số bạn nam là: 15 - 8 = 7 (bạn nam). Đáp số: 7 bạn nam.",
          funFact: "Văn nghệ ca hát giúp các bạn nhỏ luôn vui tươi, sảng khoái và tự tin trước đám đông đấy!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi sự tập trung và tính toán thông minh của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, có mẹo nào dùng bảng cộng để tìm ngay kết quả phép trừ không?",
        "Vì sao 16 - 9 lại bằng 7 hả cô?",
        "Cho con thử làm bài toán có lời văn nữa đi cô!"
      ]
    }
  },
  {
    keywords: ["ki-lô-gam", "kg", "lít", "khoi luong", "dung tich", "lit"],
    data: {
      topic: "Toán lớp 2: Ki-lô-gam (kg) và Lít (l)",
      topicEmoji: "⚖️",
      summaryBadge: "SGK Toán 2 • Bài 7 & Bài 8 Kết nối tri thức",
      simpleExplanation: {
        title: "Khám phá Ki-lô-gam và Lít cùng Cô Thanh Hằng",
        content: "Chào con yêu! Để biết một vật nặng bao nhiêu, người ta dùng đơn vị đo khối lượng là Ki-lô-gam (viết tắt là kg). Còn để đo lượng nước, dầu ăn, sữa trong chai lọ, người ta dùng đơn vị đo dung tích là Lít (viết tắt là l)!",
        analogy: "Cân một túi gạo hay một bạn nhỏ thì dùng cân kg. Còn rót nước ngọt hay sữa tươi vào cốc thì tính bằng lít!"
      },
      relatableExamples: [
        {
          title: "Ví dụ đi chợ cùng mẹ",
          description: "Mẹ mua một túi hoa quả nặng 2 kg, một con gà nặng 3 kg. Cả hai món nặng: 2 kg + 3 kg = 5 kg.",
          emoji: "🍗"
        },
        {
          title: "Ví dụ bình nước uống của lớp",
          description: "Bình nước của lớp 2A chứa được 20 lít nước. Các bạn uống hết 12 lít, trong bình còn lại: 20 l - 12 l = 8 l.",
          emoji: "💧"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Kí hiệu đơn vị",
          takeaway: "Ki-lô-gam viết tắt là kg; Lít viết tắt là l (chữ l thường uốn cong).",
          iconHint: "✍️"
        },
        {
          number: 2,
          title: "Cộng trừ số đo",
          takeaway: "Khi thực hiện phép tính với kg hoặc lít, con tính các số như bình thường rồi nhớ viết kèm tên đơn vị ở kết quả!",
          iconHint: "💡"
        },
        {
          number: 3,
          title: "Quan sát cân đĩa",
          takeaway: "Khi kim cân chỉ chính giữa hoặc hai đĩa cân thăng bằng, khối lượng ở hai bên bằng nhau.",
          iconHint: "⚖️"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Ki-lô-gam được viết tắt như thế nào?",
          back: "Ki-lô-gam viết tắt là kg.",
          category: "Kí hiệu đơn vị",
          emoji: "⚖️"
        },
        {
          id: 2,
          front: "Lít được viết tắt như thế nào?",
          back: "Lít viết tắt là chữ l.",
          category: "Kí hiệu đơn vị",
          emoji: "💧"
        },
        {
          id: 3,
          front: "15 kg + 8 kg bằng bao nhiêu?",
          back: "15 kg + 8 kg = 23 kg.",
          category: "Phép tính với số đo",
          emoji: "➕"
        },
        {
          id: 4,
          front: "35 l - 12 l bằng bao nhiêu?",
          back: "35 l - 12 l = 23 l.",
          category: "Phép tính với số đo",
          emoji: "➖"
        },
        {
          id: 5,
          front: "1 kg bông và 1 kg sắt, cái nào nặng hơn?",
          back: "Hai cái nặng BẰNG NHAU (đều bằng 1 kg), dù bông nhìn to hơn sắt rất nhiều!",
          category: "Câu đố vui tư duy",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Túi gạo cân nặng 18 kg, túi ngô nhẹ hơn túi gạo 5 kg. Hỏi túi ngô cân nặng bao nhiêu ki-lô-gam?",
          options: ["13 kg", "23 kg", "12 kg", "15 kg"],
          correctIndex: 0,
          hint: "Túi ngô 'nhẹ hơn' túi gạo 5 kg thì con làm phép tính trừ: 18 - 5.",
          explanation: "Đúng rồi con yêu! Cân nặng của túi ngô là: 18 - 5 = 13 (kg). Đáp số: 13 kg.",
          funFact: "Một bao gạo to của người lớn thường nặng 50 kg đấy!"
        },
        {
          id: 2,
          question: "Trong can có 15 lít nước mắm, mẹ đã rót ra chai 6 lít. Hỏi trong can còn lại bao nhiêu lít nước mắm?",
          options: ["8 lít", "9 lít", "10 lít", "21 lít"],
          correctIndex: 1,
          hint: "Có 15 lít, rót ra 6 lít thì làm phép tính trừ: 15 - 6.",
          explanation: "Chính xác! Số lít nước mắm còn lại trong can là: 15 - 6 = 9 (lít).",
          funFact: "Nước mắm truyền thống của Việt Nam được ủ từ cá cơm tươi và muối biển thơm ngon nức tiếng thế giới!"
        },
        {
          id: 3,
          question: "Phép tính nào sau đây được viết ĐÚNG quy tắc khi tính với đơn vị đo khối lượng?",
          options: [
            "12 kg + 8 kg = 20 kg",
            "12 kg + 8 = 20 kg",
            "12 + 8 kg = 20",
            "12 kg + 8 kg = 20"
          ],
          correctIndex: 0,
          hint: "Tất cả các số hạng và tổng đều phải ghi kèm đơn vị kg.",
          explanation: "Rất chuẩn xác! Khi tính toán với số đo đại lượng, cả các số hạng và kết quả đều phải có đơn vị: 12 kg + 8 kg = 20 kg.",
          funFact: "Nếu quên viết đơn vị thì người chấm bài sẽ không biết con đang tính cái gì đâu nhé!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen con đã hiểu rõ ki-lô-gam và lít! Cô tặng con một bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, 1 lít nước nặng bao nhiêu kg ạ?",
        "Các loại cân thường gặp trong đời sống là gì?",
        "Đố cô câu đố về cân đĩa thăng bằng!"
      ]
    }
  },
  {
    keywords: ["phép cộng có nhớ", "cộng có nhớ", "cong co nho", "pham vi 100"],
    data: {
      topic: "Toán lớp 2: Phép cộng có nhớ trong phạm vi 100",
      topicEmoji: "➕",
      summaryBadge: "SGK Toán 2 • Bài 17 & 18 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết đặt tính phép cộng có nhớ cùng Cô Thanh Hằng",
        content: "Chào con yêu! Khi đặt tính cộng hai số có hai chữ số (như 47 + 25): con cộng hàng đơn vị trước. Nếu kết quả từ 10 trở lên, con viết chữ số hàng đơn vị và 'nhớ 1' sang hàng chục để cộng tiếp!",
        analogy: "Hãy tưởng tượng khi hàng đơn vị chứa đầy 10 viên kẹo, con gói lại thành 1 gói to 10 viên và chuyển sang ngăn hàng chục để cất giữ!"
      },
      relatableExamples: [
        {
          title: "Ví dụ tính 38 + 25",
          description: "Đặt tính: 8 + 5 = 13, viết 3 nhớ 1. Hàng chục: 3 + 2 = 5, thêm 1 bằng 6. Kết quả là 63!",
          emoji: "🍬"
        },
        {
          title: "Ví dụ góp sách thiếu nhi",
          description: "Tổ Một góp 26 quyển, Tổ Hai góp 19 quyển. Cả hai tổ góp được: 26 + 19 = 45 quyển sách.",
          emoji: "📚"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Đặt tính thẳng cột",
          takeaway: "Hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.",
          iconHint: "📐"
        },
        {
          number: 2,
          title: "Thực hiện từ phải sang trái",
          takeaway: "Luôn cộng hàng đơn vị trước, sau đó mới cộng hàng chục.",
          iconHint: "➡️"
        },
        {
          number: 3,
          title: "Đừng quên cộng thêm 1",
          takeaway: "Khi cộng hàng chục, nhớ cộng thêm 1 đã nhớ từ hàng đơn vị sang!",
          iconHint: "⭐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Khi cộng 7 + 6 = 13 ở hàng đơn vị, con viết mấy nhớ mấy?",
          back: "Viết 3 ở hàng đơn vị và nhớ 1 sang hàng chục.",
          category: "Quy tắc nhớ",
          emoji: "💡"
        },
        {
          id: 2,
          front: "Kết quả của phép tính 46 + 27 là bao nhiêu?",
          back: "46 + 27 = 73 (6 + 7 = 13 viết 3 nhớ 1; 4 + 2 = 6 thêm 1 bằng 7).",
          category: "Luyện tính",
          emoji: "🔢"
        },
        {
          id: 3,
          front: "Kết quả của phép tính 58 + 9 là bao nhiêu?",
          back: "58 + 9 = 67 (8 + 9 = 17 viết 7 nhớ 1; 5 thêm 1 bằng 6).",
          category: "Cộng số có 2 chữ số với 1 chữ số",
          emoji: "⭐"
        },
        {
          id: 4,
          front: "Lỗi sai hay gặp nhất khi làm phép cộng có nhớ là gì?",
          back: "Quên không cộng thêm 1 vào hàng chục!",
          category: "Mẹo tránh sai",
          emoji: "⚠️"
        },
        {
          id: 5,
          front: "Khi nào thì phép cộng có nhớ xảy ra?",
          back: "Khi tổng của các chữ số ở hàng đơn vị lớn hơn hoặc bằng 10.",
          category: "Bản chất",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Kết quả của phép tính: 47 + 28 là bao nhiêu?",
          options: ["65", "75", "74", "76"],
          correctIndex: 1,
          hint: "Hàng đơn vị: 7 + 8 = 15 (viết 5 nhớ 1). Hàng chục: 4 + 2 = 6, thêm 1 bằng mấy?",
          explanation: "Chính xác! 7 + 8 = 15, viết 5 nhớ 1. 4 + 2 = 6, thêm 1 bằng 7. Kết quả là 75.",
          funFact: "Số 75 còn được gọi là 'ba phần tư của một trăm' đấy!"
        },
        {
          id: 2,
          question: "Khi đặt tính 39 + 45, ở hàng đơn vị ta lấy 9 + 5 = 14. Ta viết mấy và nhớ mấy?",
          options: [
            "Viết 4 nhớ 1 sang hàng chục",
            "Viết 1 nhớ 4",
            "Viết 14",
            "Viết 9 nhớ 5"
          ],
          correctIndex: 0,
          hint: "Chữ số hàng đơn vị thì viết xuống, chữ số hàng chục thì nhớ sang hàng bên cạnh.",
          explanation: "Rất chuẩn! 9 + 5 = 14, ta viết chữ số 4 thẳng cột hàng đơn vị và nhớ 1 sang hàng chục.",
          funFact: "Quy tắc 'nhớ' trong phép cộng là một trong những phát minh vĩ đại giúp nhân loại tính toán nhanh gọn!"
        },
        {
          id: 3,
          question: "Đàn gà nhà bạn An có 38 con gà mái và 17 con gà trống. Hỏi đàn gà nhà bạn An có tất cả bao nhiêu con gà?",
          options: ["45 con gà", "55 con gà", "54 con gà", "56 con gà"],
          correctIndex: 1,
          hint: "Tìm số gà có tất cả: 38 + 17.",
          explanation: "Cô khen con xuất sắc! Số con gà có tất cả là: 38 + 17 = 55 (con gà). Đáp số: 55 con gà.",
          funFact: "Những chú gà trống thường gáy 'Ò ó o' vào sáng sớm để đánh thức mọi người dậy học bài đấy!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con tính toán cẩn thận và nhớ số cực siêu! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, có phép cộng nào nhớ 2 sang hàng chục không ạ?",
        "Cách thử lại phép cộng bằng phép trừ như thế nào?",
        "Cho con thêm 1 bài toán đố vui về phép cộng có nhớ nhé!"
      ]
    }
  },
  {
    keywords: ["phép trừ có nhớ", "trừ có nhớ", "tru co nho", "pham vi 100"],
    data: {
      topic: "Toán lớp 2: Phép trừ có nhớ trong phạm vi 100",
      topicEmoji: "➖",
      summaryBadge: "SGK Toán 2 • Bài 19 & 20 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết làm phép trừ có nhớ không bao giờ nhầm cùng Cô Thanh Hằng",
        content: "Chào con yêu! Khi đặt tính trừ hai số có hai chữ số (như 52 - 27): ở hàng đơn vị, nếu số ở trên bé hơn số ở dưới không trừ được (2 không trừ được 7), con hãy 'mượn 1 chục' thành 12, lấy 12 - 7 = 5 (viết 5). Nhớ 1 sang hàng chục của số trừ để trừ tiếp!",
        analogy: "Giống như con có 2 chiếc kẹo mà muốn chia cho bạn 7 chiếc không đủ, con chạy vào mượn mẹ 1 gói 10 chiếc. Giờ con có 12 chiếc, chia 7 chiếc thì con còn lại 5 chiếc!"
      },
      relatableExamples: [
        {
          title: "Ví dụ tính 63 - 28",
          description: "3 không trừ được 8, lấy 13 - 8 = 5, viết 5 nhớ 1. 2 thêm 1 bằng 3; 6 - 3 = 3. Kết quả là 35!",
          emoji: "💡"
        },
        {
          title: "Ví dụ đếm số bóng bay",
          description: "Chùm bóng có 41 quả, gió làm bay mất 16 quả. Còn lại: 41 - 16 = 25 quả bóng bay.",
          emoji: "🎈"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Mượn 1 chục",
          takeaway: "Khi hàng đơn vị của số bị trừ bé hơn số trừ, ta lấy 1 chục ghép vào để trừ.",
          iconHint: "🏦"
        },
        {
          number: 2,
          title: "Trả 1 (Nhớ 1)",
          takeaway: "Mượn thì phải trả! Nhớ 1 vào hàng chục của số trừ trước khi thực hiện phép trừ hàng chục.",
          iconHint: "🔄"
        },
        {
          number: 3,
          title: "Thực hiện từ phải sang trái",
          takeaway: "Luôn trừ hàng đơn vị trước rồi mới trừ hàng chục.",
          iconHint: "📐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Khi tính 51 - 24, 1 không trừ được 4 thì làm thế nào?",
          back: "Lấy 11 - 4 = 7, viết 7 nhớ 1 vào hàng chục của số trừ.",
          category: "Quy tắc mượn",
          emoji: "💡"
        },
        {
          id: 2,
          front: "Kết quả của phép tính 72 - 35 là bao nhiêu?",
          back: "72 - 35 = 37 (12 - 5 = 7; 3 thêm 1 bằng 4; 7 - 4 = 3).",
          category: "Luyện tính",
          emoji: "🔢"
        },
        {
          id: 3,
          front: "Kết quả của phép tính 80 - 26 là bao nhiêu?",
          back: "80 - 26 = 54 (10 - 6 = 4; 2 thêm 1 bằng 3; 8 - 3 = 5).",
          category: "Số tròn chục trừ đi một số",
          emoji: "⭐"
        },
        {
          id: 4,
          front: "Muốn kiểm tra phép trừ 64 - 28 = 36 có đúng không, ta làm gì?",
          back: "Lấy hiệu cộng với số trừ: 36 + 28 = 64 (Đúng số bị trừ!).",
          category: "Cách kiểm tra",
          emoji: "🔍"
        },
        {
          id: 5,
          front: "Tại sao nói 'mượn 1' lại là mượn 10?",
          back: "Vì 1 chục ở hàng chục chính là 10 đơn vị!",
          category: "Bản chất toán học",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Kết quả của phép tính: 62 - 27 là bao nhiêu?",
          options: ["45", "35", "36", "44"],
          correctIndex: 1,
          hint: "Hàng đơn vị: 2 không trừ được 7, lấy 12 - 7 = 5 (viết 5 nhớ 1). 2 thêm 1 là 3; 6 - 3 = mấy?",
          explanation: "Chính xác! 12 - 7 = 5, viết 5 nhớ 1. 2 thêm 1 bằng 3, 6 - 3 = 3. Kết quả là 35.",
          funFact: "Phép trừ có nhớ là một kỹ năng quan trọng giúp con học tốt môn Toán trong suốt những năm tiểu học!"
        },
        {
          id: 2,
          question: "Khi tính 53 - 18, vì 3 không trừ được 8 nên con lấy số nào trừ 8?",
          options: [
            "Lấy 13 trừ 8 bằng 5, viết 5 nhớ 1",
            "Lấy 8 trừ 3 bằng 5",
            "Lấy 10 trừ 8 bằng 2",
            "Không trừ được"
          ],
          correctIndex: 0,
          hint: "Mượn 1 chục từ hàng chục ghép với 3 đơn vị thành số 13.",
          explanation: "Rất chuẩn! Con mượn 1 chục thì có 13, lấy 13 - 8 = 5 (viết 5 nhớ 1). Tuyệt đối không được lấy 8 trừ ngược lên 3 nhé!",
          funFact: "Lấy số dưới trừ ngược lên số trên là lỗi phổ biến nhất của các bạn nhỏ khi mới học trừ có nhớ đấy!"
        },
        {
          id: 3,
          question: "Vườn nhà bà có 45 quả bưởi, bà đã hái đi 19 quả để biếu họ hàng. Hỏi trên cây còn lại bao nhiêu quả bưởi?",
          options: ["26 quả", "24 quả", "36 quả", "27 quả"],
          correctIndex: 0,
          hint: "Số bưởi còn lại trên cây là: 45 - 19.",
          explanation: "Cô khen con rất thông minh! Số quả bưởi còn lại là: 45 - 19 = 26 (quả bưởi). Đáp số: 26 quả bưởi.",
          funFact: "Quả bưởi Diễn và bưởi Da Xanh của Việt Nam nổi tiếng tép mọng nước và ngọt thanh mát!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con giải phép trừ có nhớ cực kỳ chính xác! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, 100 trừ đi số có hai chữ số làm như thế nào?",
        "Có cách nào trừ nhẩm trong đầu mà không cần giấy bút?",
        "Cho con thêm 1 bài toán đố vui về phép trừ có nhớ nhé cô!"
      ]
    }
  },
  {
    keywords: ["đường gấp khúc", "hình tứ giác", "duong gap khuc", "hinh tu giac", "đoạn thẳng"],
    data: {
      topic: "Toán lớp 2: Đường gấp khúc và Hình tứ giác",
      topicEmoji: "📐",
      summaryBadge: "SGK Toán 2 • Bài 15 & 16 Kết nối tri thức",
      simpleExplanation: {
        title: "Khám phá Đường gấp khúc và Hình tứ giác cùng Cô Thanh Hằng",
        content: "Chào con yêu! Đường gấp khúc gồm nhiều đoạn thẳng nối tiếp nhau không thẳng hàng. Muốn tính độ dài đường gấp khúc, con chỉ cần tính tổng độ dài của tất cả các đoạn thẳng đó! Còn hình tứ giác là hình phẳng có đúng 4 cạnh và 4 đỉnh!",
        analogy: "Hãy tưởng tượng con bẻ gập một chiếc que tính thành 3 đoạn zíc-zắc, đó là đường gấp khúc. Còn nếu con ghép 4 que tính khép kín lại, con sẽ được một hình tứ giác xinh xắn!"
      },
      relatableExamples: [
        {
          title: "Ví dụ đường đi của chú kiến",
          description: "Chú kiến bò từ A đến B dài 3cm, từ B đến C dài 4cm, từ C đến D dài 5cm. Quãng đường kiến bò là: 3 + 4 + 5 = 12cm.",
          emoji: "🐜"
        },
        {
          title: "Ví dụ các đồ vật tứ giác",
          description: "Mặt bàn học, khung ảnh treo tường, quyển vở ô li, cánh cửa sổ đều có dạng hình tứ giác.",
          emoji: "🖼️"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Độ dài đường gấp khúc",
          takeaway: "Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng tạo nên nó.",
          iconHint: "📏"
        },
        {
          number: 2,
          title: "Cùng đơn vị đo",
          takeaway: "Trước khi cộng, tất cả các đoạn thẳng phải đổi về cùng một đơn vị đo (cm, dm hoặc m).",
          iconHint: "⚠️"
        },
        {
          number: 3,
          title: "Đặc điểm hình tứ giác",
          takeaway: "Hình tứ giác là hình khép kín có đúng 4 đỉnh và 4 cạnh.",
          iconHint: "🔲"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Cách tính độ dài đường gấp khúc như thế nào?",
          back: "Lấy độ dài các đoạn thẳng thành phần cộng lại với nhau.",
          category: "Công thức",
          emoji: "📐"
        },
        {
          id: 2,
          front: "Hình tứ giác có mấy đỉnh và mấy cạnh?",
          back: "Hình tứ giác có đúng 4 đỉnh và 4 cạnh.",
          category: "Đặc điểm hình",
          emoji: "🔲"
        },
        {
          id: 3,
          front: "Hình chữ nhật và hình vuông có phải là hình tứ giác không?",
          back: "Có! Cả hình chữ nhật và hình vuông đều là các hình tứ giác đặc biệt.",
          category: "Mở rộng",
          emoji: "💡"
        },
        {
          id: 4,
          front: "Hình tam giác khác hình tứ giác ở điểm nào?",
          back: "Hình tam giác có 3 cạnh và 3 đỉnh; hình tứ giác có 4 cạnh và 4 đỉnh.",
          category: "So sánh hình",
          emoji: "🔺"
        },
        {
          id: 5,
          front: "Đường gấp khúc gồm 2 đoạn: 5cm và 8cm có độ dài là bao nhiêu?",
          back: "Độ dài đường gấp khúc là: 5 + 8 = 13 cm.",
          category: "Tính toán",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Đường gấp khúc MNPQ gồm 3 đoạn thẳng: MN = 3 cm, NP = 4 cm, PQ = 5 cm. Độ dài của đường gấp khúc MNPQ là bao nhiêu?",
          options: ["12 cm", "11 cm", "10 cm", "15 cm"],
          correctIndex: 0,
          hint: "Cộng độ dài 3 đoạn thẳng lại: 3 + 4 + 5 = ?",
          explanation: "Chính xác! Độ dài đường gấp khúc MNPQ là: 3 + 4 + 5 = 12 (cm).",
          funFact: "Đường zíc-zắc trên áo len hay đường ray xe lửa uốn lượn chính là những đường gấp khúc đẹp mắt!"
        },
        {
          id: 2,
          question: "Hình tứ giác là hình có mấy cạnh và mấy đỉnh?",
          options: [
            "3 cạnh và 3 đỉnh",
            "4 cạnh và 4 đỉnh",
            "5 cạnh và 5 đỉnh",
            "2 cạnh và 2 đỉnh"
          ],
          correctIndex: 1,
          hint: "Chữ 'tứ' trong tiếng Hán Việt có nghĩa là số 4 đấy con yêu!",
          explanation: "Rất giỏi! Chữ 'Tứ' nghĩa là bốn. Hình tứ giác là hình có 4 cạnh và 4 đỉnh.",
          funFact: "Kim tự tháp Ai Cập có mặt đáy là một hình tứ giác khổng lồ tồn tại hàng ngàn năm!"
        },
        {
          id: 3,
          question: "Trong các hình sau, hình nào KHÔNG PHẢI là hình tứ giác?",
          options: ["Hình chữ nhật", "Hình vuông", "Hình tam giác", "Hình bình hành"],
          correctIndex: 2,
          hint: "Hình tam giác có mấy cạnh nhỉ? 'Tam' nghĩa là số mấy?",
          explanation: "Cô khen con xuất sắc! Hình tam giác chỉ có 3 cạnh ('tam' là 3), không phải hình tứ giác có 4 cạnh.",
          funFact: "Biển báo giao thông hình tam giác thường dùng để cảnh báo nguy hiểm trên đường!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con có đôi mắt hình học rất tinh tường! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, hình thoi có phải là hình tứ giác không ạ?",
        "Cách đếm số hình tứ giác trong một hình phức tạp?",
        "Đố cô câu đố về đường gấp khúc khép kín!"
      ]
    }
  },

  // =========================================================================
  // TOÁN 2 TẬP 2
  // =========================================================================
  {
    keywords: ["phép nhân", "thừa số", "tích", "bảng nhân 2", "bảng nhân 5", "phep nhan", "thua so", "tich", "bang nhan 2", "bang nhan 5"],
    data: {
      topic: "Toán lớp 2: Phép nhân, Bảng nhân 2 và Bảng nhân 5",
      topicEmoji: "✖️",
      summaryBadge: "SGK Toán 2 • Bài 39 & 40 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết học giỏi Phép nhân cùng Cô Thanh Hằng",
        content: "Chào con yêu! Phép nhân là cách viết ngắn gọn của một tổng các số hạng bằng nhau. Ví dụ: thay vì viết 2 + 2 + 2 + 2 (số 2 được lấy 4 lần), ta viết là 2 x 4 = 8! Trong phép nhân: Thừa số x Thừa số = Tích!",
        analogy: "Mỗi bạn thỏ có 2 chiếc tai dài. Nếu có 5 bạn thỏ, thay vì cộng 2 + 2 + 2 + 2 + 2, con chỉ cần đọc bảng nhân: 2 x 5 = 10 chiếc tai thỏ, nhanh như chớp!"
      },
      relatableExamples: [
        {
          title: "Ví dụ đĩa kẹo của bé",
          description: "Có 3 đĩa kẹo, mỗi đĩa có 5 chiếc kẹo. Tổng số kẹo là: 5 x 3 = 15 chiếc kẹo ngọt ngào.",
          emoji: "🍬"
        },
        {
          title: "Ví dụ đếm bánh xe đạp",
          description: "Mỗi xe đạp có 2 bánh xe. 6 chiếc xe đạp có tất cả: 2 x 6 = 12 bánh xe.",
          emoji: "🚲"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Ý nghĩa phép nhân",
          takeaway: "Phép nhân là tổng các số hạng bằng nhau: a x b nghĩa là a được lấy b lần.",
          iconHint: "💡"
        },
        {
          number: 2,
          title: "Thành phần phép tính",
          takeaway: "Thừa số x Thừa số = Tích.",
          iconHint: "⭐"
        },
        {
          number: 3,
          title: "Mẹo nhớ bảng nhân 2 và 5",
          takeaway: "Bảng nhân 2 đếm thêm 2 (toàn số chẵn: 2, 4, 6, 8, 10...). Bảng nhân 5 tận cùng luôn là 0 hoặc 5 (5, 10, 15, 20...).",
          iconHint: "🔢"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Chuyển tổng 2 + 2 + 2 + 2 + 2 thành phép nhân như thế nào?",
          back: "Số 2 được lấy 5 lần, viết là: 2 x 5 = 10.",
          category: "Chuyển đổi tổng thành tích",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Trong phép nhân 5 x 4 = 20, các số 5 và 4 gọi là gì, số 20 gọi là gì?",
          back: "5 và 4 là các THỪA SỐ, 20 là TÍCH.",
          category: "Thành phần phép nhân",
          emoji: "💡"
        },
        {
          id: 3,
          front: "2 x 7 bằng bao nhiêu?",
          back: "2 x 7 = 14.",
          category: "Bảng nhân 2",
          emoji: "🌸"
        },
        {
          id: 4,
          front: "5 x 8 bằng bao nhiêu?",
          back: "5 x 8 = 40.",
          category: "Bảng nhân 5",
          emoji: "⭐"
        },
        {
          id: 5,
          front: "Bất kỳ số nào nhân với 1 hoặc 0 thì bằng mấy?",
          back: "Nhân với 1 bằng chính nó (5 x 1 = 5); nhân với 0 bằng 0 (5 x 0 = 0).",
          category: "Số 1 và 0 trong phép nhân",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Chuyển tổng sau thành phép nhân: 5 + 5 + 5 + 5 = ?",
          options: ["5 x 4", "4 x 5", "5 x 5", "5 + 4"],
          correctIndex: 0,
          hint: "Số 5 được lấy mấy lần con nhỉ? Đếm xem có bao nhiêu số 5 cộng lại.",
          explanation: "Chính xác! Số 5 được lấy 4 lần, nên ta viết là: 5 x 4 = 20.",
          funFact: "Dấu nhân (x) do nhà toán học William Oughtred người Anh sáng tạo ra từ thế kỷ 17!"
        },
        {
          id: 2,
          question: "Trong phép nhân: 2 x 8 = 16, các số 2 và 8 được gọi là gì?",
          options: ["Số hạng", "Thừa số", "Số bị chia", "Hiệu"],
          correctIndex: 1,
          hint: "Trong phép cộng là số hạng, còn trong phép nhân hai số đem nhân với nhau gọi là gì?",
          explanation: "Rất chuẩn! Trong phép nhân: 2 và 8 là các THỪA SỐ, còn 16 là TÍCH.",
          funFact: "Khi đổi chỗ hai thừa số thì tích không thay đổi: 2 x 8 = 8 x 2 = 16!"
        },
        {
          id: 3,
          question: "Mỗi bàn học có 2 bạn học sinh ngồi. Hỏi 7 bàn học như thế có tất cả bao nhiêu bạn học sinh?",
          options: ["9 bạn", "12 bạn", "14 bạn", "16 bạn"],
          correctIndex: 2,
          hint: "Mỗi bàn có 2 bạn, 7 bàn tức là số 2 được lấy 7 lần: 2 x 7 = ?",
          explanation: "Cô khen con xuất sắc! Số học sinh cả 7 bàn là: 2 x 7 = 14 (bạn học sinh). Đáp số: 14 bạn học sinh.",
          funFact: "Bảng nhân 2 là bảng cửu chương đầu tiên mà mọi học sinh lớp 2 đều học thuộc lòng!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con học thuộc bảng nhân siêu nhanh! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, có mẹo nào thuộc bảng nhân 5 trong 1 phút không ạ?",
        "Vì sao tích trong bảng nhân 2 luôn là số chẵn?",
        "Cho con thêm 1 bài toán đố vui về phép nhân nhé cô!"
      ]
    }
  },
  {
    keywords: ["phép chia", "số bị chia", "số chia", "thương", "bảng chia 2", "bảng chia 5", "phep chia", "so bi chia", "so chia", "thuong", "bang chia 2", "bang chia 5"],
    data: {
      topic: "Toán lớp 2: Phép chia, Bảng chia 2 và Bảng chia 5",
      topicEmoji: "➗",
      summaryBadge: "SGK Toán 2 • Bài 43 & 44 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết hiểu bản chất Phép chia cùng Cô Thanh Hằng",
        content: "Chào con yêu! Phép chia là phép tính ngược lại của phép nhân: khi con có một số lượng đồ vật và muốn chia đều vào các phần bằng nhau. Trong phép chia: Số bị chia : Số chia = Thương!",
        analogy: "Mẹ có 10 chiếc bánh thơm ngon chia đều cho 2 anh em con. Mỗi bạn được 10 : 2 = 5 chiếc bánh. Phép chia chính là sự sẻ chia công bằng và yêu thương đấy!"
      },
      relatableExamples: [
        {
          title: "Ví dụ chia kẹo cho bạn bè",
          description: "Có 15 chiếc kẹo chia đều cho 5 bạn. Mỗi bạn nhận được: 15 : 5 = 3 chiếc kẹo.",
          emoji: "🍬"
        },
        {
          title: "Ví dụ xếp sách vào ngăn tủ",
          description: "Có 18 quyển sách chia đều vào 2 ngăn kệ. Mỗi ngăn kệ có: 18 : 2 = 9 quyển sách.",
          emoji: "📚"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Thành phần phép chia",
          takeaway: "Số bị chia : Số chia = Thương.",
          iconHint: "💡"
        },
        {
          number: 2,
          title: "Mối quan hệ nhân - chia",
          takeaway: "Từ 1 phép nhân ta viết được 2 phép chia tương ứng (Ví dụ: 2 x 6 = 12 thì 12 : 2 = 6 và 12 : 6 = 2).",
          iconHint: "🔄"
        },
        {
          number: 3,
          title: "Không thể chia cho 0",
          takeaway: "Số chia luôn phải khác 0; không có phép chia cho số 0!",
          iconHint: "⚠️"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Trong phép chia 14 : 2 = 7, số 14 được gọi là gì?",
          back: "Số 14 được gọi là SỐ BỊ CHIA.",
          category: "Thành phần phép chia",
          emoji: "🔢"
        },
        {
          id: 2,
          front: "Trong phép chia 14 : 2 = 7, số 2 và 7 được gọi là gì?",
          back: "Số 2 là SỐ CHIA, số 7 là THƯƠNG.",
          category: "Thành phần phép chia",
          emoji: "💡"
        },
        {
          id: 3,
          front: "16 : 2 bằng bao nhiêu?",
          back: "16 : 2 = 8 (Vì 2 x 8 = 16).",
          category: "Bảng chia 2",
          emoji: "🌸"
        },
        {
          id: 4,
          front: "35 : 5 bằng bao nhiêu?",
          back: "35 : 5 = 7 (Vì 5 x 7 = 35).",
          category: "Bảng chia 5",
          emoji: "⭐"
        },
        {
          id: 5,
          front: "0 chia cho bất kỳ số nào (khác 0) thì bằng mấy?",
          back: "0 chia cho số nào khác 0 cũng bằng 0! (0 : 5 = 0, 0 : 2 = 0).",
          category: "Quy tắc số 0",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Trong phép chia: 20 : 5 = 4, số 20 được gọi là gì?",
          options: ["Số chia", "Số bị chia", "Thương", "Số trừ"],
          correctIndex: 1,
          hint: "Số đứng đầu tiên bị đem chia thành các phần gọi là gì?",
          explanation: "Chính xác! Trong phép chia: 20 là Số bị chia, 5 là Số chia, và 4 là Thương.",
          funFact: "Dấu hai chấm (:) biểu thị phép chia được nhà bác học Leibniz đưa vào toán học!"
        },
        {
          id: 2,
          question: "Từ phép nhân 2 x 9 = 18, ta có thể viết được phép chia nào sau đây?",
          options: [
            "18 : 2 = 9 và 18 : 9 = 2",
            "18 : 3 = 6",
            "18 : 1 = 18",
            "9 : 2 = 4"
          ],
          correctIndex: 0,
          hint: "Lấy tích chia cho một thừa số thì được thừa số kia: 18 : 2 = 9.",
          explanation: "Rất giỏi! Lấy tích chia cho thừa số này thì ra thừa số kia: 18 : 2 = 9 và 18 : 9 = 2.",
          funFact: "Thuộc lòng bảng nhân giúp con thuộc luôn cả bảng chia tương ứng mà không tốn công học lại!"
        },
        {
          id: 3,
          question: "Cô giáo có 25 quyển vở thưởng cho 5 bạn học sinh có bài kiểm tra điểm 10. Hỏi mỗi bạn nhận được mấy quyển vở?",
          options: ["4 quyển", "5 quyển", "6 quyển", "7 quyển"],
          correctIndex: 1,
          hint: "Chia đều 25 quyển vở cho 5 bạn: làm phép chia 25 : 5.",
          explanation: "Cô khen con rất thông minh! Số vở mỗi bạn nhận được là: 25 : 5 = 5 (quyển vở). Đáp số: 5 quyển vở.",
          funFact: "Nhận được phần thưởng vở mới thơm mùi giấy là niềm vui lớn của mọi học sinh chăm ngoan!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con đã chia sẻ kẹo và làm toán chia cực chuẩn! Tặng con 1 bông hoa điểm 10!",
      followUpSuggestions: [
        "Cô Hằng ơi, phép chia có dư là gì ạ?",
        "Vì sao không thể chia một số cho số 0?",
        "Cho con thêm 1 bài toán chia vui nhé cô!"
      ]
    }
  },
  {
    keywords: ["khối trụ", "khối cầu", "khoi tru", "khoi cau", "hinh khoi"],
    data: {
      topic: "Toán lớp 2: Nhận biết Khối trụ và Khối cầu",
      topicEmoji: "🎲",
      summaryBadge: "SGK Toán 2 • Bài 47 Kết nối tri thức",
      simpleExplanation: {
        title: "Làm quen với Khối trụ và Khối cầu cùng Cô Thanh Hằng",
        content: "Chào con yêu! Trong thế giới xung quanh chúng ta có rất nhiều hình khối 3D thú vị: Khối cầu tròn xoe như quả bóng đá, lăn được về mọi hướng. Còn Khối trụ thì có 2 mặt đáy phẳng hình tròn và một mặt xung quanh cong, có thể lăn được và xếp chồng lên nhau!",
        analogy: "Khối cầu giống như quả bóng đá hay viên bi ve. Khối trụ giống như lon sữa bò, ống tre đựng bút hay khúc gỗ tròn!"
      },
      relatableExamples: [
        {
          title: "Ví dụ các đồ vật khối cầu",
          description: "Quả bóng đá, viên bi ve, quả địa cầu trong lớp học, quả cam tròn đều có dạng khối cầu.",
          emoji: "⚽"
        },
        {
          title: "Ví dụ các đồ vật khối trụ",
          description: "Lon nước ngọt, hộp sữa bột của em bé, trống trường, cốc uống nước hình tròn đều có dạng khối trụ.",
          emoji: "🥫"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Đặc điểm khối cầu",
          takeaway: "Mặt cong hoàn toàn, không có góc cạnh, lăn được trơn tru về mọi hướng.",
          iconHint: "⚽"
        },
        {
          number: 2,
          title: "Đặc điểm khối trụ",
          takeaway: "Có hai mặt phẳng hình tròn bằng nhau (mặt đáy) và một mặt cong bao quanh. Lăn được khi đặt nằm, đứng yên và xếp chồng được khi đặt dựng đứng.",
          iconHint: "🥫"
        },
        {
          number: 3,
          title: "Phân biệt với hình phẳng",
          takeaway: "Hình tròn là hình phẳng trên giấy, còn khối cầu là vật thể trong không gian con có thể cầm nắm tròn tay!",
          iconHint: "💡"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Vật nào sau đây có dạng khối cầu: Quả bóng hay Lon sữa?",
          back: "Quả bóng có dạng khối cầu.",
          category: "Nhận biết khối",
          emoji: "⚽"
        },
        {
          id: 2,
          front: "Khối trụ có mấy mặt đáy và các mặt đáy đó có hình gì?",
          back: "Khối trụ có 2 mặt đáy phẳng hình tròn bằng nhau.",
          category: "Cấu tạo khối trụ",
          emoji: "🥫"
        },
        {
          id: 3,
          front: "Khối nào có thể lăn được về mọi hướng một cách dễ dàng?",
          back: "Khối cầu có thể lăn được về mọi hướng.",
          category: "Khả năng lăn",
          emoji: "🔮"
        },
        {
          id: 4,
          front: "Vì sao các lon nước ngọt thường làm bằng khối trụ mà không làm bằng khối cầu?",
          back: "Vì khối trụ có đáy phẳng giúp lon đứng vững và xếp chồng lên kệ hàng gọn gàng!",
          category: "Ứng dụng thực tế",
          emoji: "💡"
        },
        {
          id: 5,
          front: "Trống trường em có dạng hình khối nào?",
          back: "Trống trường em có dạng khối trụ.",
          category: "Đồ vật quanh em",
          emoji: "🥁"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Đồ vật nào sau đây có dạng KHỐI CẦU?",
          options: [
            "Hộp sữa đặc",
            "Quả bóng rổ",
            "Hộp phấn viết bảng",
            "Quyển sách Toán"
          ],
          correctIndex: 1,
          hint: "Đồ vật nào tròn xoe và lăn được về mọi hướng trên sàn nhà?",
          explanation: "Chính xác! Quả bóng rổ có dạng khối cầu tròn trịa, lăn được về mọi hướng.",
          funFact: "Trái Đất thân yêu của chúng ta cũng có dạng hình khối cầu khổng lồ bay trong vũ trụ!"
        },
        {
          id: 2,
          question: "Đặc điểm nào dưới đây là đặc điểm của KHỐI TRỤ?",
          options: [
            "Lăn được về mọi hướng",
            "Có 2 mặt phẳng hình tròn bằng nhau và 1 mặt xung quanh cong",
            "Có 4 cạnh thẳng và 4 đỉnh nhọn",
            "Không bao giờ lăn được"
          ],
          correctIndex: 1,
          hint: "Khối trụ có 2 mặt phẳng hình tròn ở hai đầu để đặt đứng vững.",
          explanation: "Rất chuẩn! Khối trụ có 2 mặt đáy phẳng hình tròn và 1 mặt cong bao quanh. Đặt nằm thì lăn được, đặt đứng thì không lăn.",
          funFact: "Các ống đựng bút thông minh trên bàn học của con thường có dạng khối trụ đứng rất tiện lợi!"
        },
        {
          id: 3,
          question: "Bạn Nam xếp chồng hai vật thể lên nhau. Vật nào sau đây KHÔNG THỂ xếp chồng lên nhau một cách vững chắc?",
          options: [
            "Hai hộp sữa khối trụ đặt đứng",
            "Hai khối gỗ lập phương",
            "Hai quả bóng bàn khối cầu",
            "Hai quyển sách"
          ],
          correctIndex: 2,
          hint: "Khối cầu có mặt cong trơn tru, không có mặt phẳng thì có chồng lên nhau được không?",
          explanation: "Cô khen con rất tinh ý! Khối cầu tròn xoe không có mặt đáy phẳng nên hai quả bóng không thể xếp chồng lên nhau mà sẽ bị lăn rơi ngay.",
          funFact: "Các nhà xây dựng chỉ dùng những vật thể có mặt đáy phẳng để xây nhà kiên cố!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con nhận biết hình khối 3D cực kỳ nhanh nhạy! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, Trái Đất có phải là khối cầu hoàn hảo không ạ?",
        "Kể thêm 5 đồ vật hình khối trụ trong gian bếp của mẹ?",
        "Đố cô cách làm một chiếc hộp bút khối trụ từ chai nhựa tái chế!"
      ]
    }
  },
  {
    keywords: ["đề-xi-mét", "mét", "ki-lô-mét", "dm", "km", "do do dai", "don vi do do dai"],
    data: {
      topic: "Toán lớp 2: Đơn vị đo độ dài dm, m, km",
      topicEmoji: "📏",
      summaryBadge: "SGK Toán 2 • Bài 56 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết đổi đơn vị đo độ dài cùng Cô Thanh Hằng",
        content: "Chào con yêu! Để đo các đồ vật nhỏ như cây bút chì, con dùng xăng-ti-mét (cm). Để đo gang tay hoặc quyển sách, con dùng đề-xi-mét (dm). Để đo chiều cao bạn bè, phòng học, cái bảng, con dùng mét (m). Còn để đo quãng đường dài từ làng này sang làng khác, tỉnh này sang tỉnh khác, con dùng ki-lô-mét (km)!",
        analogy: "Cm là bước chân của chú kiến, dm là gang tay của mẹ, mét là bước sải chân dài của bố, còn km là quãng đường đi xe máy của cả nhà!"
      },
      relatableExamples: [
        {
          title: "Ví dụ đo bảng lớp học",
          description: "Chiếc bảng đen ở lớp học dài khoảng 3 m (3 mét). Chiếc bàn học của con dài khoảng 10 dm (1 m).",
          emoji: "🏫"
        },
        {
          title: "Ví dụ đi về quê thăm ông bà",
          description: "Quãng đường từ nhà con về quê ngoại dài khoảng 25 km. Bố chở cả nhà đi xe máy mất khoảng 45 phút.",
          emoji: "🛵"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Bảng đổi độ dài cần thuộc làu",
          takeaway: "1 dm = 10 cm; 1 m = 10 dm = 100 cm; 1 km = 1000 m.",
          iconHint: "📐"
        },
        {
          number: 2,
          title: "Cách chọn đơn vị đo hợp lý",
          takeaway: "Đồ vật nhỏ dùng cm/dm; phòng ốc nhà cửa dùng mét; đường giao thông dùng km.",
          iconHint: "💡"
        },
        {
          number: 3,
          title: "Tính toán cùng đơn vị",
          takeaway: "Trước khi cộng trừ so sánh độ dài, luôn đổi về cùng một đơn vị đo!",
          iconHint: "⚠️"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)?",
          back: "1 dm = 10 cm.",
          category: "Đổi đơn vị",
          emoji: "📏"
        },
        {
          id: 2,
          front: "1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?",
          back: "1 m = 100 cm (và 1 m = 10 dm).",
          category: "Đổi đơn vị",
          emoji: "💡"
        },
        {
          id: 3,
          front: "1 ki-lô-mét (km) bằng bao nhiêu mét (m)?",
          back: "1 km = 1000 m.",
          category: "Đổi đơn vị",
          emoji: "🛣️"
        },
        {
          id: 4,
          front: "Đo chiều dài phòng học lớp 2 con nên dùng đơn vị nào: cm hay m?",
          back: "Nên dùng đơn vị mét (m).",
          category: "Lựa chọn đơn vị",
          emoji: "🏫"
        },
        {
          id: 5,
          front: "2 m 3 dm bằng bao nhiêu đề-xi-mét?",
          back: "2 m = 20 dm, cộng thêm 3 dm là 23 dm.",
          category: "Đổi nâng cao",
          emoji: "✨"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?",
          options: ["10 cm", "100 cm", "1000 cm", "50 cm"],
          correctIndex: 1,
          hint: "1m bằng 10dm, mà 1dm lại bằng 10cm, vậy 1m bằng mấy cm?",
          explanation: "Chính xác! 1 m = 10 dm = 100 cm.",
          funFact: "Thước mét bằng gỗ mà các cô thợ may hay dùng có đúng 100 vạch chia nhỏ là 100 centimet!"
        },
        {
          id: 2,
          question: "Đoạn đường từ nhà Nam đến trường dài 2 km. Đoạn đường từ nhà Bắc đến trường dài 1500 m. Quãng đường của bạn nào dài hơn?",
          options: [
            "Quãng đường từ nhà Nam đến trường dài hơn",
            "Quãng đường từ nhà Bắc đến trường dài hơn",
            "Hai bạn có quãng đường bằng nhau",
            "Không so sánh được"
          ],
          correctIndex: 0,
          hint: "Đổi 2 km ra mét trước: 2 km = 2000 m. Sau đó so sánh 2000 m với 1500 m.",
          explanation: "Rất giỏi! Đổi 2 km = 2000 m. Vì 2000 m > 1500 m nên quãng đường của bạn Nam dài hơn bạn Bắc.",
          funFact: "Các cột mốc bên lề đường quốc lộ ghi chữ Km giúp các bác tài xế biết mình đã đi được bao xa!"
        },
        {
          id: 3,
          question: "Sợi dây thứ nhất dài 35 cm, sợi dây thứ hai dài 4 dm. Hỏi sợi dây nào dài hơn và dài hơn bao nhiêu?",
          options: [
            "Sợi dây thứ hai dài hơn 5 cm",
            "Sợi dây thứ nhất dài hơn 5 cm",
            "Hai sợi dây dài bằng nhau",
            "Sợi dây thứ hai dài hơn 10 cm"
          ],
          correctIndex: 0,
          hint: "Đổi 4 dm = 40 cm. So sánh 40 cm với 35 cm.",
          explanation: "Cô khen con rất thông minh! Đổi 4 dm = 40 cm. Ta có 40 cm - 35 cm = 5 cm. Vậy sợi dây thứ hai dài hơn 5 cm.",
          funFact: "Đổi đơn vị đo trước khi so sánh là thói quen vàng của các học sinh giỏi Toán!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng chúc mừng con đã làm chủ các đơn vị đo độ dài! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, 1 gang tay của con dài khoảng bao nhiêu cm?",
        "Vì sao người ta không dùng cm để đo khoảng cách giữa hai thành phố?",
        "Đố cô câu đố vui về chiều cao của tháp Eiffel!"
      ]
    }
  },
  {
    keywords: ["chắc chắn", "có thể", "không thể", "xác suất", "chac chan", "co the", "khong the"],
    data: {
      topic: "Toán lớp 2: Khả năng xảy ra của một sự kiện (Chắc chắn, Có thể, Không thể)",
      topicEmoji: "🎯",
      summaryBadge: "SGK Toán 2 • Bài 69 Kết nối tri thức",
      simpleExplanation: {
        title: "Làm quen với Xác suất: Chắc chắn, Có thể, Không thể cùng Cô Thanh Hằng",
        content: "Chào con yêu! Trong cuộc sống, có những điều 'Chắc chắn' xảy ra 100% (như ngày mai mặt trời mọc ở đằng Đông), có những điều 'Có thể' xảy ra (như chiều nay có thể trời mưa), và có những điều 'Không thể' xảy ra (như cá bơi trên ngọn cây)!",
        analogy: "Hãy tưởng tượng con mở một chiếc hộp chỉ toàn kẹo màu đỏ: con chắc chắn sẽ bốc được kẹo đỏ, và không thể bốc được kẹo màu xanh!"
      },
      relatableExamples: [
        {
          title: "Ví dụ chiếc túi đựng bi",
          description: "Trong túi có 3 viên bi xanh và 2 viên bi đỏ. Con nhắm mắt lấy ra 1 viên bi: con 'Có thể' lấy được viên bi màu đỏ hoặc xanh.",
          emoji: "🔴"
        },
        {
          title: "Ví dụ các ngày trong tuần",
          description: "Hôm nay là Thứ Bảy. Ngày mai 'Chắc chắn' là Chủ Nhật, và 'Không thể' là Thứ Hai!",
          emoji: "📅"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Chắc chắn",
          takeaway: "Sự kiện chắc chắn xảy ra, không có trường hợp nào khác.",
          iconHint: "✅"
        },
        {
          number: 2,
          title: "Có thể",
          takeaway: "Sự kiện có khả năng xảy ra hoặc không xảy ra.",
          iconHint: "❓"
        },
        {
          number: 3,
          title: "Không thể",
          takeaway: "Sự kiện hoàn toàn không thể xảy ra trong bất kỳ tình huống nào.",
          iconHint: "❌"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Trong hộp chỉ có 5 quả bóng màu vàng. Nam nhắm mắt lấy 1 quả bóng. Nam có lấy được bóng vàng không?",
          back: "Nam CHẮC CHẮN lấy được bóng vàng (vì trong hộp chỉ có bóng vàng).",
          category: "Chắc chắn",
          emoji: "🟡"
        },
        {
          id: 2,
          front: "Trong hộp chỉ có bóng màu vàng, Nam có lấy được bóng màu đỏ không?",
          back: "Nam KHÔNG THỂ lấy được bóng màu đỏ (vì không có quả nào màu đỏ).",
          category: "Không thể",
          emoji: "❌"
        },
        {
          id: 3,
          front: "Trong hộp có cả bóng vàng và bóng xanh. Nam lấy 1 quả, khả năng lấy được bóng xanh là gì?",
          back: "Nam CÓ THỂ lấy được bóng xanh (hoặc bóng vàng).",
          category: "Có thể",
          emoji: "❓"
        },
        {
          id: 4,
          front: "Gieo con xúc xắc 6 mặt, có thể xuất hiện mặt 7 chấm không?",
          back: "KHÔNG THỂ (vì xúc xắc chỉ có các mặt từ 1 đến 6 chấm).",
          category: "Trò chơi may rủi",
          emoji: "🎲"
        },
        {
          id: 5,
          front: "Khả năng ngày mai trời mưa hay trời nắng thuộc trường hợp nào?",
          back: "Thuộc trường hợp CÓ THỂ (phụ thuộc vào thời tiết).",
          category: "Đời sống",
          emoji: "⛅"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Trong túi của Mai chỉ có 6 viên kẹo vị dâu tây màu hồng. Mai nhắm mắt lấy ra 1 chiếc kẹo. Sự kiện nào sau đây là 'CHẮC CHẮN'?",
          options: [
            "Mai lấy được viên kẹo màu xanh lá",
            "Mai lấy được viên kẹo màu hồng vị dâu tây",
            "Mai lấy được gói bánh quy",
            "Mai không lấy được kẹo"
          ],
          correctIndex: 1,
          hint: "Vì trong túi toàn kẹo hồng dâu tây nên lấy ra chắc chắn là kẹo gì?",
          explanation: "Chính xác! Trong túi chỉ có kẹo màu hồng nên Mai CHẮC CHẮN lấy được chiếc kẹo màu hồng vị dâu tây.",
          funFact: "Nhận biết các sự kiện chắc chắn giúp con đưa ra những quyết định đúng đắn trong cuộc sống!"
        },
        {
          id: 2,
          question: "Hôm nay là ngày Thứ Hai. Ngày mai (...) là ngày Thứ Ba. Từ thích hợp điền vào chỗ chấm là:",
          options: ["Chắc chắn", "Có thể", "Không thể", "Khó xảy ra"],
          correctIndex: 0,
          hint: "Thứ Hai rồi đến thứ mấy theo thứ tự các ngày trong tuần?",
          explanation: "Rất chuẩn! Thứ tự các ngày trong tuần là cố định: sau Thứ Hai CHẮC CHẮN là Thứ Ba.",
          funFact: "Một tuần lễ có 7 ngày và quy luật này lặp đi lặp lại mãi mãi suốt hàng ngàn năm qua!"
        },
        {
          id: 3,
          question: "Gieo một con xúc xắc chuẩn có 6 mặt (từ 1 chấm đến 6 chấm). Khả năng xuất hiện mặt có 8 chấm là gì?",
          options: ["Chắc chắn", "Có thể", "Không thể", "Rất có thể"],
          correctIndex: 2,
          hint: "Con xúc xắc có mặt 8 chấm không?",
          explanation: "Cô khen con rất thông minh! Vì con xúc xắc chỉ có các mặt từ 1 đến 6 chấm, hoàn toàn không có mặt 8 chấm nên sự kiện này KHÔNG THỂ xảy ra.",
          funFact: "Trò chơi cá ngựa hay cờ tỷ phú dùng xúc xắc để tạo nên những bước đi bất ngờ rất hào hứng!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi tư duy logic sắc bén của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, chơi trò oẳn tù tì có phải là trò chơi có thể thắng hoặc thua không?",
        "Kể cho cô 3 điều chắc chắn sẽ xảy ra trong mùa hè?",
        "Đố cô câu đố vui về xác suất mở hộp quà bí mật!"
      ]
    }
  },

  // =========================================================================
  // TIẾNG VIỆT 2 TẬP 1
  // =========================================================================
  {
    keywords: ["từ chỉ sự vật", "tu chi su vat", "người", "đồ vật", "con vật", "cây cối", "su vat"],
    data: {
      topic: "Tiếng Việt lớp 2: Từ chỉ sự vật (Người, Đồ vật, Con vật, Cây cối)",
      topicEmoji: "🎒",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 1 & 2 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết nhận diện Từ chỉ sự vật cùng Cô Thanh Hằng",
        content: "Chào con yêu! 'Từ chỉ sự vật' là những từ ngữ dùng để gọi tên tất cả mọi thứ xung quanh chúng ta, gồm 4 nhóm chính: Từ chỉ người (bố, mẹ, cô giáo, bác sĩ), Từ chỉ đồ vật (bút chì, thước kẻ, cái bàn), Từ chỉ con vật (chú mèo, chú chó, chim sơn ca), và Từ chỉ cây cối (cây bàng, hoa hồng, quả bưởi)!",
        analogy: "Hãy tưởng tượng con là một nhà thám hiểm nhí cầm kính lúp: bất cứ ai con gặp, bất cứ con gì kêu 'meo meo', đồ gì con sờ thấy hay cây gì con thấy hoa thơm thì tên gọi của chúng đều là Từ chỉ sự vật!"
      },
      relatableExamples: [
        {
          title: "Ví dụ trong góc học tập của con",
          description: "Cặp sách, quyển vở, hộp bút chì màu, cục tẩy, cái bàn học đều là từ chỉ đồ vật.",
          emoji: "✏️"
        },
        {
          title: "Ví dụ trong khu vườn nhà bà",
          description: "Cây chuối, hoa cúc vàng (từ chỉ cây cối), chú cún con, đàn gà chíp (từ chỉ con vật).",
          emoji: "🌻"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "4 nhóm sự vật chính",
          takeaway: "Nhớ 4 nhóm: Người - Đồ vật - Con vật - Cây cối.",
          iconHint: "🌟"
        },
        {
          number: 2,
          title: "Câu hỏi nhận biết",
          takeaway: "Từ trả lời cho các câu hỏi: Ai? Con gì? Cái gì? Cây gì? đều là từ chỉ sự vật.",
          iconHint: "❓"
        },
        {
          number: 3,
          title: "Không nhầm với hoạt động / đặc điểm",
          takeaway: "'Cái bút' là từ chỉ sự vật; còn 'viết' là hoạt động; 'xinh xắn' là đặc điểm.",
          iconHint: "💡"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Từ chỉ sự vật là gì?",
          back: "Là từ gọi tên người, đồ vật, con vật, cây cối, hiện tượng thiên nhiên.",
          category: "Khái niệm",
          emoji: "📖"
        },
        {
          id: 2,
          front: "Tìm 3 từ chỉ người thân trong gia đình?",
          back: "Ông bà, cha mẹ, anh chị em.",
          category: "Từ chỉ người",
          emoji: "👨‍👩‍👧‍👦"
        },
        {
          id: 3,
          front: "Tìm 3 từ chỉ đồ dùng học tập của em?",
          back: "Thước kẻ, bút mực, cặp sách.",
          category: "Từ chỉ đồ vật",
          emoji: "✏️"
        },
        {
          id: 4,
          front: "Trong câu 'Chú mèo nằm sưởi nắng', từ nào là từ chỉ sự vật?",
          back: "Từ 'chú mèo' (chỉ con vật) và 'nắng' (chỉ hiện tượng tự nhiên).",
          category: "Tìm từ trong câu",
          emoji: "🐱"
        },
        {
          id: 5,
          front: "'Cây bàng' và 'Hoa phượng vĩ' thuộc nhóm từ nào?",
          back: "Thuộc nhóm từ chỉ cây cối (sự vật).",
          category: "Từ chỉ cây cối",
          emoji: "🌳"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Dãy từ nào dưới đây gồm TOÀN CÁC TỪ CHỈ NGƯỜI trong gia đình?",
          options: [
            "Ông bà, cha mẹ, anh chị, cô chú",
            "Bút chì, thước kẻ, cặp sách",
            "Chú mèo, con chó, chim sơn ca",
            "Cây bàng, hoa sen, quả mít"
          ],
          correctIndex: 0,
          hint: "Nhóm từ nào dùng để xưng hô yêu thương với những người thân yêu trong nhà?",
          explanation: "Chính xác! Ông bà, cha mẹ, anh chị, cô chú đều là các từ chỉ người trong gia đình.",
          funFact: "Gia đình là tổ ấm thiêng liêng nhất nơi các con luôn được che chở và yêu thương!"
        },
        {
          id: 2,
          question: "Trong câu văn sau: 'Đàn chim én chao liệng trên bầu trời xanh thắm', từ nào là từ chỉ CON VẬT?",
          options: ["Đàn chim én", "Chao liệng", "Bầu trời", "Xanh thắm"],
          correctIndex: 0,
          hint: "Từ nào trả lời cho câu hỏi: 'Con gì đang chao liệng?'",
          explanation: "Rất giỏi! 'Đàn chim én' là từ chỉ con vật. Còn 'chao liệng' là từ chỉ hoạt động, 'xanh thắm' là từ chỉ đặc điểm.",
          funFact: "Chim én báo hiệu mùa xuân về, mỗi năm én bay hàng ngàn cây số về phương Nam tránh rét!"
        },
        {
          id: 3,
          question: "Từ nào dưới đây KHÔNG PHẢI là từ chỉ sự vật?",
          options: ["Thước kẻ", "Cây xoài", "Múa hát", "Bác sĩ"],
          correctIndex: 2,
          hint: "'Múa hát' là hành động con người làm hay là tên gọi của một vật?",
          explanation: "Cô khen con rất tinh tường! 'Múa hát' là từ chỉ hoạt động, không phải từ chỉ sự vật.",
          funFact: "Phân biệt đúng từ chỉ sự vật và từ chỉ hoạt động sẽ giúp con viết câu văn cực kỳ mạch lạc!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi vốn từ phong phú của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, từ chỉ thời tiết như 'mưa, gió, nắng' có phải là từ chỉ sự vật không?",
        "Tìm 5 từ chỉ cây ăn quả ở miền Nam?",
        "Đố cô tìm được từ chỉ sự vật có 3 tiếng!"
      ]
    }
  },
  {
    keywords: ["ai là gì", "mẫu câu ai là gì", "câu giới thiệu", "ai la gi"],
    data: {
      topic: "Tiếng Việt lớp 2: Mẫu câu Ai là gì? (Câu giới thiệu & nhận xét)",
      topicEmoji: "👩‍🏫",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 2 & 3 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết đặt câu kiểu Ai là gì? cùng Cô Thanh Hằng",
        content: "Chào con yêu! Mẫu câu 'Ai là gì?' dùng để GIỚI THIỆU hoặc NHẬN XÉT về một người, một đồ vật hay con vật. Câu có từ nối rất đặc trưng là từ 'LÀ'!",
        analogy: "Cấu trúc gồm 2 bộ phận: Bộ phận 1 trả lời câu hỏi 'Ai (hoặc Cái gì, Con gì)?'. Bộ phận 2 bắt đầu bằng chữ 'là' và trả lời câu hỏi 'Là gì?'!"
      },
      relatableExamples: [
        {
          title: "Ví dụ tự giới thiệu bản thân",
          description: "Em (Ai?) / là học sinh lớp 2A (Là gì?). Câu này dùng để giới thiệu với bạn bè ngày đầu năm học.",
          emoji: "👧"
        },
        {
          title: "Ví dụ nói về Cô giáo",
          description: "Cô Lê Thị Thanh Hằng (Ai?) / là cô giáo chủ nhiệm của lớp em (Là gì?).",
          emoji: "👩‍🏫"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Từ nhận diện 'LÀ'",
          takeaway: "Câu kiểu 'Ai là gì?' hầu như luôn có chữ 'là' nối giữa hai bộ phận.",
          iconHint: "🔍"
        },
        {
          number: 2,
          title: "Tác dụng của câu",
          takeaway: "Dùng để giới thiệu (giới thiệu tên, nghề nghiệp, trường lớp) hoặc nhận định, đánh giá.",
          iconHint: "⭐"
        },
        {
          number: 3,
          title: "Dấu câu cuối câu",
          takeaway: "Đầu câu viết hoa, cuối câu kể đặt dấu chấm (.).",
          iconHint: "✍️"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Mẫu câu 'Ai là gì?' dùng để làm gì?",
          back: "Dùng để giới thiệu hoặc nhận xét về người, đồ vật, con vật.",
          category: "Tác dụng của câu",
          emoji: "📖"
        },
        {
          id: 2,
          front: "Trong câu 'Bố em là bác sĩ', bộ phận trả lời cho câu hỏi 'Ai?' là từ nào?",
          back: "Bộ phận trả lời câu hỏi 'Ai?' là 'Bố em'.",
          category: "Thành phần câu",
          emoji: "👨‍⚕️"
        },
        {
          id: 3,
          front: "Trong câu 'Sách là người bạn tốt của em', bộ phận trả lời câu hỏi 'Là gì?' là gì?",
          back: "Là: 'là người bạn tốt của em'.",
          category: "Thành phần câu",
          emoji: "📚"
        },
        {
          id: 4,
          front: "Đặt một câu kiểu 'Ai là gì?' để giới thiệu trường học của em?",
          back: "Ví dụ: 'Trường Tiểu học Tân Thành Bình là ngôi trường thân yêu của em.'",
          category: "Luyện đặt câu",
          emoji: "🏫"
        },
        {
          id: 5,
          front: "Câu 'Bạn Nam đang đọc sách' có phải kiểu câu 'Ai là gì?' không?",
          back: "Không! Câu này là kiểu 'Ai làm gì?' (vì có hành động đọc sách).",
          category: "Phân biệt mẫu câu",
          emoji: "💡"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Câu nào dưới đây được viết theo mẫu câu 'Ai là gì?'?",
          options: [
            "Bạn Lan đang múa hát dưới sân trường",
            "Bạn Lan là lớp trưởng lớp 2A",
            "Bạn Lan rất chăm chỉ và ngoan ngoãn",
            "Bạn Lan vừa đi học về"
          ],
          correctIndex: 1,
          hint: "Tìm câu có từ 'là' dùng để giới thiệu tên chức vụ hoặc nghề nghiệp của bạn Lan.",
          explanation: "Chính xác! 'Bạn Lan là lớp trưởng lớp 2A' thuộc mẫu câu 'Ai là gì?' (Bạn Lan / là lớp trưởng lớp 2A).",
          funFact: "Kiểu câu 'Ai là gì?' là kiểu câu cơ bản nhất giúp con người giới thiệu bản thân khi làm quen với bạn mới!"
        },
        {
          id: 2,
          question: "Trong câu: 'Cô Lê Thị Thanh Hằng là cô giáo dạy giỏi của trường em', bộ phận trả lời cho câu hỏi 'Là gì?' là:",
          options: [
            "Cô Lê Thị Thanh Hằng",
            "dạy giỏi",
            "là cô giáo dạy giỏi của trường em",
            "của trường em"
          ],
          correctIndex: 2,
          hint: "Bộ phận trả lời câu hỏi 'Là gì?' bắt đầu từ chữ 'là' cho đến hết câu.",
          explanation: "Rất chuẩn! Bộ phận 1 là 'Cô Lê Thị Thanh Hằng' (Ai?), bộ phận 2 là 'là cô giáo dạy giỏi của trường em' (Là gì?).",
          funFact: "Cô giáo tiểu học là người đã dạy con từng nét chữ đầu đời để con viết nên những ước mơ tươi đẹp!"
        },
        {
          id: 3,
          question: "Mục đích sử dụng chính của mẫu câu 'Ai là gì?' là gì?",
          options: [
            "Dùng để giới thiệu hoặc nhận xét, đánh giá",
            "Dùng để kể lại một hành động đang làm",
            "Dùng để miêu tả màu sắc, hình dáng",
            "Dùng để hỏi xin phép người lớn"
          ],
          correctIndex: 0,
          hint: "Ví dụ: 'Em là học sinh', 'Sư tử là chúa sơn lâm' dùng để làm gì?",
          explanation: "Cô khen con xuất sắc! Câu kiểu 'Ai là gì?' dùng để giới thiệu và nhận xét về người, đồ vật, con vật.",
          funFact: "Trong tiếng Anh, mẫu câu này tương ứng với cấu trúc 'Subject + to be + Noun' đấy con ạ!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con đặt câu giới thiệu tròn vành rõ chữ! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, khi nào thì dùng câu kiểu 'Ai làm gì?' ạ?",
        "Đặt câu 'Ai là gì?' để ca ngợi quê hương đất nước?",
        "Cho con phân tích thêm câu 'Mẹ là ngọn gió của con suốt đời' nhé cô!"
      ]
    }
  },
  {
    keywords: ["chính tả", "c và k", "l và n", "g và gh", "ng và ngh", "quy tắc chính tả", "chinh ta"],
    data: {
      topic: "Tiếng Việt lớp 2: Quy tắc chính tả phân biệt C/K, G/Gh, Ng/Ngh và L/N",
      topicEmoji: "✍️",
      summaryBadge: "SGK Tiếng Việt 2 • Kết nối tri thức",
      simpleExplanation: {
        title: "Bí kíp không bao giờ viết sai chính tả cùng Cô Thanh Hằng",
        content: "Chào con yêu! Trong Tiếng Việt có quy tắc chính tả vàng rất dễ nhớ: Chữ K, Gh, Ngh CHỈ ĐI VỚI các nguyên âm i, e, ê (kính, kem, kể, ghi, ghế, nghe, nghé). Còn chữ C, G, Ng sẽ đi với các nguyên âm còn lại (a, o, ô, ơ, u, ư)! Đối với L và N: L uốn cong đầu lưỡi lên vòm họng trên, còn N đặt đầu lưỡi thẳng áp vào chân răng!",
        analogy: "Hãy nhớ thần chú: 'K - Gh - Ngh là ba người bạn thân thiết, chỉ nắm tay ba bạn i - e - ê mà thôi!'!"
      },
      relatableExamples: [
        {
          title: "Ví dụ viết đúng chữ K",
          description: "Cái kéo, kính mắt, kể chuyện, kim chỉ, cây kem (tất cả đều có âm e, ê, i nên viết chữ k).",
          emoji: "✂️"
        },
        {
          title: "Ví dụ viết đúng chữ Gh và Ngh",
          description: "Ghế gỗ (Gh đi với ê), ghi chép (Gh đi với i), suy nghĩ (Ngh đi với i), lắng nghe (Ngh đi với e).",
          emoji: "🪑"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Thần chú i, e, ê",
          takeaway: "Trước i, e, ê: Viết K (không viết C); viết Gh (không viết G); viết Ngh (không viết Ng).",
          iconHint: "🔑"
        },
        {
          number: 2,
          title: "Các nguyên âm còn lại (a, o, ô, ơ, u, ư)",
          takeaway: "Viết C (cá, cờ); viết G (gà, gỗ); viết Ng (ngà voi, cá ngựa).",
          iconHint: "🐟"
        },
        {
          number: 3,
          title: "Mẹo phát âm L và N",
          takeaway: "L uốn lưỡi (Lúa nếp, Lớp học); N thẳng lưỡi (Nắng non, Nụ cười).",
          iconHint: "🗣️"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Chữ K ghép được với những nguyên âm nào?",
          back: "Chữ K chỉ ghép với 3 nguyên âm: i, e, ê (Ví dụ: kim, kéo, kể).",
          category: "Quy tắc C/K",
          emoji: "🔑"
        },
        {
          id: 2,
          front: "Từ 'cây kem' viết k hay c?",
          back: "Viết chữ k: 'kem' (vì đứng trước âm e).",
          category: "Luyện viết đúng",
          emoji: "🍦"
        },
        {
          id: 3,
          front: "Từ 'nghỉ ngơi' chữ 'nghỉ' viết Ng hay Ngh?",
          back: "Viết Ngh: 'nghỉ' (vì đứng trước âm i).",
          category: "Quy tắc Ng/Ngh",
          emoji: "🏖️"
        },
        {
          id: 4,
          front: "Từ 'con gà' viết G đơn hay Gh kép?",
          back: "Viết G đơn: 'gà' (vì đứng trước âm a).",
          category: "Quy tắc G/Gh",
          emoji: "🐔"
        },
        {
          id: 5,
          front: "Điền L hay N vào câu tục ngữ: '...úa ...ếp là ...úa ...ếp làng'?",
          back: "Điền L và N xen kẽ: 'Lúa nếp là lúa nếp làng'.",
          category: "Phân biệt L/N",
          emoji: "🌾"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Theo quy tắc chính tả tiếng Việt, con chữ 'k' chỉ ghép được với những chữ cái nào?",
          options: [
            "a, o, u",
            "i, e, ê",
            "o, ô, ơ",
            "Tất cả các nguyên âm"
          ],
          correctIndex: 1,
          hint: "Nhớ câu thần chú: K chỉ chơi cùng ba người bạn thân là gì nhỉ?",
          explanation: "Chính xác! Chữ K chỉ đi với các âm i, e, ê (Ví dụ: kim, kéo, kính, kem, kể).",
          funFact: "Quy tắc này giúp tiếng Việt của chúng ta luôn rõ ràng, chuẩn xác và không bị nhầm lẫn khi đọc viết!"
        },
        {
          id: 2,
          question: "Từ nào dưới đây viết SAI CHÍNH TẢ?",
          options: ["Cái kẹo", "Kính yêu", "Con ghà", "Bàn ghế"],
          correctIndex: 2,
          hint: "Chữ 'gh' chỉ đi với i, e, ê. Trước âm 'a' thì phải viết g hay gh?",
          explanation: "Rất giỏi! 'Con ghà' viết sai, phải viết đúng là 'Con gà' (G đơn đi với âm a).",
          funFact: "Gà trống là con vật gáy báo thức rất chuẩn giờ vào mỗi buổi sáng sớm thôn quê!"
        },
        {
          id: 3,
          question: "Điền 'l' hoặc 'n' vào chỗ trống trong câu sau: 'Mùa xuân đến, hoa mai (...)ở rực rỡ bên hiên (...)hà.'",
          options: ["n - n", "l - l", "l - n", "n - l"],
          correctIndex: 0,
          hint: "Hoa 'nở' (nở hoa) và hiên 'nhà'.",
          explanation: "Cô khen con xuất sắc! Cả hai từ đều viết bằng chữ n: hoa 'nở' và hiên 'nhà'.",
          funFact: "Hoa mai vàng là biểu tượng của mùa xuân ấm áp, may mắn ở miền Nam Việt Nam!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con nắm vững quy tắc chính tả vàng! Con xứng đáng nhận hoa điểm 10!",
      followUpSuggestions: [
        "Cô Hằng ơi, mẹo nhớ d/gi/r như thế nào ạ?",
        "Vì sao có chữ Qu trong tiếng Việt?",
        "Cho con thêm 3 câu đố vui phân biệt s/x và ch/tr nhé cô!"
      ]
    }
  },
  {
    keywords: ["từ chỉ hoạt động", "câu kiểu ai làm gì", "ai làm gì", "tu chi hoat dong", "ai lam gi"],
    data: {
      topic: "Tiếng Việt lớp 2: Từ chỉ hoạt động và Mẫu câu Ai làm gì?",
      topicEmoji: "🏃",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 5 & 6 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết nhận biết Từ chỉ hoạt động và Câu kiểu Ai làm gì?",
        content: "Chào con yêu! 'Từ chỉ hoạt động' là những từ chỉ sự vận động của người hoặc con vật mà con có thể nhìn thấy, nghe thấy (như: chạy, nhảy, múa, hát, đọc, viết, quét nhà, tưới cây). Khi ghép lại thành câu, mẫu câu 'Ai làm gì?' dùng để kể lại việc người hoặc con vật đang làm!",
        analogy: "Nếu từ chỉ sự vật là diễn viên đứng trên sân khấu, thì từ chỉ hoạt động chính là những động tác múa hát, chạy nhảy tuyệt đẹp mà diễn viên biểu diễn!"
      },
      relatableExamples: [
        {
          title: "Ví dụ trong giờ ra chơi",
          description: "Các bạn học sinh (Ai?) / đang nhảy dây và đá cầu dưới sân trường (Làm gì?).",
          emoji: "⚽"
        },
        {
          title: "Ví dụ việc nhà bé giúp mẹ",
          description: "Bé Mai (Ai?) / giúp mẹ nhặt rau và quét nhà (Làm gì?).",
          emoji: "🧹"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Hành động nhìn thấy được",
          takeaway: "Từ chỉ hoạt động trả lời cho câu hỏi: 'Làm gì?'.",
          iconHint: "🏃"
        },
        {
          number: 2,
          title: "Hai bộ phận của câu",
          takeaway: "Bộ phận 1: Ai (Con gì)? - Bộ phận 2: Làm gì?",
          iconHint: "🧩"
        },
        {
          number: 3,
          title: "Tác dụng của câu",
          takeaway: "Dùng để kể lại một hoạt động đang diễn ra hoặc đã hoàn thành.",
          iconHint: "📝"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Thế nào là từ chỉ hoạt động?",
          back: "Là từ chỉ cử động, vận động của người, đồ vật, loài vật (chạy, bơi, viết, bay...).",
          category: "Khái niệm",
          emoji: "🏃"
        },
        {
          id: 2,
          front: "Tìm 3 từ chỉ hoạt động học tập ở trường?",
          back: "Đọc bài, viết chính tả, làm tính.",
          category: "Hoạt động học tập",
          emoji: "📚"
        },
        {
          id: 3,
          front: "Trong câu 'Chú chim sơn ca hót líu lo', từ nào là từ chỉ hoạt động?",
          back: "Từ 'hót' là từ chỉ hoạt động của chú chim.",
          category: "Tìm từ hoạt động",
          emoji: "🐦"
        },
        {
          id: 4,
          front: "Câu 'Đàn cá bơi lội tung tăng dưới nước' thuộc mẫu câu nào?",
          back: "Mẫu câu 'Ai (Con gì) làm gì?'.",
          category: "Mẫu câu",
          emoji: "🐟"
        },
        {
          id: 5,
          front: "Đặt một câu kiểu 'Ai làm gì?' về việc em giúp đỡ bố mẹ?",
          back: "Ví dụ: 'Em quét nhà giúp mẹ sau giờ học.'",
          category: "Luyện đặt câu",
          emoji: "🧹"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Dãy từ nào dưới đây gồm TOÀN CÁC TỪ CHỈ HOẠT ĐỘNG của học sinh?",
          options: [
            "Đọc sách, viết chữ, tập thể dục, vẽ tranh",
            "Chăm chỉ, ngoan ngoãn, thông minh, hiền lành",
            "Cái bảng, cặp sách, phấn trắng, bàn ghế",
            "Thầy giáo, cô giáo, bác sĩ, kĩ sư"
          ],
          correctIndex: 0,
          hint: "Nhóm từ nào chỉ các việc mà tay chân, miệng, cơ thể của con thực hiện?",
          explanation: "Chính xác! Đọc sách, viết chữ, tập thể dục, vẽ tranh đều là những hoạt động bổ ích của học sinh.",
          funFact: "Tập thể dục và vận động mỗi ngày giúp não bộ tiết ra hoóc-môn hạnh phúc giúp con học thông minh hơn!"
        },
        {
          id: 2,
          question: "Câu nào dưới đây được viết theo mẫu câu 'Ai làm gì?'?",
          options: [
            "Bác nông dân đang cày ruộng trên cánh đồng",
            "Bác nông dân là người lao động cần cù",
            "Bác nông dân rất hiền lành và chất phác",
            "Bác nông dân có làn da ngăm đen"
          ],
          correctIndex: 0,
          hint: "Tìm câu có hành động 'đang cày ruộng' trả lời cho câu hỏi 'Làm gì?'.",
          explanation: "Rất chuẩn! 'Bác nông dân đang cày ruộng trên cánh đồng' kể về hành động cày ruộng của bác nông dân (Ai làm gì?).",
          funFact: "Hạt gạo trắng ngần bát cơm thơm dẻo đều nhờ công sức cày cấy vất vả của các bác nông dân đấy!"
        },
        {
          id: 3,
          question: "Trong câu văn: 'Đàn ong chăm chỉ bay đi tìm mật hoa ngọt ngào', bộ phận trả lời cho câu hỏi 'Làm gì?' là:",
          options: [
            "Đàn ong chăm chỉ",
            "bay đi tìm mật hoa",
            "ngọt ngào",
            "chăm chỉ"
          ],
          correctIndex: 1,
          hint: "Đàn ong đang thực hiện hành động gì nhỉ?",
          explanation: "Cô khen con xuất sắc! 'Bay đi tìm mật hoa' là bộ phận trả lời cho câu hỏi 'Làm gì?'.",
          funFact: "Một chú ong thợ phải ghé thăm hàng ngàn bông hoa mới làm nên một thìa mật ngọt lịm!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con nắm vững từ chỉ hoạt động! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, phân biệt từ chỉ hoạt động với từ chỉ trạng thái như thế nào?",
        "Viết một đoạn văn 3 câu toàn mẫu câu Ai làm gì?",
        "Đố cô tìm từ chỉ hoạt động của các loài thú trong rừng!"
      ]
    }
  },
  {
    keywords: ["dấu chấm", "dấu chấm hỏi", "dấu chấm than", "dấu câu", "dau cham", "dau hoi", "dau than", "dau cau"],
    data: {
      topic: "Tiếng Việt lớp 2: Dấu chấm, Dấu chấm hỏi và Dấu chấm than",
      topicEmoji: "❓",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 7 & 8 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết sử dụng Dấu câu chuẩn xác cùng Cô Thanh Hằng",
        content: "Chào con yêu! Dấu câu giống như những biển chỉ đường giúp người đọc hiểu đúng ý nghĩa câu văn: Dấu chấm (.) dùng ở cuối câu kể lại sự việc. Dấu chấm hỏi (?) dùng ở cuối câu hỏi khi muốn biết điều gì đó. Còn Dấu chấm than (!) dùng ở cuối câu cảm xúc (vui, buồn, ngạc nhiên) hoặc câu cầu khiến (khuyên nhủ, gọi đáp)!",
        analogy: "Dấu chấm là đèn đỏ dừng lại khi kể xong. Dấu hỏi như chiếc móc câu đang tò mò hỏi thăm. Dấu than như ngọn pháo hoa bùng nổ cảm xúc reo hò!"
      },
      relatableExamples: [
        {
          title: "Ví dụ câu kể (dấu chấm)",
          description: "Hôm nay em được cô giáo khen viết chữ đẹp.",
          emoji: "✍️"
        },
        {
          title: "Ví dụ câu hỏi (dấu chấm hỏi)",
          description: "Bạn có thích học môn Toán cùng Cô Thanh Hằng không?",
          emoji: "❓"
        },
        {
          title: "Ví dụ câu cảm thán (dấu chấm than)",
          description: "Ôi, bông hoa hồng này ngát hương thơm và đẹp làm sao!",
          emoji: "🌹"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Dấu chấm (.)",
          takeaway: "Đặt ở cuối câu kể lại thông tin bình thường; chữ cái sau dấu chấm phải viết hoa.",
          iconHint: "⚫"
        },
        {
          number: 2,
          title: "Dấu chấm hỏi (?)",
          takeaway: "Đặt ở cuối câu có từ nghi vấn: ai, gì, nào, sao, bao giờ, vì sao, có... không?",
          iconHint: "❓"
        },
        {
          number: 3,
          title: "Dấu chấm than (!)",
          takeaway: "Đặt ở cuối câu bộc lộ cảm xúc: ôi, chao ôi, than ôi, biết bao, làm sao, hãy, đừng, chớ!",
          iconHint: "❗"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Dấu chấm hỏi (?) được dùng trong trường hợp nào?",
          back: "Dùng đặt ở cuối câu hỏi để hỏi về điều chưa biết.",
          category: "Dấu chấm hỏi",
          emoji: "❓"
        },
        {
          id: 2,
          front: "Dấu chấm than (!) được dùng trong trường hợp nào?",
          back: "Dùng ở cuối câu bộc lộ cảm xúc vui mừng, ngạc nhiên hoặc lời gọi, yêu cầu.",
          category: "Dấu chấm than",
          emoji: "❗"
        },
        {
          id: 3,
          front: "Điền dấu thích hợp vào câu: 'Mấy giờ lớp mình vào học(...)'?",
          back: "Điền dấu chấm hỏi (?): 'Mấy giờ lớp mình vào học?'",
          category: "Luyện điền dấu",
          emoji: "⏰"
        },
        {
          id: 4,
          front: "Điền dấu thích hợp vào câu: 'Ôi, cảnh bình minh trên biển đẹp quá(...)'?",
          back: "Điền dấu chấm than (!): 'Ôi, cảnh bình minh trên biển đẹp quá!'",
          category: "Luyện điền dấu",
          emoji: "🌅"
        },
        {
          id: 5,
          front: "Sau dấu chấm con có bắt buộc phải viết hoa chữ cái đầu không?",
          back: "Có! Bắt buộc phải viết hoa chữ cái đầu tiên của câu tiếp theo.",
          category: "Quy tắc chữ hoa",
          emoji: "✍️"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Dấu chấm hỏi (?) được đặt ở vị trí nào trong câu?",
          options: [
            "Ở đầu câu",
            "Ở giữa hai từ nối",
            "Ở cuối câu dùng để hỏi",
            "Ở cuối câu kể lại sự việc"
          ],
          correctIndex: 2,
          hint: "Khi con muốn hỏi bạn bè hoặc cô giáo điều gì thì kết thúc câu bằng dấu gì?",
          explanation: "Chính xác! Dấu chấm hỏi (?) luôn được đặt ở cuối câu hỏi.",
          funFact: "Hình dạng cong của dấu chấm hỏi bắt nguồn từ chữ cái Q trong từ 'Quaestio' tiếng La-tinh nghĩa là 'hỏi'!"
        },
        {
          id: 2,
          question: "Điền dấu câu thích hợp vào chỗ chấm: 'Ôi, đàn gà con mới đáng yêu làm sao(...)'",
          options: ["Dấu chấm (.)", "Dấu chấm than (!)", "Dấu chấm hỏi (?)", "Dấu phẩy (,)"],
          correctIndex: 1,
          hint: "Câu có từ 'Ôi' và 'làm sao' thể hiện sự xúc động, khen ngợi đáng yêu.",
          explanation: "Rất giỏi! Đây là câu cảm bộc lộ tình cảm yêu mến, nên ta điền dấu chấm than (!).",
          funFact: "Những chú gà con lông vàng như tơ non líu ríu quanh chân gà mẹ là hình ảnh rất đỗi thân thương của đồng quê Việt Nam!"
        },
        {
          id: 3,
          question: "Câu nào dưới đây sử dụng dấu câu HOÀN TOÀN CHÍNH XÁC?",
          options: [
            "Hôm nay bạn có mang theo bút chì màu không.",
            "Bác sĩ đang khám bệnh cho em bé?",
            "Bông hoa hồng nở rực rỡ trong nắng sớm.",
            "Ôi chao, bạn hát hay thế."
          ],
          correctIndex: 2,
          hint: "Câu kể bình thường thì kết thúc bằng dấu chấm (.). Câu hỏi phải có dấu hỏi, câu cảm phải có dấu than.",
          explanation: "Cô khen con xuất sắc! 'Bông hoa hồng nở rực rỡ trong nắng sớm.' là câu kể dùng đúng dấu chấm. Các câu kia đều đặt nhầm dấu câu.",
          funFact: "Dùng dấu câu đúng giúp câu văn của con truyền cảm và người đọc không bị hiểu lầm!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi con dùng dấu câu chuẩn xác từng ly từng tí! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, dấu hai chấm (:) và dấu ngoặc kép dùng khi nào?",
        "Vì sao có những câu có cả dấu chấm hỏi và chấm than (?!)",
        "Cho con thêm 3 câu đố vui về dấu câu tiếng Việt nhé!"
      ]
    }
  },

  // =========================================================================
  // TIẾNG VIỆT 2 TẬP 2
  // =========================================================================
  {
    keywords: ["từ chỉ đặc điểm", "ai thế nào", "mẫu câu ai thế nào", "tu chi dac diem", "ai the nao"],
    data: {
      topic: "Tiếng Việt lớp 2: Từ chỉ đặc điểm và Mẫu câu Ai thế nào?",
      topicEmoji: "🌸",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 19 & 20 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí quyết nhận diện Từ chỉ đặc điểm và Câu kiểu Ai thế nào?",
        content: "Chào con yêu! 'Từ chỉ đặc điểm' là những từ miêu tả hình dáng (cao, thấp, béo, gầy, tròn xoe), màu sắc (đỏ thắm, xanh biếc, vàng tươi), mùi vị (ngọt ngào, chua thanh, thơm lừng), hoặc tính nết tâm hồn (chăm chỉ, ngoan ngoãn, thật thà). Khi ghép lại thành câu, mẫu câu 'Ai thế nào?' dùng để miêu tả đặc điểm của người, đồ vật, con vật, cây cối!",
        analogy: "Nếu con vẽ một bức tranh, màu sắc đỏ vàng rực rỡ và nét vẽ tròn xoe xinh xắn chính là những từ chỉ đặc điểm làm cho bức tranh sống động!"
      },
      relatableExamples: [
        {
          title: "Ví dụ miêu tả mẹ yêu",
          description: "Mẹ em (Ai?) / rất dịu dàng và đảm đang (Thế nào?).",
          emoji: "👩‍👧"
        },
        {
          title: "Ví dụ miêu tả chú cún con",
          description: "Bộ lông chú cún con (Cái gì?) / trắng muốt và mềm mại như bông (Thế nào?).",
          emoji: "🐶"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Trả lời câu hỏi 'Thế nào?'",
          takeaway: "Từ chỉ đặc điểm trả lời cho câu hỏi: 'Thế nào? Như thế nào?'.",
          iconHint: "🎨"
        },
        {
          number: 2,
          title: "4 nhóm đặc điểm chính",
          takeaway: "Màu sắc (đỏ, xanh, vàng) - Hình dáng (tròn, vuông, cao, thấp) - Mùi vị (ngọt, cay, thơm) - Tính nết (chăm chỉ, thật thà).",
          iconHint: "💡"
        },
        {
          number: 3,
          title: "Tác dụng miêu tả",
          takeaway: "Mẫu câu 'Ai thế nào?' là linh hồn của các bài tập làm văn miêu tả lớp 2.",
          iconHint: "📝"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Thế nào là từ chỉ đặc điểm?",
          back: "Là từ chỉ màu sắc, hình dáng, kích thước, mùi vị, tính nết của sự vật.",
          category: "Khái niệm",
          emoji: "🎨"
        },
        {
          id: 2,
          front: "Tìm 3 từ chỉ màu sắc của hoa quả trong vườn?",
          back: "Đỏ tươi, vàng ruộm, xanh biếc.",
          category: "Từ chỉ màu sắc",
          emoji: "🍎"
        },
        {
          id: 3,
          front: "Tìm 3 từ chỉ tính nết tốt của một bạn học sinh?",
          back: "Chăm chỉ, ngoan ngoãn, thật thà.",
          category: "Từ chỉ tính nết",
          emoji: "⭐"
        },
        {
          id: 4,
          front: "Câu 'Đôi mắt bé tròn xoe và sáng long lanh' thuộc mẫu câu nào?",
          back: "Mẫu câu 'Ai (Cái gì) thế nào?'.",
          category: "Mẫu câu",
          emoji: "👀"
        },
        {
          id: 5,
          front: "Từ 'chạy nhanh' thì từ nào chỉ hoạt động, từ nào chỉ đặc điểm?",
          back: "'Chạy' là từ chỉ hoạt động, 'nhanh' là từ chỉ đặc điểm.",
          category: "Phân biệt từ loại",
          emoji: "💡"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Dãy từ nào dưới đây gồm TOÀN CÁC TỪ CHỈ MÀU SẮC của sự vật?",
          options: [
            "Đỏ thắm, xanh ngắt, vàng óng, trắng tinh",
            "Chạy nhảy, bơi lội, ca hát, múa lượn",
            "Cái bút, quyển vở, cái bàn, cái ghế",
            "Thầy giáo, bác nông dân, chú công an"
          ],
          correctIndex: 0,
          hint: "Nhóm từ nào chỉ các sắc màu rực rỡ của cầu vồng và hoa lá?",
          explanation: "Chính xác! Đỏ thắm, xanh ngắt, vàng óng, trắng tinh đều là các từ chỉ màu sắc (đặc điểm).",
          funFact: "Cầu vồng sau cơn mưa có 7 sắc màu lung linh là một trong những kỳ quan thiên nhiên đẹp nhất!"
        },
        {
          id: 2,
          question: "Câu nào dưới đây được viết theo mẫu câu 'Ai thế nào?'?",
          options: [
            "Đôi mắt chú mèo mướp tròn xoe và xanh biếc",
            "Chú mèo mướp đang rình bắt chuột dưới bếp",
            "Chú mèo mướp là thú cưng của gia đình em",
            "Chú mèo mướp trèo lên cây cau"
          ],
          correctIndex: 0,
          hint: "Tìm câu miêu tả hình dáng và màu sắc đặc điểm của đôi mắt chú mèo.",
          explanation: "Rất chuẩn! 'Đôi mắt chú mèo mướp tròn xoe và xanh biếc' miêu tả đặc điểm (tròn xoe, xanh biếc) thuộc kiểu câu 'Ai thế nào?'.",
          funFact: "Mắt mèo có thể nhìn rõ trong bóng đêm nhờ một lớp tế bào phản chiếu ánh sáng đặc biệt!"
        },
        {
          id: 3,
          question: "Tìm từ chỉ TÍNH NẾT TỐT ĐẸP của một người học sinh gương mẫu:",
          options: ["Chăm chỉ và thật thà", "Cao lớn", "Áo trắng", "Chạy nhanh"],
          correctIndex: 0,
          hint: "Tính nết nói về phẩm chất đạo đức bên trong con người con nhé.",
          explanation: "Cô khen con xuất sắc! 'Chăm chỉ và thật thà' là những từ chỉ tính nết tốt đẹp đáng quý của người học trò.",
          funFact: "Đức tính thật thà và chăm chỉ sẽ giúp con luôn được thầy cô tin cậy và bạn bè yêu mến suốt đời!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi vốn từ miêu tả tuyệt đẹp của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, câu 'Cánh đồng lúa chín vàng rực' thuộc mẫu câu gì ạ?",
        "Mẹo dùng từ gợi cảm xúc khi viết văn miêu tả?",
        "Cho con thêm 3 câu đố vui về các màu sắc thiên nhiên nhé cô!"
      ]
    }
  },
  {
    keywords: ["so sánh", "biện pháp so sánh", "như là", "tựa như", "so sanh", "bien phap so sanh"],
    data: {
      topic: "Tiếng Việt lớp 2: Biện pháp nghệ thuật So sánh",
      topicEmoji: "✨",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 21 & 22 Kết nối tri thức",
      simpleExplanation: {
        title: "Bí kíp viết câu văn so sánh lung linh cùng Cô Thanh Hằng",
        content: "Chào con yêu! So sánh là đối chiếu sự vật này với sự vật khác có nét tương đồng để làm cho câu văn sinh động, giàu hình ảnh và ấm áp tình cảm. Cấu trúc câu so sánh thường là: [Sự vật 1] + [Từ so sánh: như, là, tựa như] + [Sự vật 2]!",
        analogy: "Ví dụ: thay vì nói 'Mặt trời tròn và đỏ', con so sánh: 'Mặt trời đỏ rực như một quả cầu lửa khổng lồ', lập tức câu văn bừng sáng như một bức tranh nghệ thuật!"
      },
      relatableExamples: [
        {
          title: "Ví dụ so sánh về mẹ yêu",
          description: "Mắt mẹ sáng lung linh như những vì sao đêm. Nụ cười của mẹ ấm áp như ánh nắng sớm mai.",
          emoji: "🌟"
        },
        {
          title: "Ví dụ so sánh trong thiên nhiên",
          description: "Tiếng suối trong như tiếng hát xa. Giọt sương mai đọng trên lá long lanh như những viên ngọc bích.",
          emoji: "💧"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Cấu trúc 3 phần",
          takeaway: "Sự vật 1 - Từ so sánh (như, tựa như, là) - Sự vật 2.",
          iconHint: "🔍"
        },
        {
          number: 2,
          title: "Nét tương đồng",
          takeaway: "Hai sự vật phải có điểm giống nhau (về màu sắc, hình dáng, âm thanh hoặc tính chất).",
          iconHint: "💡"
        },
        {
          number: 3,
          title: "Tác dụng làm văn",
          takeaway: "Biện pháp so sánh giúp bài tập làm văn của con giàu cảm xúc và đạt điểm 10 tuyệt đối!",
          iconHint: "⭐"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Cấu trúc của một hình ảnh so sánh gồm những bộ phận nào?",
          back: "Gồm: Sự vật 1 + Từ so sánh (như, là...) + Sự vật 2.",
          category: "Cấu trúc so sánh",
          emoji: "✨"
        },
        {
          id: 2,
          front: "Trong câu 'Mặt trời như quả cầu lửa', sự vật 1 và sự vật 2 là gì?",
          back: "Sự vật 1 là 'Mặt trời', sự vật 2 là 'quả cầu lửa'.",
          category: "Xác định sự vật",
          emoji: "☀️"
        },
        {
          id: 3,
          front: "Kể tên các từ so sánh thường gặp nhất ở lớp 2?",
          back: "Từ: 'như', 'như là', 'tựa như', 'là', 'giống như'.",
          category: "Từ so sánh",
          emoji: "📝"
        },
        {
          id: 4,
          front: "Vì sao không nên so sánh: 'Cái bàn giống cái ghế'?",
          back: "Vì đó chỉ là sự giống nhau thông thường, không gợi hình ảnh nghệ thuật ví von đẹp mắt.",
          category: "Mẹo làm văn hay",
          emoji: "💡"
        },
        {
          id: 5,
          front: "Tìm câu thơ có hình ảnh so sánh của Bác Hồ?",
          back: "'Trẻ em như búp trên cành / Biết ăn ngủ, biết học hành là ngoan'.",
          category: "Thơ ca thiếu nhi",
          emoji: "🌿"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Trong câu văn: 'Mặt trăng tròn vành vạnh như chiếc đĩa bạc lơ lửng giữa trời', sự vật 1 (Mặt trăng) được so sánh với sự vật nào?",
          options: ["Bầu trời đêm", "Chiếc đĩa bạc", "Những vì sao", "Ánh trăng"],
          correctIndex: 1,
          hint: "Mặt trăng tròn xoe sáng lấp lánh được so sánh 'như' cái gì?",
          explanation: "Chính xác! Mặt trăng được so sánh với 'chiếc đĩa bạc' vì cả hai đều tròn và tỏa sáng lấp lánh.",
          funFact: "Đêm rằm Trung Thu là lúc mặt trăng tròn và sáng đẹp nhất trong năm, các bạn nhỏ được rước đèn phá cỗ!"
        },
        {
          id: 2,
          question: "Từ so sánh phổ biến nhất được dùng trong câu văn sau là từ nào: 'Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra'?",
          options: ["Công", "Như", "Núi", "Nước"],
          correctIndex: 1,
          hint: "Từ nối đứng giữa công cha và núi Thái Sơn là từ nào?",
          explanation: "Rất chuẩn! Từ 'như' là từ so sánh kinh điển trong ca dao Việt Nam ngợi ca công ơn trời biển của cha mẹ.",
          funFact: "Bài ca dao này nhắc nhở mỗi người con phải luôn hiếu thảo và kính trọng cha mẹ suốt đời!"
        },
        {
          id: 3,
          question: "Điền hình ảnh so sánh thích hợp vào chỗ trống để câu văn thêm sinh động: 'Giọng cô giáo em dịu dàng, ấm áp như (...)'",
          options: [
            "Lời ru của mẹ",
            "Tiếng còi xe inh ỏi",
            "Tiếng sấm sét mùa hè",
            "Gió bão gầm rú"
          ],
          correctIndex: 0,
          hint: "Giọng nói ấm áp, dịu dàng của cô giáo giống với âm thanh yêu thương nào của mẹ ru con ngủ?",
          explanation: "Cô khen con xuất sắc! 'Lời ru của mẹ' mang lại cảm giác ấm áp, ngọt ngào và chan chứa tình yêu thương nhất trần đời.",
          funFact: "Lời ru dân gian Việt Nam với giai điệu à ơi đã nuôi dưỡng tâm hồn của biết bao thế hệ tuổi thơ!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi tâm hồn văn học bay bổng và tinh tế của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, cách đặt câu so sánh về thầy cô giáo?",
        "Biện pháp nhân hóa khác biện pháp so sánh ở điểm nào?",
        "Cho con thêm 3 câu đố thơ so sánh vui nhé cô!"
      ]
    }
  },
  {
    keywords: ["muông thú", "thế giới loài vật", "đoạn văn tả con vật", "muong thu", "con vat"],
    data: {
      topic: "Tiếng Việt lớp 2: Mở rộng vốn từ Muông thú & Đoạn văn tả con vật nuôi",
      topicEmoji: "🐾",
      summaryBadge: "SGK Tiếng Việt 2 • Tuần 23 & 24 Kết nối tri thức",
      simpleExplanation: {
        title: "Khám phá Thế giới Muông thú cùng Cô Thanh Hằng",
        content: "Chào con yêu! Thế giới loài vật vô cùng phong phú: có những loài thú dữ nguy hiểm sống nơi rừng sâu (hổ, báo, sư tử, gấu), và có những loài thú hiền lành đáng yêu (hươu, nai, thỏ, sóc). Khi viết đoạn văn 4-5 câu tả con vật nuôi trong nhà (chú cún, chú mèo con), con nhớ tả tên, bộ lông, đôi mắt, hoạt động và tình cảm gắn bó của con nhé!",
        analogy: "Mỗi con vật giống như một người bạn nhỏ có tính cách riêng: chú chó trung thành bảo vệ nhà, chú mèo bắt chuột tinh nghịch, chú thỏ trắng hiền lành gặm cà rốt!"
      },
      relatableExamples: [
        {
          title: "Ví dụ thành ngữ loài vật",
          description: "Nhanh như sóc, nhát như thỏ đế, khỏe như voi, chậm như rùa, trung thành như chó.",
          emoji: "🐿️"
        },
        {
          title: "Ví dụ mở đầu đoạn văn tả chú mèo",
          description: "Nhà em có nuôi một chú mèo mướp rất đáng yêu tên là Miu. Toàn thân chú khoác bộ lông màu xám tro mềm mại như nhung.",
          emoji: "🐱"
        }
      ],
      keyPoints: [
        {
          number: 1,
          title: "Phân biệt thú dữ và thú hiền",
          takeaway: "Thú hoang dã ăn thịt (hổ, báo, gấu); thú ăn cỏ hiền lành (hươu, nai, thỏ, sóc).",
          iconHint: "🦁"
        },
        {
          number: 2,
          title: "Dàn ý đoạn văn 4-5 câu",
          takeaway: "Câu 1: Giới thiệu con vật - Câu 2: Tả hình dáng (lông, mắt) - Câu 3: Tả hoạt động đáng yêu - Câu 4: Tình cảm của em.",
          iconHint: "📝"
        },
        {
          number: 3,
          title: "Bảo vệ động vật",
          takeaway: "Yêu thương chăm sóc vật nuôi và không săn bắt các loài thú quý hiếm trong tự nhiên.",
          iconHint: "❤️"
        }
      ],
      flashcards: [
        {
          id: 1,
          front: "Nhóm thú nào sau đây là thú dữ nguy hiểm: Hổ, Báo, Sư tử hay Hươu, Nai, Thỏ?",
          back: "Hổ, Báo, Sư tử là thú dữ ăn thịt nguy hiểm.",
          category: "Phân loại động vật",
          emoji: "🐯"
        },
        {
          id: 2,
          front: "Thành ngữ 'Nhanh như sóc' dùng để miêu tả đặc điểm gì?",
          back: "Miêu tả sự nhanh nhẹn, thoăn thoắt, lanh lợi.",
          category: "Thành ngữ loài vật",
          emoji: "🐿️"
        },
        {
          id: 3,
          front: "Thành ngữ 'Nhát như thỏ đế' có nghĩa là gì?",
          back: "Chỉ người hay sợ sệt, nhút nhát, thiếu can đảm.",
          category: "Thành ngữ loài vật",
          emoji: "🐰"
        },
        {
          id: 4,
          front: "Khi viết đoạn văn tả con mèo, câu kết đoạn con nên viết gì?",
          back: "Bày tỏ tình cảm yêu mến và hứa sẽ chăm sóc chú mèo thật chu đáo.",
          category: "Tập làm văn",
          emoji: "🐱"
        },
        {
          id: 5,
          front: "Con vật nào được mệnh danh là 'Chúa sơn lâm' của rừng già?",
          back: "Loài Hổ (hoặc Sư tử).",
          category: "Thế giới hoang dã",
          emoji: "👑"
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "Dãy nào dưới đây gồm TOÀN CÁC LOÀI THÚ HOANG DÃ NGUY HIỂM sống trong rừng sâu?",
          options: [
            "Hổ, báo, sư tử, chó sói, gấu",
            "Thỏ, hươu, nai, sóc, chuột túi",
            "Chó cưng, mèo mướp, gà con, vịt bầu",
            "Bồ câu, chim sẻ, yến phụng, họa mi"
          ],
          correctIndex: 0,
          hint: "Những loài thú ăn thịt có móng vuốt sắc nhọn và nanh dài đáng sợ là loài nào?",
          explanation: "Chính xác! Hổ, báo, sư tử, chó sói, gấu là các loài thú ăn thịt nguy hiểm sống trong rừng sâu.",
          funFact: "Loài gấu Bắc Cực có khứu giác thính đến mức có thể ngửi thấy mùi con mồi cách xa gần 30 km!"
        },
        {
          id: 2,
          question: "Thành ngữ nào dưới đây dùng để khen ngợi một người bạn có sức khỏe dẻo dai, vạm vỡ?",
          options: [
            "Khỏe như voi (hoặc khỏe như trâu)",
            "Chậm như rùa",
            "Nhát như thỏ đế",
            "Nhanh như cắt"
          ],
          correctIndex: 0,
          hint: "Con voi và con trâu nổi tiếng với sức mạnh kéo gỗ và cày ruộng.",
          explanation: "Rất chuẩn! 'Khỏe như voi' hoặc 'Khỏe như trâu' ngợi ca sức vóc khỏe khoắn, dẻo dai.",
          funFact: "Voi là loài động vật trên cạn lớn nhất hành tinh, chiếc vòi voi có hơn 40.000 bó cơ bắp mạnh mẽ!"
        },
        {
          id: 3,
          question: "Khi viết đoạn văn 4-5 câu tả một con vật nuôi yêu quý trong nhà, câu mở đầu con nên viết điều gì?",
          options: [
            "Giới thiệu tên con vật và nhà em nuôi từ bao giờ",
            "Tả đôi mắt của con vật ngay lập tức",
            "Nêu lời chào tạm biệt kết thúc",
            "Kể con vật ăn cơm như thế nào"
          ],
          correctIndex: 0,
          hint: "Trước khi tả chi tiết thì bước đầu tiên phải giới thiệu con vật đó là con gì.",
          explanation: "Cô khen con xuất sắc! Câu đầu tiên của đoạn văn luôn là câu mở đoạn giới thiệu con vật (Ví dụ: 'Nhà em có nuôi một chú mèo mướp rất xinh xắn.').",
          funFact: "Mèo mướp ở Việt Nam rất giỏi bắt chuột và thích nằm cuộn tròn sưởi nắng vào buổi trưa!"
        }
      ],
      encouragementMessage: "Cô Lê Thị Thanh Hằng khen ngợi tấm lòng yêu thương loài vật của con! Tặng con 1 bông hoa điểm 10 rực rỡ!",
      followUpSuggestions: [
        "Cô Hằng ơi, viết đoạn văn tả chú cún con 4 câu như thế nào?",
        "Vì sao chúng ta phải bảo vệ động vật hoang dã?",
        "Cho con thêm 3 câu đố vui về các loài chim trong rừng nhé cô!"
      ]
    }
  }
];

// Helper to look up standardized lesson by keyword
export function findStandardizedLesson(topic: string, subject?: string): StudyBuddyResponse | null {
  const clean = topic.toLowerCase().trim();
  if (!clean) return null;

  for (const entry of STANDARDIZED_LESSONS) {
    for (const kw of entry.keywords) {
      if (clean.includes(kw.toLowerCase())) {
        return entry.data;
      }
    }
  }

  return null;
}
