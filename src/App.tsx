import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { TopicInputSection } from "./components/TopicInputSection";
import { AIResponseDisplay } from "./components/AIResponseDisplay";
import { HistoryDrawer } from "./components/HistoryDrawer";
import { StudyBuddyResponse, StudyHistoryItem } from "./types";
import {
  Sparkles,
  BookOpen,
  Star,
  HelpCircle,
  Lightbulb,
  Award,
  Smile,
  RefreshCw,
  Calculator,
  PenTool,
  BookmarkCheck,
  Heart
} from "lucide-react";

export default function App() {
  const [topic, setTopic] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<string>("6-7");
  const [subject, setSubject] = useState<"all" | "toan" | "tieng-viet">("all");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [studyData, setStudyData] = useState<StudyBuddyResponse | null>(null);

  // Sound preference
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Star Points reward & History state (saved in LocalStorage)
  const [totalStars, setTotalStars] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("thanh_hang_stars");
      return saved ? parseInt(saved, 10) || 0 : 5; // Start with 5 welcome flowers
    }
    return 5;
  });

  const [history, setHistory] = useState<StudyHistoryItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("thanh_hang_history");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return [];
        }
      }
    }
    return [];
  });

  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  // Persist stars & history
  useEffect(() => {
    localStorage.setItem("thanh_hang_stars", totalStars.toString());
  }, [totalStars]);

  useEffect(() => {
    localStorage.setItem("thanh_hang_history", JSON.stringify(history));
  }, [history]);

  const handleEarnStars = (count: number) => {
    setTotalStars((prev) => prev + count);
  };

  const handleQuizComplete = (correct: number, total: number) => {
    if (!studyData) return;
    // Update quiz score in history for the current topic
    setHistory((prev) =>
      prev.map((item) =>
        item.topic.toLowerCase() === studyData.topic.toLowerCase()
          ? { ...item, quizScore: { correct, total } }
          : item
      )
    );
  };

  // Perform search / learn API call
  const handleSearch = async (topicToSearch?: string) => {
    const targetTopic = (topicToSearch || topic).trim();
    if (!targetTopic || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/learn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: targetTopic,
          ageGroup: ageGroup,
          subject: subject,
        }),
      });

      if (!response.ok) {
        throw new Error("Không thể kết nối đến Cô Thanh Hằng, con thử bấm lại nhé!");
      }

      const data: StudyBuddyResponse = await response.json();
      setStudyData(data);

      // Add to history
      const newHistoryItem: StudyHistoryItem = {
        id: Date.now().toString(),
        topic: data.topic,
        subject: subject,
        timestamp: Date.now(),
        topicEmoji: data.topicEmoji || "🌸",
        summaryBadge: data.summaryBadge || "Bài Giảng Cô Hằng",
        data: data,
      };

      setHistory((prev) => [
        newHistoryItem,
        ...prev.filter((item) => item.topic.toLowerCase() !== data.topic.toLowerCase()),
      ]);

      // Scroll smoothly to response
      setTimeout(() => {
        const targetElement = document.getElementById("ai-response-area");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } catch (err: any) {
      console.error("Search error:", err);
      setError(err.message || "Đã có lỗi nhỏ xảy ra. Con thử bấm 'HỌC NGAY' lại nhé!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectHistoryItem = (item: StudyHistoryItem) => {
    setStudyData(item.data);
    setTopic(item.topic);
    if (item.subject) setSubject(item.subject);
    setTimeout(() => {
      const targetElement = document.getElementById("ai-response-area");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleClearHistory = () => {
    if (window.confirm("Con có chắc muốn xóa danh sách các bài đã học không?")) {
      setHistory([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-blue-50/40 font-sans text-slate-800 flex flex-col selection:bg-blue-200">
      {/* Top Navigation */}
      <Navbar
        totalStars={totalStars}
        onOpenHistory={() => setIsHistoryOpen(true)}
        historyCount={history.length}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Content Container */}
      <main className="flex-1 py-4 sm:py-6 space-y-6">
        {/* Input Topic & Search Component */}
        <TopicInputSection
          topic={topic}
          setTopic={setTopic}
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          subject={subject}
          setSubject={setSubject}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        {/* Loading Mascot Animation */}
        {isLoading && (
          <div className="max-w-md mx-auto my-8 p-8 rounded-3xl bg-white border-2 border-blue-200 shadow-xl text-center space-y-4 animate-pulse">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 flex items-center justify-center text-4xl shadow-md animate-bounce border-2 border-white">
              👩‍🏫
            </div>
            <h3 className="text-xl font-black text-slate-800">
              Cô Thanh Hằng đang soạn bài giảng cho con...
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              Đang chuẩn bị lời giải thích gần gũi, ví dụ sinh động và 3 câu đố kiểm tra kiến thức! 📘
            </p>
            <div className="w-48 h-2 bg-blue-100 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full animate-pulse" />
            </div>
          </div>
        )}

        {/* Error Notification */}
        {error && (
          <div className="max-w-2xl mx-auto px-4">
            <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-900 flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <p className="text-sm font-semibold">{error}</p>
              </div>
              <button
                type="button"
                onClick={() => handleSearch()}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                Thử lại
              </button>
            </div>
          </div>
        )}

        {/* AI Response Display (Structured Sections) */}
        {!isLoading && studyData && (
          <AIResponseDisplay
            data={studyData}
            soundEnabled={soundEnabled}
            onEarnStar={handleEarnStars}
            onQuizComplete={handleQuizComplete}
            onSearchTopic={handleSearch}
          />
        )}

        {/* Welcome Empty State (when no topic searched yet) */}
        {!isLoading && !studyData && (
          <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Subject Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Môn Toán Banner Card */}
              <div
                onClick={() => {
                  setSubject("toan");
                  setTopic("Bảng nhân 7");
                  handleSearch("Bảng nhân 7");
                }}
                className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-100/70 border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-3 bg-white rounded-2xl shadow-xs">🔢</span>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-600 text-white shadow-xs">
                    Môn Toán
                  </span>
                </div>
                <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-all mb-1">
                  Khám phá môn Toán cùng Cô Hằng
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Học bảng nhân, phép cộng trừ có nhớ, tính chu vi hình học, giải bài toán bằng sơ đồ tư duy từng bước.
                </p>
              </div>

              {/* Môn Tiếng Việt Banner Card */}
              <div
                onClick={() => {
                  setSubject("tieng-viet");
                  setTopic("Biện pháp so sánh ví von");
                  handleSearch("Biện pháp so sánh ví von");
                }}
                className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50/70 border-2 border-sky-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-3 bg-white rounded-2xl shadow-xs">📖</span>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-600 text-white shadow-xs">
                    Môn Tiếng Việt
                  </span>
                </div>
                <h4 className="text-lg font-black text-slate-900 group-hover:text-sky-700 transition-all mb-1">
                  Khám phá Tiếng Việt cùng Cô Hằng
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Luyện từ và câu, biện pháp so sánh - nhân hóa, chính tả chuẩn xác, tập làm văn miêu tả sinh động và giàu cảm xúc.
                </p>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 flex items-center justify-center gap-2">
                <span>Phương Pháp 4 Bước Giúp Con Học Giỏi & Hiểu Sâu:</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border-2 border-blue-100 hover:border-blue-200 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-base mb-3">
                  1️⃣
                </div>
                <h4 className="font-black text-slate-900 text-base mb-1">
                  Giải thích đơn giản
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Ngôn ngữ dịu dàng, ví von trực quan bằng que tính, bánh kẹo, đồ dùng quen thuộc.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-sky-100 hover:border-sky-200 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-black text-base mb-3">
                  2️⃣
                </div>
                <h4 className="font-black text-slate-900 text-base mb-1">
                  Ví dụ dễ hiểu
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Tình huống thực tế đời sống giúp con hiểu bản chất bài học mà không cần học vẹt.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-blue-100 hover:border-blue-200 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-base mb-3">
                  3️⃣
                </div>
                <h4 className="font-black text-slate-900 text-base mb-1">
                  3 ý cần nhớ
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  3 bí kíp cô đọng kèm bộ 5 Flashcard lật 2 mặt giúp con ghi nhớ tức thì.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-sky-100 hover:border-sky-200 shadow-xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-black text-base mb-3">
                  4️⃣
                </div>
                <h4 className="font-black text-slate-900 text-base mb-1">
                  3 câu đố kiểm tra
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Trắc nghiệm thông minh có gợi ý tư duy, nhận trọn vẹn Hoa Điểm 10 rực rỡ.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer with Copyright */}
      <footer className="mt-auto border-t border-blue-100 bg-white/95 py-6 text-center text-xs text-slate-600 font-medium">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-black text-blue-800 flex items-center gap-1.5">
              <span>📘</span>
              <span>TRỢ LÝ CÔ THANH HẰNG</span>
            </span>
            <span className="hidden sm:inline text-blue-200">•</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-bold text-xs">
              <span>© Bản quyền:</span>
              <span className="font-extrabold text-blue-900">Cô Lê Thị Thanh Hằng - Trường Tiểu học Tân Thành Bình</span>
            </div>
          </div>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            <span>Đồng hành cùng học sinh tiểu học (6–10 tuổi) môn Toán & Tiếng Việt</span>
            <span className="text-blue-500">✨</span>
          </p>
        </div>
      </footer>

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectHistoryItem={handleSelectHistoryItem}
        onClearHistory={handleClearHistory}
      />
    </div>
  );
}
