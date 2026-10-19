import React from "react";
import { KeyPoint } from "../types";
import { BookmarkCheck, Sparkles, Layers } from "lucide-react";

interface KeyPointsSectionProps {
  keyPoints: KeyPoint[];
  onOpenFlashcards: () => void;
}

export const KeyPointsSection: React.FC<KeyPointsSectionProps> = ({
  keyPoints,
  onOpenFlashcards,
}) => {
  const numberColors = [
    {
      bg: "bg-rose-50/60",
      border: "border-rose-300",
      text: "text-rose-900",
      badge: "from-rose-500 to-pink-500",
    },
    {
      bg: "bg-pink-50/60",
      border: "border-pink-300",
      text: "text-pink-900",
      badge: "from-pink-500 to-rose-400",
    },
    {
      bg: "bg-rose-50/40",
      border: "border-rose-200",
      text: "text-rose-900",
      badge: "from-rose-400 to-pink-400",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-rose-50/50 via-white to-pink-50/40 rounded-3xl p-5 sm:p-7 border-2 border-rose-200 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-rose-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            3️⃣
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>3 Ý Quan Trọng Cần Nhớ</span>
              <BookmarkCheck className="w-5 h-5 text-rose-500" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              3 bí kíp cốt lõi Cô Hằng đúc kết để con ghi nhớ thật sâu sắc
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenFlashcards}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-rose-50 text-rose-900 border-2 border-rose-300 text-xs sm:text-sm font-black shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
        >
          <Layers className="w-4 h-4 text-rose-600" />
          <span>Lật Thẻ Ghi Nhớ (Flashcards)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {keyPoints.map((point, index) => {
          const color = numberColors[index % numberColors.length];
          return (
            <div
              key={index}
              className={`rounded-2xl p-4 sm:p-5 border-2 ${color.border} ${color.bg} flex flex-col justify-between relative shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${color.badge} text-white font-black text-sm flex items-center justify-center shadow-xs`}
                  >
                    #{point.number || index + 1}
                  </div>
                  <span className="text-2xl">{point.iconHint || "🌸"}</span>
                </div>
                <h4 className="font-black text-slate-900 text-base sm:text-lg mb-2">
                  {point.title}
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {point.takeaway}
                </p>
              </div>

              <div className="mt-4 pt-2.5 flex items-center gap-1.5 text-[11px] font-bold text-rose-700 border-t border-rose-200/80">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Bí kíp Cô Hằng #{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
