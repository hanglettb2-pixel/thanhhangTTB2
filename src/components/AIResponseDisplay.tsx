import React, { useState } from "react";
import { StudyBuddyResponse, KeyPoint } from "../types";
import { KeyPointsSection } from "./KeyPointsSection";
import { FlashcardsSection } from "./FlashcardsSection";
import { InteractiveQuiz } from "./InteractiveQuiz";
import { FlashcardsModal } from "./FlashcardsModal";
import { speakText, stopSpeaking, isSpeaking } from "../utils/speech";
import {
  Sparkles,
  Volume2,
  VolumeX,
  Share2,
  Printer,
  Copy,
  Check,
  Send,
  MessageCircleQuestion,
  Lightbulb,
  Heart,
  Smile,
  BookOpen,
  Compass,
  ArrowRight,
  GraduationCap
} from "lucide-react";

interface AIResponseDisplayProps {
  data: StudyBuddyResponse;
  soundEnabled: boolean;
  onEarnStar?: (count: number) => void;
  onQuizComplete?: (correct: number, total: number) => void;
  onSearchTopic?: (topic: string) => void;
}

export const AIResponseDisplay: React.FC<AIResponseDisplayProps> = ({
  data,
  soundEnabled,
  onEarnStar,
  onQuizComplete,
  onSearchTopic,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Follow up Q&A state
  const [customQuestion, setCustomQuestion] = useState<string>("");
  const [isAskingFollowUp, setIsAskingFollowUp] = useState<boolean>(false);
  const [followUpAnswer, setFollowUpAnswer] = useState<string | null>(null);

  const handleToggleReadAloud = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    if (!soundEnabled) return;

    // Compose text to read aloud in Cô Thanh Hằng's gentle voice
    const text = `Cô Thanh Hằng chào con yêu! Bài học hôm nay của chúng mình là: ${data.topic}. Phần 1: Giải thích đơn giản. ${data.simpleExplanation.title}. ${data.simpleExplanation.content}. ${data.simpleExplanation.analogy}. Phần 2: Ví dụ dễ hiểu quanh ta. ${data.relatableExamples.map((ex) => `${ex.title}: ${ex.description}`).join(". ")}`;

    setIsPlayingAudio(true);
    speakText(
      text,
      () => setIsPlayingAudio(false),
      () => setIsPlayingAudio(false)
    );
  };

  const handleCopySummary = () => {
    const summaryText = `🌸 BÀI HỌC CÙNG CÔ THANH HẰNG: ${data.topic}\n\n1. GIẢI THÍCH ĐƠN GIẢN:\n${data.simpleExplanation.content}\n${data.simpleExplanation.analogy}\n\n2. VÍ DỤ DỄ HIỂU:\n${data.relatableExamples.map((e) => `- ${e.title}: ${e.description}`).join("\n")}\n\n3. 3 Ý QUAN TRỌNG CẦN NHỚ:\n${data.keyPoints.map((k) => `${k.number}. ${k.title}: ${k.takeaway}`).join("\n")}\n\n© Bản quyền: Cô Lê Thị Thanh Hằng - Trường Tiểu học Tân Thành Bình`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFollowUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim() || isAskingFollowUp) return;

    setIsAskingFollowUp(true);
    try {
      const res = await fetch("/api/ask-followup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentTopic: data.topic,
          question: customQuestion.trim(),
        }),
      });
      const resData = await res.json();
      setFollowUpAnswer(resData.answer || "Cô Hằng đã ghi nhận câu hỏi của con!");
      if (soundEnabled && resData.answer) {
        speakText(resData.answer);
      }
    } catch (err) {
      setFollowUpAnswer("Cô Hằng rất vui vì câu hỏi tò mò của con! Con hãy tiếp tục suy nghĩ và thử làm bài tập nhé!");
    } finally {
      setIsAskingFollowUp(false);
    }
  };

  const handleAskSuggestion = (suggestion: string) => {
    setCustomQuestion(suggestion);
  };

  return (
    <div id="ai-response-area" className="w-full max-w-4xl mx-auto px-4 py-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top Banner Card: Topic Title, Badge, and Action Buttons in Blue-Sky */}
      <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-200/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-6 w-32 h-32 bg-sky-300/20 rounded-full blur-xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl sm:text-5xl shadow-inner border border-white/30 shrink-0">
              {data.topicEmoji || "📘"}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold mb-2 border border-white/30">
                <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                <span>{data.summaryBadge || "Bài Giảng Cô Thanh Hằng"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                {data.topic}
              </h2>
              <p className="text-white/95 text-xs sm:text-sm font-semibold mt-1 flex flex-wrap items-center gap-1.5">
                <span>👩‍🏫 Bài giảng của Cô Lê Thị Thanh Hằng</span>
                <span className="text-white/60">•</span>
                <span>Trường Tiểu học Tân Thành Bình</span>
              </p>
            </div>
          </div>

          {/* Quick utility buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            {soundEnabled && (
              <button
                type="button"
                onClick={handleToggleReadAloud}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-md cursor-pointer ${
                  isPlayingAudio
                    ? "bg-blue-950 text-white animate-pulse"
                    : "bg-white text-blue-700 hover:bg-blue-50"
                }`}
                title="Nghe Cô Hằng đọc bài giảng"
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Dừng Đọc</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-blue-600" />
                    <span>Cô Hằng Đọc</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={handleCopySummary}
              className="p-2.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all cursor-pointer"
              title="Sao chép tóm tắt bài học"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-300" /> : <Copy className="w-5 h-5" />}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="p-2.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all cursor-pointer"
              title="In phiếu bài học này"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. GIẢI THÍCH ĐƠN GIẢN (Simple Explanation) */}
      {/* ======================================================== */}
      <section
        id="section-1-simple-explanation"
        className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md relative"
      >
        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-blue-100">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            1️⃣
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>Giải Thích Đơn Giản Dễ Hiểu</span>
              <BookOpen className="w-5 h-5 text-blue-600" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Cách hiểu dễ nhất theo phương pháp Cô Thanh Hằng
            </p>
          </div>
        </div>

        {/* Content Box */}
        <div className="space-y-4">
          <h4 className="text-lg sm:text-xl font-black text-blue-900">
            {data.simpleExplanation.title}
          </h4>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {data.simpleExplanation.content}
          </p>

          {/* Analogy Box: "Hãy tưởng tượng..." */}
          {data.simpleExplanation.analogy && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/40 border-2 border-blue-200 flex items-start gap-3 shadow-2xs">
              <span className="text-2xl sm:text-3xl shrink-0">💡</span>
              <div>
                <h5 className="font-black text-blue-900 text-sm sm:text-base mb-1">
                  Cô Hằng mách con một hình ảnh ví von thật gần gũi:
                </h5>
                <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed italic">
                  "{data.simpleExplanation.analogy}"
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. VÍ DỤ DỄ HIỂU (Relatable Examples) */}
      {/* ======================================================== */}
      <section
        id="section-2-relatable-examples"
        className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md"
      >
        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-blue-100">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            2️⃣
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>Ví Dụ Dễ Hiểu Trong Đời Sống</span>
              <Compass className="w-5 h-5 text-sky-600" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Ứng dụng thực tế trong sinh hoạt, gia đình và lớp học
            </p>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.relatableExamples.map((example, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-sky-50/40 hover:bg-sky-50/80 border-2 border-blue-100 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-3.5 mb-2">
                <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-white shadow-2xs shrink-0">
                  {example.emoji || "📘"}
                </span>
                <div>
                  <span className="text-[11px] font-black uppercase text-blue-700 tracking-wider">
                    Ví dụ #{index + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-slate-900">
                    {example.title}
                  </h4>
                </div>
              </div>
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed pl-1">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. 3 Ý QUAN TRỌNG CẦN NHỚ (Key Points) */}
      {/* ======================================================== */}
      <section id="section-3-key-points">
        <KeyPointsSection
          keyPoints={data.keyPoints}
          onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        />
      </section>

      {/* ======================================================== */}
      {/* 4. 5 THẺ FLASHCARD ÔN TẬP (Flashcards) */}
      {/* ======================================================== */}
      <section id="section-flashcards">
        <FlashcardsSection
          flashcards={data.flashcards}
          topic={data.topic}
          topicEmoji={data.topicEmoji}
          soundEnabled={soundEnabled}
          onEarnStar={onEarnStar}
        />
      </section>

      {/* ======================================================== */}
      {/* 5. 3 CÂU HỎI KIỂM TRA KIẾN THỨC (Quiz Questions) */}
      {/* ======================================================== */}
      <section id="section-4-quiz-questions">
        <InteractiveQuiz
          questions={data.quizQuestions}
          onEarnStar={onEarnStar}
          onQuizComplete={onQuizComplete}
        />
      </section>

      {/* ======================================================== */}
      {/* Encouragement Quote Box from Cô Thanh Hằng */}
      {/* ======================================================== */}
      {data.encouragementMessage && (
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100/70 border-2 border-blue-200 text-blue-950 flex items-center gap-4 shadow-sm">
          <div className="text-4xl shrink-0">📘</div>
          <div>
            <h5 className="font-black text-base sm:text-lg text-blue-950 flex items-center gap-1.5">
              <span>Lời dặn dò yêu thương từ Cô Thanh Hằng:</span>
              <Heart className="w-4 h-4 text-blue-600 fill-blue-500" />
            </h5>
            <p className="text-slate-800 text-sm sm:text-base font-medium mt-1">
              "{data.encouragementMessage}"
            </p>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* Curious Follow-up Q&A Box (Hỏi Thêm Với Cô Thanh Hằng) */}
      {/* ======================================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-100">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-sm font-bold text-lg">
            💬
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <span>Bé Có Muốn Hỏi Thêm Cô Hằng Không?</span>
              <MessageCircleQuestion className="w-5 h-5 text-blue-600" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Con cứ tự nhiên đặt câu hỏi, Cô Thanh Hằng luôn sẵn sàng giải đáp
            </p>
          </div>
        </div>

        {/* Suggested Follow-up curiosity chips */}
        {data.followUpSuggestions && data.followUpSuggestions.length > 0 && (
          <div className="mb-4">
            <span className="text-xs font-bold text-blue-800 block mb-2">
              💡 Gợi ý câu hỏi khám phá thêm cùng Cô Hằng:
            </span>
            <div className="flex flex-wrap gap-2">
              {data.followUpSuggestions.map((sug, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAskSuggestion(sug)}
                  className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span>{sug}</span>
                  <ArrowRight className="w-3 h-3 text-blue-500 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input box for follow-up */}
        <form onSubmit={handleFollowUpSubmit} className="flex gap-2">
          <input
            id="follow-up-input"
            type="text"
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
            placeholder="Nhắn câu hỏi gửi Cô Hằng... (VD: Cô ơi, có mẹo nào tính nhẩm nhanh không ạ?)"
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm sm:text-base font-medium text-slate-800"
            disabled={isAskingFollowUp}
          />
          <button
            id="ask-follow-up-btn"
            type="submit"
            disabled={isAskingFollowUp || !customQuestion.trim()}
            className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-200"
          >
            {isAskingFollowUp ? (
              <span>Cô đang trả lời...</span>
            ) : (
              <>
                <span>Hỏi Cô</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Follow up answer bubble */}
        {followUpAnswer && (
          <div className="mt-4 p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-950 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-blue-800">
              <span>👩‍🏫 Cô Thanh Hằng giải đáp:</span>
            </div>
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              {followUpAnswer}
            </p>
          </div>
        )}
      </section>

      {/* Flashcards Modal */}
      <FlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
        topic={data.topic}
        topicEmoji={data.topicEmoji}
        flashcards={data.flashcards}
        keyPoints={data.keyPoints}
        soundEnabled={soundEnabled}
      />
    </div>
  );
};
