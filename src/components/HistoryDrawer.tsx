import React from "react";
import { StudyHistoryItem } from "../types";
import { X, Clock, Star, Trash2, BookOpen, ChevronRight, Heart } from "lucide-react";

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: StudyHistoryItem[];
  onSelectHistoryItem: (item: StudyHistoryItem) => void;
  onClearHistory: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onSelectHistoryItem,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-rose-100 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-rose-100 flex items-center justify-between bg-rose-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-black">
              🌸
            </div>
            <div>
              <h3 className="font-black text-slate-800 text-base sm:text-lg">
                Bài Học Cùng Cô Hằng
              </h3>
              <p className="text-xs text-rose-600 font-medium">
                {history.length} bài học con đã hoàn thành
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <div className="text-4xl mb-2">🌸</div>
              <p className="font-bold text-slate-700 text-sm">Chưa có bài học nào</p>
              <p className="text-xs text-slate-400 mt-1">
                Hãy nhập một chủ đề Toán hoặc Tiếng Việt và bấm "HỌC NGAY" để Cô Hằng giảng bài nhé!
              </p>
            </div>
          ) : (
            history.map((item) => {
              const formattedDate = new Date(item.timestamp).toLocaleDateString("vi-VN", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectHistoryItem(item);
                    onClose();
                  }}
                  className="p-3.5 rounded-2xl border-2 border-rose-100 hover:border-rose-300 bg-white hover:bg-rose-50/50 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.topicEmoji || "🌸"}</span>
                    <div>
                      <h4 className="font-black text-slate-800 text-sm sm:text-base group-hover:text-rose-900 line-clamp-1">
                        {item.topic}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400 font-medium">
                        <span className="flex items-center gap-0.5">
                          <Clock className="w-3 h-3" />
                          {formattedDate}
                        </span>
                        {item.quizScore && (
                          <span className="flex items-center gap-0.5 font-bold text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                            {item.quizScore.correct}/{item.quizScore.total} Điểm 10
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-all group-hover:translate-x-0.5" />
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {history.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <button
              type="button"
              onClick={onClearHistory}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-bold transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa lịch sử</span>
            </button>
            <span className="text-[11px] text-slate-400 font-medium">
              Lưu trên máy này
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
