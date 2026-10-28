
import { Component, output } from '@angular/core';
import { LearningCategoryId } from '../../shared/models/learning-content';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  readonly selectMode = output<'discover' | 'research'>();
  readonly selectCategory = output<LearningCategoryId>();

  readonly worlds: {
    id: LearningCategoryId;
    name: string;
    image: string;
    color: string;
  }[] = [
    {
      id: 'colors',
      name: 'Farben',
      image: 'assets/regenbogen.webp',
      color: 'pink',
    },
    {
      id: 'shapes',
      name: 'Formen',
      image: 'assets/formen.webp',
      color: 'blue',
    },
    {
      id: 'fruits',
      name: 'Obst',
      image: 'assets/obst.webp',
      color: 'green',
    },
    {
      id: 'vegetables',
      name: 'Gemüse',
      image: 'assets/gemüse.webp',
      color: 'purple',
    },
  ];
}
