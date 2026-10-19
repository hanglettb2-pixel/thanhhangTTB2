export interface FlashcardItem {
  id: number;
  front: string; // Câu hỏi hoặc thuật ngữ
  back: string;  // Câu trả lời
  category?: string;
  emoji?: string;
}

export interface KeyPoint {
  number: number;
  title: string;
  takeaway: string;
  iconHint?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  funFact?: string;
}

export interface RelatableExample {
  title: string;
  description: string;
  emoji: string;
}

export interface SimpleExplanation {
  title: string;
  content: string;
  analogy: string;
}

export interface StudyBuddyResponse {
  topic: string;
  topicEmoji: string;
  summaryBadge: string;
  simpleExplanation: SimpleExplanation;
  relatableExamples: RelatableExample[];
  keyPoints: KeyPoint[];
  flashcards: FlashcardItem[];
  quizQuestions: QuizQuestion[];
  encouragementMessage: string;
  followUpSuggestions: string[];
}

export interface StudyHistoryItem {
  id: string;
  topic: string;
  subject?: "toan" | "tieng-viet" | "all";
  timestamp: number;
  topicEmoji: string;
  summaryBadge: string;
  data: StudyBuddyResponse;
  quizScore?: {
    total: number;
    correct: number;
  };
}
