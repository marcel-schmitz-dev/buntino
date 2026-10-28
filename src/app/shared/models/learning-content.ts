
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
}

export interface LearningQuestion {
  id: string;
  objectName: string;
  spokenQuestion: string;
  emoji: string;
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
