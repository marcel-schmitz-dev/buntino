import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Speech {
  private enabled = true;

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;

    if (!enabled) {
      this.stop();
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  speak(text: string): void {
    if (!this.enabled || !('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(text);
    message.lang = 'de-DE';
    message.rate = 0.85;
    message.pitch = 1.1;

    window.speechSynthesis.speak(message);
  }

  stop(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

