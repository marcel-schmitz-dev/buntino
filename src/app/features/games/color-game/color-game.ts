import { Component, OnInit, output } from '@angular/core';
import { Speech } from '../../../core/speech';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [],
  templateUrl: './color-game.html',
  styleUrl: './color-game.scss',
})
export class ColorGame implements OnInit {
  readonly back = output<void>();

  speechEnabled = true;

  readonly questions = [
    {
      object: 'Apfel',
      emoji: '🍎',
      spokenQuestion: 'Welche Farbe hat der Apfel?',
      options: [
        { name: 'Rot', color: '#ff5d5d' },
        { name: 'Blau', color: '#4da9f7' },
      ],
      answer: 'Rot',
    },
    {
      object: 'Banane',
      emoji: '🍌',
      spokenQuestion: 'Welche Farbe hat die Banane?',
      options: [
        { name: 'Grün', color: '#54cdb0' },
        { name: 'Gelb', color: '#ffca55' },
      ],
      answer: 'Gelb',
    },
    {
  object: 'Blaubeere',
  spokenQuestion: 'Welche Farbe hat die Blaubeere?',
  emoji: '🫐',
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
  isCorrect = false;

  constructor(private speech: Speech) {}

  ngOnInit(): void {
    this.speechEnabled = this.speech.isEnabled();
    this.announceQuestion();
  }

  get question() {
    return this.questions[this.questionIndex];
  }

  toggleSpeech(): void {
    this.speechEnabled = !this.speechEnabled;
    this.speech.setEnabled(this.speechEnabled);

    if (this.speechEnabled) {
      this.announceQuestion();
    }
  }

  announceQuestion(): void {
    this.speech.speak(this.question.spokenQuestion);
  }

  
choose(color: string): void {
  if (this.finished || this.isCorrect) {
    return;
  }

  if (color === this.question.answer) {
    this.isCorrect = true;
    this.feedback = 'Super gemacht! ⭐';

    this.speech.speak(
      `Super gemacht! Das ist ${this.question.answer}!`
    );
  } else {
    this.isCorrect = false;
    this.feedback = 'Noch nicht ganz. Versuche es noch einmal! 😊';

    this.speech.speak(
      'Noch nicht ganz. Versuche es noch einmal!'
    );
  }
}


  next(): void {
    if (!this.feedback) {
      return;
    }

    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
      this.feedback = '';
      this.isCorrect = false;
      this.announceQuestion();
    } else {
      this.finished = true;
      this.speech.speak(
        'Du hast alle drei Fragen gespielt. Das hast du toll gemacht!'
      );
    }
  }

  restart(): void {
    this.questionIndex = 0;
    this.feedback = '';
    this.finished = false;
    this.isCorrect = false;
    this.announceQuestion();
  }
}