import { Injectable } from '@angular/core';
import { LearningCategoryId } from '../shared/models/learning-content';

interface LevelProgress {
  stars: number;
  completed: boolean;
}

interface SavedProgress {
  levels: Record<string, LevelProgress>;
}

@Injectable({
  providedIn: 'root',
})
export class Progress {
  private readonly storageKey = 'buntino-progress';

  private load(): SavedProgress {
    try {
      const saved = localStorage.getItem(this.storageKey);

      return saved
        ? (JSON.parse(saved) as SavedProgress)
        : { levels: {} };
    } catch {
      return { levels: {} };
    }
  }

  private createKey(
    categoryId: LearningCategoryId,
    levelId: number,
  ): string {
    return `${categoryId}-${levelId}`;
  }

  getStars(
    levelId: number,
    categoryId: LearningCategoryId = 'colors',
  ): number {
    const progress = this.load();
    const key = this.createKey(categoryId, levelId);

    return progress.levels[key]?.stars ?? 0;
  }

  isCompleted(
    levelId: number,
    categoryId: LearningCategoryId = 'colors',
  ): boolean {
    const progress = this.load();
    const key = this.createKey(categoryId, levelId);

    return progress.levels[key]?.completed ?? false;
  }

  saveLevel(
    levelId: number,
    stars: number,
    categoryId: LearningCategoryId = 'colors',
  ): void {
    const progress = this.load();
    const key = this.createKey(categoryId, levelId);
    const previous = progress.levels[key];

    progress.levels[key] = {
      stars: Math.max(previous?.stars ?? 0, stars),
      completed: true,
    };

    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(progress),
      );
    } catch {
    }
  }
}
