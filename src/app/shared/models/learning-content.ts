export type LearningCategoryId =
  | 'colors'
  | 'shapes'
  | 'fruits'
  | 'vegetables';

export interface LearningOption {
  id: string;
  label: string;
  color?: string;
  emoji?: string;
  image?: string; // Neu: Erlaubt Bilder bei den Antwort-Optionen
}

export interface LearningQuestion {
  id: string;
  objectName: string;
  spokenQuestion: string;
  emoji?: string; // Optional gemacht, falls ein Bild statt Emoji genutzt wird
  image?: string; // Neu: Erlaubt ein Hauptbild für die Frage
  options: LearningOption[];
  answerId: string;
}

export interface LearningLevel {
  id: number;
  title: string;
  description: string;
  questions: LearningQuestion[];
}

export interface LearningCategory {
  id: LearningCategoryId;
  title: string;
  description: string;
  emoji: string;
  levels: LearningLevel[];
}