
import { Component, OnInit, output } from '@angular/core';
import { Speech } from '../../../core/speech';
import { Progress } from '../../../core/progress';

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
  questionIndex = 0;
  feedback = '';
  isCorrect = false;
  finished = false;

  correctAnswers = 0;
  starsEarned = 0;

  readonly questions = [
    {
      object: 'Apfel',
      spokenQuestion: 'Welche Farbe hat der Apfel?',
      emoji: '🍎',
      options: [
        { name: 'Rot', color: '#ff5d5d' },
        { name: 'Blau', color: '#4da9f7' },
      ],
      answer: 'Rot',
    },
    {
      object: 'Banane',
      spokenQuestion: 'Welche Farbe hat die Banane?',
      emoji: '🍌',
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

  constructor(
    private speech: Speech,
    private progress: Progress
  ) {}

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
      if (this.finished) {
        this.speech.speak(
          'Du hast alle drei Fragen gespielt. Das hast du toll gemacht!'
        );
      } else {
        this.announceQuestion();
      }
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
      this.correctAnswers++;

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
    if (!this.isCorrect || this.finished) {
      return;
    }

    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
      this.feedback = '';
      this.isCorrect = false;

      this.announceQuestion();
    } else {
      this.finished = true;
      this.starsEarned = this.correctAnswers;

      this.progress.saveLevel(1, this.starsEarned);

      this.speech.speak(
        `Du hast alle drei Fragen gespielt und ${this.starsEarned} Sterne gesammelt. Das hast du toll gemacht!`
      );
    }
  }

  restart(): void {
    this.questionIndex = 0;
    this.feedback = '';
    this.isCorrect = false;
    this.finished = false;
    this.correctAnswers = 0;
    this.starsEarned = 0;

    this.announceQuestion();
  }
}
