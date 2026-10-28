import { Component, computed, input, output, inject } from '@angular/core';
import { LEARNING_CATEGORIES } from '../../core/learning-data';
import { Progress } from '../../core/progress';
import { LearningCategoryId } from '../../shared/models/learning-content';

@Component({
  selector: 'app-level-select',
  imports: [],
  styleUrl: './level-select.scss',
  templateUrl: './level-select.html',
})
export class LevelSelect {
  private readonly progress = inject(Progress);

  readonly mode = input<'discover' | 'research'>('discover');
  readonly categoryId = input<LearningCategoryId>('colors');

  readonly back = output<void>();
  readonly startLevel = output<number>();

  readonly category = computed(() =>
    LEARNING_CATEGORIES.find(
      (category) => category.id === this.categoryId(),
    ) ?? LEARNING_CATEGORIES[0],
  );

  readonly levels = computed(() =>
    this.category().levels.map((level) => ({
      ...level,
      subtitle: level.description,
      emoji: this.category().emoji,
      stars: this.progress.getStars(
        level.id,
        this.category().id,
      ),
    })),
  );

  isUnlocked(id: number): boolean {
    return id === 1;
  }
}

