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
    { name: 'Farben', image: 'assets/regenbogen.webp', color: 'pink' },
    { name: 'Formen', image: 'assets/formen.webp', color: 'blue' },
    { name: 'Obst', image: 'assets/obst.webp', color: 'green' },
    { name: 'Gemüse', image: 'assets/gemüse.webp', color: 'purple' },
  ];
}