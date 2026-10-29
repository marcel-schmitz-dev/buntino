import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Speech {
  private enabled = true;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    this.initVoices();
  }

  private initVoices(): void {
    if ('speechSynthesis' in window) {
      this.loadVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
    }
  }

  private loadVoices(): void {
    if ('speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices();
    }
  }

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
    message.rate = 0.9;
    message.pitch = 1.1;

    if (this.voices.length === 0) {
      this.loadVoices();
    }

    const preferredVoice = this.voices.find(voice => 
      voice.lang === 'de-DE' && (
        voice.name.includes('Siri') || 
        voice.name.includes('Anna') || 
        voice.name.includes('Katja') || 
        voice.name.includes('Vicki') ||
        voice.name.includes('Enhanced') ||
        voice.name.includes('Natural')
      )
    );

    if (preferredVoice) {
      message.voice = preferredVoice;
    }

    window.speechSynthesis.speak(message);
  }

  stop(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}