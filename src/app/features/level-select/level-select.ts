import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-level-select',
  styleUrl: './level-select.scss',
  templateUrl: './level-select.html',
})
export class LevelSelect {
  readonly mode = input<'discover' | 'research'>('discover');
  readonly back = output<void>();
  readonly startLevel = output<number>();

  readonly levels = [
    { id: 1, title: 'Grundfarben', subtitle: 'Rot, Blau und Gelb', emoji: '🎨', stars: 3 },
    { id: 2, title: 'Naturfarben', subtitle: 'Farben in der Natur', emoji: '🍃', stars: 0 },
    { id: 3, title: 'Farben-Mix', subtitle: 'Welche Farbe fehlt?', emoji: '🎈', stars: 0 },
    { id: 4, title: 'Hell und dunkel', subtitle: 'Entdecke Schattierungen', emoji: '🦋', stars: 0 },
    { id: 5, title: 'Farben-Rad', subtitle: 'Finde die richtige Farbe', emoji: '🌈', stars: 0 },
    { id: 6, title: 'Regenbogen', subtitle: 'Alle Farben zusammen', emoji: '☁️', stars: 0 },
    { id: 7, title: 'Kreativ', subtitle: 'Male die Welt bunt', emoji: '🖌️', stars: 0 },
    { id: 8, title: 'Farben-Quiz', subtitle: 'Teste dein Wissen', emoji: '⭐', stars: 0 },
    { id: 9, title: 'Überraschung', subtitle: 'Eine bunte Belohnung', emoji: '🎁', stars: 0 },
  ];

  isUnlocked(id: number): boolean {
    return id === 1;
  }
}
