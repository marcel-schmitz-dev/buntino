import { Component } from '@angular/core';
import { Home } from './features/home/home';
import { LevelSelect } from './features/level-select/level-select';
import { ColorGame } from './features/games/color-game/color-game';
import { LearningCategoryId } from './shared/models/learning-content';

type Screen = 'home' | 'levels' | 'game';
type GameMode = 'discover' | 'research';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, LevelSelect, ColorGame],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  screen: Screen = 'home';
  mode: GameMode = 'discover';

  selectedCategory: LearningCategoryId = 'colors';

  openLevels(mode: GameMode): void {
    this.mode = mode;
    this.selectedCategory = 'colors';
    this.screen = 'levels';
  }

  selectCategory(categoryId: LearningCategoryId): void {
  this.selectedCategory = categoryId;
  this.screen = 'levels';
}

  startLevel(levelId: number): void {
  if (levelId === 1) {
    this.screen = 'game';
  }
}

  goHome(): void {
    this.screen = 'home';
  }

  goToLevels(): void {
    this.screen = 'levels';
  }
}
