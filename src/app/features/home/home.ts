import { Component, output } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  readonly selectMode = output<'discover' | 'research'>();

  readonly worlds = [
    { name: 'Farben', emoji: '🌈', color: 'pink' },
    { name: 'Formen', emoji: '🔺', color: 'blue' },
    { name: 'Obst', emoji: '🍎', color: 'green' },
    { name: 'Gemüse', emoji: '🥕', color: 'purple' },
  ];
}
