
import { Injectable } from '@angular/core';

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
        ? JSON.parse(saved) as SavedProgress
        : { levels: {} };
    } catch {
      return { levels: {} };
    }
  }

  getStars(levelId: number): number {
    return this.load().levels[String(levelId)]?.stars ?? 0;
  }

  isCompleted(levelId: number): boolean {
    return this.load().levels[String(levelId)]?.completed ?? false;
  }

  saveLevel(levelId: number, stars: number): void {
    const progress = this.load();
    const key = String(levelId);
    const previous = progress.levels[key];

    progress.levels[key] = {
      stars: Math.max(previous?.stars ?? 0, stars),
      completed: true,
    };

    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(progress)
      );
    } catch {
    }
  }
}
