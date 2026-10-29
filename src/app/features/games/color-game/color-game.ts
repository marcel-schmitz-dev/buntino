
import { Component, OnInit, input, output } from '@angular/core';
import { Speech } from '../../../core/speech';
import { Progress } from '../../../core/progress';
import { LEARNING_CATEGORIES } from '../../../core/learning-data';
import { LearningCategoryId, LearningQuestion } from '../../../shared/models/learning-content';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [],
  templateUrl: './color-game.html',
  styleUrl: './color-game.scss',
})
export class ColorGame implements OnInit {
  readonly back = output<void>();
  readonly categoryId = input<LearningCategoryId>('colors');

  speechEnabled = true;
  questionIndex = 0;
  feedback = '';
  isCorrect = false;
  finished = false;
  correctAnswers = 0;
  starsEarned = 0;

  constructor(
    private speech: Speech,
    private progress: Progress
  ) {}

  ngOnInit(): void {
    this.speechEnabled = this.speech.isEnabled();
    this.announceQuestion();
  }

  get category() {
    return LEARNING_CATEGORIES.find(
      (item) => item.id === this.categoryId()
    ) ?? LEARNING_CATEGORIES[0];
  }

  get questions(): LearningQuestion[] {
    return this.category.levels[0]?.questions ?? [];
  }

  get question(): LearningQuestion {
    return this.questions[this.questionIndex];
  }

  toggleSpeech(): void {
    this.speechEnabled = !this.speechEnabled;
    this.speech.setEnabled(this.speechEnabled);

    if (this.speechEnabled) {
      if (this.finished) {
        this.speech.speak(
          `Du hast alle ${this.questions.length} Fragen gespielt. Das hast du toll gemacht!`
        );
      } else {
        this.announceQuestion();
      }
    } else {
      this.speech.stop();
    }
  }

  announceQuestion(): void {
    const question = this.question;

    if (question) {
      this.speech.speak(question.spokenQuestion);
    }
  }

  choose(optionId: string): void {
    if (this.finished || this.isCorrect) {
      return;
    }

    if (optionId === this.question.answerId) {
      this.isCorrect = true;
      this.feedback = 'Super gemacht! ⭐';
      this.correctAnswers++;

      const answer = this.question.options.find(
        (option) => option.id === this.question.answerId
      );

      this.speech.speak(
        `Super gemacht! ${answer?.label ?? ''}!`
      );
    } else {
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

      this.progress.saveLevel(
        this.category.levels[0].id,
        this.starsEarned,
        this.category.id
      );

      this.speech.speak(
        `Du hast alle ${this.questions.length} Fragen gespielt und ${this.starsEarned} Sterne gesammelt. Das hast du toll gemacht!`
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
