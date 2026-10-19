import React, { useState } from "react";
import { FlashcardItem, KeyPoint } from "../types";
import { X, ChevronLeft, ChevronRight, RotateCcw, Volume2, Sparkles, HelpCircle, BookOpen } from "lucide-react";
import { speakText, stopSpeaking } from "../utils/speech";

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  topicEmoji: string;
  flashcards?: FlashcardItem[];
  keyPoints?: KeyPoint[];
  soundEnabled: boolean;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  isOpen,
  onClose,
  topic,
  topicEmoji,
  flashcards,
  keyPoints,
  soundEnabled,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Normalize cards from either flashcards array or keyPoints
  const cards = (flashcards && flashcards.length > 0)
    ? flashcards.map((f, i) => ({
        id: f.id || i + 1,
        front: f.front,
        back: f.back,
        category: f.category || `Thẻ #${i + 1}`,
        emoji: f.emoji || topicEmoji || "🌸"
      }))
    : (keyPoints && keyPoints.length > 0)
    ? keyPoints.map((k, i) => ({
        id: k.number || i + 1,
        front: k.title,
        back: k.takeaway,
        category: `Bí kíp #${k.number || i + 1}`,
        emoji: k.iconHint || topicEmoji || "🌸"
      }))
    : [];

  if (!isOpen || cards.length === 0) return null;

  const currentCard = cards[currentIndex] || cards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleReadCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!soundEnabled) return;
    const textToRead = isFlipped
      ? `Mặt sau: Câu trả lời. ${currentCard.back}`
      : `Mặt trước: Câu hỏi. ${currentCard.front}`;
    speakText(textToRead);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg p-6 border-2 border-rose-300 shadow-2xl relative overflow-hidden flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-rose-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentCard.emoji || topicEmoji || "🌸"}</span>
            <div>
              <h3 className="font-black text-slate-800 text-lg">
                5 Thẻ Flashcard Của Cô Hằng
              </h3>
              <p className="text-xs text-rose-500 font-medium">{topic}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-4">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-8 bg-rose-500"
                  : "w-2 bg-rose-200"
              }`}
            />
          ))}
          <span className="text-xs font-bold text-slate-500 ml-2">
            Thẻ {currentIndex + 1} / {cards.length}
          </span>
        </div>

        {/* Flip Flashcard container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full h-64 sm:h-72 rounded-3xl bg-gradient-to-tr from-rose-500 via-pink-400 to-rose-400 p-1 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-98"
        >
          <div className="w-full h-full bg-white rounded-[22px] p-6 flex flex-col justify-between items-center text-center relative">
            <div className="w-full flex items-center justify-between">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black">
                {!isFlipped ? (
                  <>
                    <HelpCircle className="w-3 h-3 text-rose-600" />
                    <span>Mặt trước: Câu hỏi</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-3 h-3 text-rose-600" />
                    <span>Mặt sau: Câu trả lời</span>
                  </>
                )}
              </span>
              <button
                type="button"
                onClick={handleReadCard}
                className="p-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 transition-all"
                title="Đọc nội dung thẻ"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {!isFlipped ? (
              // Front side: Question or Term
              <div className="my-auto space-y-3">
                <div className="text-4xl animate-bounce">
                  {currentCard.emoji}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug">
                  {currentCard.front}
                </h4>
                <p className="text-xs font-bold text-rose-600 flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Bấm vào thẻ để lật xem câu trả lời</span>
                </p>
              </div>
            ) : (
              // Back side: Answer
              <div className="my-auto space-y-3 animate-in zoom-in-95 duration-200">
                <h5 className="text-xs font-black text-emerald-600 uppercase tracking-wider">
                  Câu trả lời từ Cô Hằng
                </h5>
                <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed px-2">
                  "{currentCard.back}"
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  (Bấm để lật lại mặt trước)
                </p>
              </div>
            )}

            <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
              <RotateCcw className="w-3 h-3 text-rose-400" />
              <span>Chạm vào thẻ để lật 2 mặt</span>
            </div>
          </div>
        </div>

        {/* Navigation Controls with explicit requested labels */}
        <div className="flex items-center justify-between w-full mt-5">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-black transition-all cursor-pointer active:scale-98"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Card trước</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-black shadow-md shadow-rose-200 transition-all cursor-pointer active:scale-98"
          >
            <span>Card tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
