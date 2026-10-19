import React, { useState, useEffect } from "react";
import { FlashcardItem } from "../types";
import {
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Sparkles,
  Layers,
  CheckCircle2,
  Award,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { speakText, stopSpeaking } from "../utils/speech";
import confetti from "canvas-confetti";

interface FlashcardsSectionProps {
  flashcards: FlashcardItem[];
  topic: string;
  topicEmoji?: string;
  soundEnabled: boolean;
  onEarnStar?: (count: number) => void;
}

export const FlashcardsSection: React.FC<FlashcardsSectionProps> = ({
  flashcards,
  topic,
  topicEmoji = "🌸",
  soundEnabled,
  onEarnStar,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewedCards, setViewedCards] = useState<Set<number>>(new Set([0]));
  const [hasRewarded, setHasRewarded] = useState(false);

  // Reset state when flashcards array changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setViewedCards(new Set([0]));
    setHasRewarded(false);
  }, [flashcards]);

  if (!flashcards || flashcards.length === 0) return null;

  const currentCard = flashcards[currentIndex] || flashcards[0];
  const totalCards = flashcards.length;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    
    // Mark card as viewed & check if all 5 cards explored
    const nextViewed = new Set(viewedCards);
    nextViewed.add(currentIndex);
    setViewedCards(nextViewed);

    if (nextViewed.size === totalCards && !hasRewarded) {
      setHasRewarded(true);
      if (onEarnStar) {
        onEarnStar(2); // Award 2 flowers for mastering 5 flashcards!
      }
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#f43f5e", "#fb7185", "#f59e0b", "#10b981"],
        });
      } catch (e) {}
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    const nextIdx = (currentIndex + 1) % totalCards;
    setCurrentIndex(nextIdx);
    
    const nextViewed = new Set(viewedCards);
    nextViewed.add(nextIdx);
    setViewedCards(nextViewed);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    const prevIdx = (currentIndex - 1 + totalCards) % totalCards;
    setCurrentIndex(prevIdx);
  };

  const handleSelectCard = (index: number) => {
    setIsFlipped(false);
    setCurrentIndex(index);
    const nextViewed = new Set(viewedCards);
    nextViewed.add(index);
    setViewedCards(nextViewed);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!soundEnabled) return;
    const text = isFlipped
      ? `Mặt sau: Câu trả lời. ${currentCard.back}`
      : `Mặt trước: Câu hỏi. ${currentCard.front}`;
    speakText(text);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-200 shadow-md">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-rose-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            📇
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>5 Thẻ Flashcard Ôn Tập Cùng Cô Hằng</span>
              <Sparkles className="w-5 h-5 text-rose-500" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Chạm vào thẻ để lật xem mặt trước (câu hỏi/thuật ngữ) và mặt sau (câu trả lời)
            </p>
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-black">
            <Layers className="w-4 h-4 text-rose-500" />
            <span>Thẻ {currentIndex + 1} / {totalCards}</span>
          </div>
        </div>
      </div>

      {/* 5 Card Step Indicators */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {flashcards.map((card, idx) => {
          const isCurrent = idx === currentIndex;
          const isViewed = viewedCards.has(idx);
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectCard(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isCurrent
                  ? "w-10 bg-rose-500 shadow-xs"
                  : isViewed
                  ? "w-4 bg-rose-300 hover:bg-rose-400"
                  : "w-2.5 bg-rose-100 hover:bg-rose-200"
              }`}
              title={`Chuyển đến Flashcard ${idx + 1}`}
            />
          );
        })}
      </div>

      {/* Main Flashcard Interactive Area */}
      <div className="max-w-xl mx-auto">
        <div
          id={`flashcard-${currentIndex}`}
          onClick={handleFlip}
          className="w-full min-h-[280px] sm:min-h-[300px] rounded-3xl p-1 cursor-pointer transition-all duration-300 transform active:scale-[0.99] shadow-md hover:shadow-lg bg-gradient-to-tr from-rose-500 via-pink-400 to-rose-400 select-none group"
        >
          <div className="w-full h-full min-h-[272px] sm:min-h-[292px] bg-white rounded-[22px] p-6 sm:p-7 flex flex-col justify-between items-center text-center relative overflow-hidden">
            
            {/* Top Row: Side badge & sound button */}
            <div className="w-full flex items-center justify-between z-10">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black transition-colors ${
                  !isFlipped
                    ? "bg-rose-100 text-rose-800 border border-rose-200"
                    : "bg-pink-100 text-pink-900 border border-pink-200"
                }`}
              >
                {!isFlipped ? (
                  <>
                    <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Mặt trước: Câu hỏi / Thuật ngữ</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-3.5 h-3.5 text-pink-600" />
                    <span>Mặt sau: Câu trả lời</span>
                  </>
                )}
              </span>

              <div className="flex items-center gap-2">
                {currentCard.category && (
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                    {currentCard.category}
                  </span>
                )}
                {soundEnabled && (
                  <button
                    type="button"
                    onClick={handleSpeak}
                    className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-all cursor-pointer"
                    title="Nghe Cô Hằng đọc thẻ này"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Middle Content Area (Front vs Back) */}
            {!isFlipped ? (
              // FRONT SIDE: Question or Term
              <div className="my-auto py-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-3xl shadow-2xs">
                  {currentCard.emoji || topicEmoji || "🌸"}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug px-2">
                  {currentCard.front}
                </h4>
                <p className="text-xs font-bold text-rose-600 flex items-center justify-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Bấm vào thẻ để lật xem câu trả lời của Cô Hằng</span>
                </p>
              </div>
            ) : (
              // BACK SIDE: Answer
              <div className="my-auto py-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Giải đáp từ Cô Thanh Hằng</span>
                </div>
                <p className="text-base sm:text-lg text-slate-800 font-bold leading-relaxed px-2 sm:px-4">
                  "{currentCard.back}"
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  (Chạm vào thẻ để lật lại câu hỏi)
                </p>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="w-full pt-2 flex items-center justify-between text-[11px] font-bold text-slate-400 border-t border-slate-100">
              <span>Flashcard {currentIndex + 1}/{totalCards}</span>
              <span className="text-rose-500 font-semibold flex items-center gap-1">
                <RotateCcw className="w-3 h-3" />
                Chạm để lật
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls: 'Card trước' and 'Card tiếp theo' */}
        <div className="flex items-center justify-between gap-3 mt-6">
          <button
            id="prev-flashcard-btn"
            type="button"
            onClick={handlePrev}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 text-sm font-black transition-all cursor-pointer shadow-xs active:scale-98"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Card trước</span>
          </button>

          <div className="text-xs font-bold text-slate-500 hidden sm:block">
            {viewedCards.size === totalCards ? (
              <span className="text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Đã xem hết 5 thẻ
              </span>
            ) : (
              <span>Đã xem {viewedCards.size}/{totalCards} thẻ</span>
            )}
          </div>

          <button
            id="next-flashcard-btn"
            type="button"
            onClick={handleNext}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-black transition-all cursor-pointer shadow-md shadow-rose-200 active:scale-98"
          >
            <span>Card tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reward celebration banner when finished all 5 cards */}
        {viewedCards.size === totalCards && (
          <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 flex items-center justify-between animate-in fade-in duration-300">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌸</span>
              <p className="text-xs sm:text-sm font-bold text-rose-900">
                Chúc mừng con đã ôn tập trọn vẹn cả 5 thẻ Flashcard!
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-black text-rose-700 bg-white px-2.5 py-1 rounded-xl shadow-2xs border border-rose-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>+2 Hoa Điểm 10</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
