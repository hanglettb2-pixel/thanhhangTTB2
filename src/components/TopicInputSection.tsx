import React, { useState } from "react";
import { Search, Sparkles, BookOpen, Lightbulb, RefreshCw, Calculator, BookmarkCheck, Heart } from "lucide-react";

interface TopicInputSectionProps {
  topic: string;
  setTopic: (val: string) => void;
  ageGroup: string;
  setAgeGroup: (val: string) => void;
  subject: "all" | "toan" | "tieng-viet";
  setSubject: (sub: "all" | "toan" | "tieng-viet") => void;
  onSearch: (topicToSearch?: string) => void;
  isLoading: boolean;
}

const TOAN_TOPICS = [
  { label: "Bảng nhân 2 đến bảng nhân 9", icon: "✖️", badge: "Phép nhân" },
  { label: "Phép cộng có nhớ trong phạm vi 100", icon: "➕", badge: "Cộng trừ" },
  { label: "Hình vuông, chữ nhật & cách tính chu vi", icon: "📐", badge: "Hình học" },
  { label: "Bí quyết giải bài toán có lời văn", icon: "📝", badge: "Tư duy" },
  { label: "Phân số đơn giản & chia phần bánh kem", icon: "🍰", badge: "Phân số" },
  { label: "Đố vui que tính & tư duy logic", icon: "🧩", badge: "Đố vui Toán" },
  { label: "Đổi đơn vị đo: kg, g, lít, cm, m", icon: "📏", badge: "Đo lường" },
  { label: "Phép chia hết và phép chia có dư", icon: "➗", badge: "Phép chia" },
];

const TIENG_VIET_TOPICS = [
  { label: "Biện pháp so sánh ví von ('như là')", icon: "✨", badge: "Luyện từ & câu" },
  { label: "Biện pháp nhân hóa đồ vật, con vật", icon: "🐾", badge: "Biện pháp tu từ" },
  { label: "Phân biệt chính tả L và N chuẩn xác", icon: "✍️", badge: "Chính tả" },
  { label: "Cách dùng dấu chấm, dấu phẩy, dấu hỏi", icon: "🔤", badge: "Dấu câu" },
  { label: "Tập làm văn: Đoạn văn tả chú cún con", icon: "🐶", badge: "Tập làm văn" },
  { label: "Từ đồng nghĩa và từ trái nghĩa", icon: "📚", badge: "Mở rộng vốn từ" },
  { label: "Đặt câu: Ai là gì? Ai làm gì? Ai thế nào?", icon: "💬", badge: "Mẫu câu" },
  { label: "Viết đoạn văn kể một việc tốt đã làm", icon: "💖", badge: "Văn kể chuyện" },
];

const ALL_TOPICS = [
  { label: "Bảng nhân 2 đến bảng nhân 9", icon: "✖️", badge: "Toán học" },
  { label: "Biện pháp so sánh ví von ('như là')", icon: "✨", badge: "Tiếng Việt" },
  { label: "Phép cộng có nhớ trong phạm vi 100", icon: "➕", badge: "Toán học" },
  { label: "Phân biệt chính tả L và N chuẩn xác", icon: "✍️", badge: "Tiếng Việt" },
  { label: "Bí quyết giải bài toán có lời văn", icon: "📝", badge: "Toán học" },
  { label: "Tập làm văn: Tả chú cún con đáng yêu", icon: "🐶", badge: "Tiếng Việt" },
  { label: "Hình vuông, chữ nhật & cách tính chu vi", icon: "📐", badge: "Toán học" },
  { label: "Từ đồng nghĩa và từ trái nghĩa", icon: "📚", badge: "Tiếng Việt" },
];

export const TopicInputSection: React.FC<TopicInputSectionProps> = ({
  topic,
  setTopic,
  ageGroup,
  setAgeGroup,
  subject,
  setSubject,
  onSearch,
  isLoading,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || isLoading) return;
    onSearch(topic);
  };

  const handleSuggestionClick = (suggested: string) => {
    setTopic(suggested);
    onSearch(suggested);
  };

  const currentSuggestions =
    subject === "toan"
      ? TOAN_TOPICS
      : subject === "tieng-viet"
      ? TIENG_VIET_TOPICS
      : ALL_TOPICS;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-3 sm:py-5">
      <div className="bg-gradient-to-b from-sky-50/80 via-white to-blue-50/60 rounded-3xl p-5 sm:p-8 border-2 border-blue-200 shadow-xl shadow-blue-100/50 relative overflow-hidden">
        {/* Playful background decorative shapes */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-200/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

        {/* Section Heading with Cô Thanh Hằng Badge */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
            <span>Cô Lê Thị Thanh Hằng - Trường Tiểu học Tân Thành Bình chào các em học sinh! 📘</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Hôm nay con muốn học <span className="text-blue-600">Toán</span> hay <span className="text-sky-600">Tiếng Việt</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Cô Thanh Hằng sẽ hướng dẫn con cách tư duy dễ hiểu, ví dụ sinh động và 3 câu đố nhận hoa điểm 10 nhé!
          </p>
        </div>

        {/* Subject Filter Tabs: Tất cả, Môn Toán, Môn Tiếng Việt */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setSubject("all")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              subject === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-300/60 scale-105"
                : "bg-white text-slate-600 border border-blue-200 hover:bg-blue-50"
            }`}
          >
            <span>📘</span>
            <span>Tất cả môn</span>
          </button>

          <button
            type="button"
            onClick={() => setSubject("toan")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              subject === "toan"
                ? "bg-blue-700 text-white shadow-md shadow-blue-300/60 scale-105"
                : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
            }`}
          >
            <span>🔢</span>
            <span>Môn Toán</span>
          </button>

          <button
            type="button"
            onClick={() => setSubject("tieng-viet")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              subject === "tieng-viet"
                ? "bg-sky-600 text-white shadow-md shadow-sky-300/60 scale-105"
                : "bg-white text-sky-700 border border-sky-200 hover:bg-sky-50"
            }`}
          >
            <span>📖</span>
            <span>Môn Tiếng Việt</span>
          </button>
        </div>

        {/* Age Selector Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5">
          <span className="text-xs sm:text-sm font-bold text-slate-600">Khối lớp của bé:</span>
          <button
            type="button"
            onClick={() => setAgeGroup("6-7")}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              ageGroup === "6-7"
                ? "bg-blue-100 text-blue-950 border-2 border-blue-400 shadow-2xs font-extrabold"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            🎈 Lớp 1 - 2 (6–7 tuổi)
          </button>
          <button
            type="button"
            onClick={() => setAgeGroup("8-10")}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              ageGroup === "8-10"
                ? "bg-blue-100 text-blue-950 border-2 border-blue-400 shadow-2xs font-extrabold"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            🚀 Lớp 3 - 5 (8–10 tuổi)
          </button>
        </div>

        {/* Main Input Form with Ô nhập chủ đề & Nút HỌC NGAY */}
        <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl border-2 border-blue-300 shadow-md shadow-blue-100/50 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
            <div className="relative flex-1 flex items-center pl-3">
              <Search className="w-6 h-6 text-blue-600 mr-2 shrink-0" />
              <input
                id="topic-input-field"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={
                  subject === "toan"
                    ? "Nhập bài toán con cần cô giảng... (VD: Bảng nhân 7, Tìm X, Chu vi hình chữ nhật...)"
                    : subject === "tieng-viet"
                    ? "Nhập bài Tiếng Việt con muốn học... (VD: Tả cây cối, So sánh, Phân biệt s/x...)"
                    : "Nhập chủ đề Toán hoặc Tiếng Việt... (VD: Bảng nhân 6, Biện pháp so sánh...)"
                }
                className="w-full text-slate-800 placeholder-slate-400 font-medium text-base sm:text-lg bg-transparent border-none outline-none focus:outline-none pr-3"
                disabled={isLoading}
              />
              {topic && (
                <button
                  type="button"
                  onClick={() => setTopic("")}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all text-xs font-bold mr-1"
                  title="Xóa nội dung"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Nút "HỌC NGAY CÙNG CÔ HẰNG" */}
            <button
              id="learn-now-button"
              type="submit"
              disabled={isLoading || !topic.trim()}
              className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg tracking-wide uppercase shadow-md transition-all ${
                isLoading || !topic.trim()
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                  : "bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 text-white hover:from-blue-700 hover:to-sky-700 active:scale-95 shadow-blue-300/60 cursor-pointer"
              }`}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>CÔ ĐANG SOẠN BÀI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-blue-100 fill-white animate-bounce" />
                  <span>HỌC NGAY</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Suggestions Chips */}
        <div className="mt-5 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-blue-800 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Gợi ý bài học nổi bật của Cô Hằng:</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentSuggestions.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSuggestionClick(item.label)}
                disabled={isLoading}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50 border border-blue-100 hover:border-blue-300 text-slate-700 hover:text-blue-900 font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 group-hover:bg-blue-200/70 text-blue-700 group-hover:text-blue-900 border border-blue-100">
                  {item.badge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
