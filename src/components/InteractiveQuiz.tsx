import React, { useState } from "react";
import { QuizQuestion } from "../types";
import confetti from "canvas-confetti";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Trophy,
  RotateCcw,
  Sparkles,
  Award,
  Star,
  Heart
} from "lucide-react";

interface InteractiveQuizProps {
  questions: QuizQuestion[];
  onQuizComplete?: (score: number, total: number) => void;
  onEarnStar?: (count: number) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  questions,
  onQuizComplete,
  onEarnStar,
}) => {
  // State for user answers: questionIndex -> selectedOptionIndex
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qIndex: number]: number }>({});
  // State for hints revealed: questionIndex -> boolean
  const [revealedHints, setRevealedHints] = useState<{ [qIndex: number]: boolean }>({});
  // Track whether stars were awarded for this session
  const [starsAwarded, setStarsAwarded] = useState<boolean>(false);

  const optionLetters = ["A", "B", "C", "D"];

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    const newAnswers = {
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    };
    setSelectedAnswers(newAnswers);

    const question = questions[questionIndex];
    if (optionIndex === question.correctIndex) {
      // Fire confetti for correct answer!
      try {
        confetti({
          particleCount: 45,
          spread: 65,
          origin: { y: 0.8 },
          colors: ["#f43f5e", "#fb7185", "#f59e0b", "#10b981"],
        });
      } catch (err) {
        // ignore
      }
    }

    // Check if all questions are answered
    if (Object.keys(newAnswers).length === questions.length) {
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (newAnswers[idx] === q.correctIndex) {
          correctCount++;
        }
      });

      if (!starsAwarded && correctCount > 0) {
        setStarsAwarded(true);
        if (onEarnStar) onEarnStar(correctCount);
      }

      if (onQuizComplete) {
        onQuizComplete(correctCount, questions.length);
      }

      if (correctCount === questions.length) {
        try {
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
            colors: ["#e11d48", "#f43f5e", "#fda4af", "#facc15"],
          });
        } catch (e) {}
      }
    }
  };

  const handleToggleHint = (qIndex: number) => {
    setRevealedHints((prev) => ({
      ...prev,
      [qIndex]: !prev[qIndex],
    }));
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setRevealedHints({});
  };

  // Calculate score
  const totalAnswered = Object.keys(selectedAnswers).length;
  const correctCount = questions.filter(
    (q, idx) => selectedAnswers[idx] === q.correctIndex
  ).length;
  const isFinished = totalAnswered === questions.length;

  return (
    <div className="bg-gradient-to-br from-white via-sky-50/40 to-blue-50/50 rounded-3xl p-5 sm:p-7 border-2 border-blue-200 shadow-md">
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-blue-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            4️⃣
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>3 Câu Đố Kiểm Tra Cùng Cô Hằng</span>
              <HelpCircle className="w-5 h-5 text-blue-600" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Thử tài trả lời đúng để nhận Hoa Điểm 10 và Sao Thưởng nhé! 📘
            </p>
          </div>
        </div>

        {/* Progress & Reset */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-black">
            <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Đã làm: {totalAnswered}/{questions.length} câu</span>
          </div>

          {totalAnswered > 0 && (
            <button
              type="button"
              onClick={handleResetQuiz}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại</span>
            </button>
          )}
        </div>
      </div>

      {/* Completion Banner */}
      {isFinished && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner shrink-0">
              {correctCount === 3 ? "🏆" : correctCount === 2 ? "⭐" : "💡"}
            </div>
            <div>
              <h4 className="font-black text-lg sm:text-xl">
                {correctCount === 3
                  ? "Tuyệt vời! Con xuất sắc trả lời đúng 3/3 câu hỏi!"
                  : correctCount === 2
                  ? "Rất giỏi! Con đã đúng 2/3 câu hỏi rồi!"
                  : "Cố gắng lên con nhé! Mỗi lần thử là một lần tiến bộ!"}
              </h4>
              <p className="text-white/95 text-xs sm:text-sm font-medium">
                {correctCount === 3
                  ? "Cô Thanh Hằng tặng con trọn vẹn 3 Bông hoa điểm 10 rực rỡ! 🌟🌟🌟"
                  : "Con có thể bấm 'Làm lại' để tự tin đạt trọn điểm 10 nhé!"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-black shrink-0 border border-white/30">
            <Sparkles className="w-4 h-4 text-yellow-200" />
            <span>+{correctCount} Hoa Điểm 10</span>
          </div>
        </div>
      )}

      {/* List of 3 Quiz Questions */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const selectedOption = selectedAnswers[qIndex];
          const hasAnswered = selectedOption !== undefined;
          const isCorrect = hasAnswered && selectedOption === q.correctIndex;
          const isHintOpen = revealedHints[qIndex];

          return (
            <div
              key={q.id || qIndex}
              className={`rounded-2xl p-4 sm:p-6 border-2 transition-all ${
                hasAnswered
                  ? isCorrect
                    ? "bg-emerald-50/70 border-emerald-300 shadow-xs"
                    : "bg-rose-50/70 border-rose-300 shadow-xs"
                  : "bg-white border-slate-200 hover:border-blue-300 shadow-xs"
              }`}
            >
              {/* Question Top Row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {qIndex + 1}
                  </span>
                  <h4 className="font-black text-slate-900 text-base sm:text-lg leading-snug">
                    {q.question}
                  </h4>
                </div>

                {/* Hint Button */}
                <button
                  type="button"
                  onClick={() => handleToggleHint(qIndex)}
                  className={`shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isHintOpen
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                  }`}
                  title="Xem gợi ý từ Cô Hằng để con tự suy nghĩ"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{isHintOpen ? "Đóng gợi ý" : "Cô gợi ý"}</span>
                </button>
              </div>

              {/* Hint Box if Revealed */}
              {isHintOpen && (
                <div className="mb-4 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm font-medium flex items-start gap-2 animate-in fade-in duration-200">
                  <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Cô Hằng gợi ý cho con: </span>
                    <span>{q.hint}</span>
                  </div>
                </div>
              )}

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                {q.options.map((option, optIdx) => {
                  const isThisSelected = selectedOption === optIdx;
                  const isThisCorrect = optIdx === q.correctIndex;

                  let buttonStyle =
                    "bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-800";
                  let letterBadgeStyle = "bg-slate-100 text-slate-700";

                  if (hasAnswered) {
                    if (isThisCorrect) {
                      buttonStyle =
                        "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold shadow-xs";
                      letterBadgeStyle = "bg-emerald-500 text-white";
                    } else if (isThisSelected && !isThisCorrect) {
                      buttonStyle =
                        "bg-rose-100 border-rose-300 text-rose-950 font-bold";
                      letterBadgeStyle = "bg-rose-500 text-white";
                    } else {
                      buttonStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                      letterBadgeStyle = "bg-slate-200 text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(qIndex, optIdx)}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border-2 text-left text-sm sm:text-base transition-all cursor-pointer active:scale-98 ${buttonStyle}`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center shrink-0 shadow-2xs ${letterBadgeStyle}`}
                      >
                        {optionLetters[optIdx]}
                      </span>
                      <span className="flex-1 font-medium leading-snug">{option}</span>
                      {hasAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {hasAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Fun Fact after answering */}
              {hasAnswered && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2 text-xs sm:text-sm animate-in fade-in duration-300">
                  <div
                    className={`p-3 rounded-xl flex items-start gap-2 ${
                      isCorrect
                        ? "bg-emerald-100/80 border border-emerald-300 text-emerald-900"
                        : "bg-rose-100/80 border border-rose-300 text-rose-900"
                    }`}
                  >
                    <Award className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <div>
                      <span className="font-bold">
                        {isCorrect ? "🌟 Cô khen con giỏi lắm! " : "💡 Lời giảng của Cô Hằng: "}
                      </span>
                      <span>{q.explanation}</span>
                    </div>
                  </div>

                  {q.funFact && (
                    <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Góc mở rộng của Cô: </span>
                        <span>{q.funFact}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
