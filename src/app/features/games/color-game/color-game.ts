
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [],
  templateUrl: './color-game.html',
  styleUrl: './color-game.scss',
})
export class ColorGame {
  readonly back = output<void>();

  readonly questions = [
    {
      name: 'Rot',
      emoji: '🍎',
      options: [
        { name: 'Rot', color: '#ff5d5d' },
        { name: 'Blau', color: '#4da9f7' },
      ],
      answer: 'Rot',
    },
    {
      name: 'Gelb',
      emoji: '🍌',
      options: [
        { name: 'Grün', color: '#54cdb0' },
        { name: 'Gelb', color: '#ffca55' },
      ],
      answer: 'Gelb',
    },
    {
      name: 'Blau',
      emoji: '🦋',
      options: [
        { name: 'Blau', color: '#4da9f7' },
        { name: 'Rot', color: '#ff5d5d' },
      ],
      answer: 'Blau',
    },
  ];

  questionIndex = 0;
  feedback = '';
  finished = false;

  get question() {
    return this.questions[this.questionIndex];
  }

  choose(color: string): void {
    if (this.finished || this.feedback) return;

    if (color === this.question.answer) {
      this.feedback = 'Super gemacht! ⭐';
    } else {
      this.feedback = 'Versuch es noch einmal! 😊';
    }
  }

  next(): void {
    if (!this.feedback) return;

    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
      this.feedback = '';
    } else {
      this.finished = true;
    }
  }

  restart(): void {
    this.questionIndex = 0;
    this.feedback = '';
    this.finished = false;
  }
}

