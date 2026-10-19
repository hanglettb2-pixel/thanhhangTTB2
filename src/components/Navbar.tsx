import React from "react";
import { Sparkles, BookOpen, Star, History, Volume2, VolumeX, Heart } from "lucide-react";

interface NavbarProps {
  totalStars: number;
  onOpenHistory: () => void;
  historyCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalStars,
  onOpenHistory,
  historyCount,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-400 via-pink-400 to-rose-300 flex items-center justify-center shadow-md shadow-rose-200/60 text-white font-bold text-xl border-2 border-white shrink-0">
            👩‍🏫
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5 font-sans">
                <span className="text-rose-600">TRỢ LÝ CÔ THANH HẰNG</span>
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                  Toán & Tiếng Việt
                </span>
              </h1>
            </div>
            <p className="text-xs text-rose-500/90 font-medium hidden sm:block">
              Đồng hành học giỏi Toán & Tiếng Việt dành cho học sinh 6–10 tuổi 🌸
            </p>
          </div>
        </div>

        {/* Right actions: Star Points, Sound, and History */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Flower / Star Rewards Badge */}
          <div
            id="stars-badge"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-50 to-pink-100 border border-rose-200 shadow-xs"
            title="Số hoa điểm 10 & sao thưởng bé tích lũy được"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-black text-rose-800">
              {totalStars}
            </span>
            <span className="text-[11px] font-semibold text-rose-700 hidden md:inline">
              Hoa Điểm 10
            </span>
          </div>

          {/* Sound Mute Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition-all text-slate-600 hover:bg-rose-50 ${
              soundEnabled
                ? "bg-rose-50 border-rose-200 text-rose-600"
                : "bg-slate-50 border-slate-200 text-slate-400"
            }`}
            title={soundEnabled ? "Tắt giọng đọc bài" : "Bật giọng đọc bài của Cô Hằng"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          {/* History Button */}
          <button
            id="history-toggle-btn"
            onClick={onOpenHistory}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50/80 hover:bg-rose-100 text-rose-800 hover:text-rose-900 border border-rose-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            aria-label="Xem bài đã học cùng Cô Hằng"
          >
            <History className="w-4 h-4 text-rose-600" />
            <span className="hidden sm:inline">Bài Đã Học</span>
            {historyCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full bg-rose-500 text-white">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
