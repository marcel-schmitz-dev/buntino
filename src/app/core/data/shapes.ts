import { LearningCategory } from '../../shared/models/learning-content';

export const SHAPES_CATEGORY: LearningCategory = {
  id: 'shapes',
  title: 'Formen',
  description: 'Lerne Formen kennen!',
  emoji: '🔷',
  levels: [
    {
      id: 1,
      title: 'Formen entdecken',
      description: 'Finde die richtige Form.',
      questions: [
        {
          id: 'shape-circle',
          objectName: 'Kreis',
          spokenQuestion: 'Welche Form ist ein Kreis?',
          emoji: '⚪',
          options: [
            { id: 'circle', label: 'Kreis', emoji: '⚪' },
            { id: 'square', label: 'Quadrat', emoji: '🟦' },
          ],
          answerId: 'circle',
        },
        {
          id: 'shape-square',
          objectName: 'Quadrat',
          spokenQuestion: 'Welche Form ist ein Quadrat?',
          emoji: '🟦',
          options: [
            { id: 'triangle', label: 'Dreieck', emoji: '🔺' },
            { id: 'square', label: 'Quadrat', emoji: '🟦' },
          ],
          answerId: 'square',
        },
        {
          id: 'shape-triangle',
          objectName: 'Dreieck',
          spokenQuestion: 'Welche Form ist ein Dreieck?',
          emoji: '🔺',
          options: [
            { id: 'circle', label: 'Kreis', emoji: '⚪' },
            { id: 'triangle', label: 'Dreieck', emoji: '🔺' },
          ],
          answerId: 'triangle',
        },
      ],
    },
    
    {
      id: 2,
      title: 'Formen unterscheiden',
      description: 'Erkenne die Formen wieder.',
      questions: [
        {
          id: 'shape-circle-2',
          objectName: 'Ball',
          spokenQuestion: 'Welche Form hat ein runder Ball?',
          emoji: '⚽',
          options: [
            { id: 'circle', label: 'Kreis', emoji: '⚪' },
            { id: 'triangle', label: 'Dreieck', emoji: '🔺' },
          ],
          answerId: 'circle',
        },
        {
          id: 'shape-window',
          objectName: 'Fenster',
          spokenQuestion: 'Welche Form hat dieses quadratische Fenster?',
          emoji: '🪟',
          options: [
            { id: 'square', label: 'Quadrat', emoji: '🟦' },
            { id: 'circle', label: 'Kreis', emoji: '⚪' },
          ],
          answerId: 'square',
        },
        {
          id: 'shape-pizza',
          objectName: 'Pizzastück',
          spokenQuestion: 'Welche Form hat ein dreieckiges Pizzastück?',
          emoji: '🍕',
          options: [
            { id: 'triangle', label: 'Dreieck', emoji: '🔺' },
            { id: 'square', label: 'Quadrat', emoji: '🟦' },
          ],
          answerId: 'triangle',
        },
      ],
    },
    {
      id: 3,
      title: 'Formen im Alltag',
      description: 'Entdecke Formen in deiner Umgebung.',
      questions: [
        {
          id: 'shape-clock',
          objectName: 'Runde Uhr',
          spokenQuestion: 'Welche Form hat eine runde Uhr?',
          emoji: '🕒',
          options: [
            { id: 'circle', label: 'Kreis', emoji: '⚪' },
            { id: 'square', label: 'Quadrat', emoji: '🟦' },
          ],
          answerId: 'circle',
        },
        {
          id: 'shape-sign',
          objectName: 'Dreieckiges Schild',
          spokenQuestion: 'Welche Form hat dieses dreieckige Schild?',
          emoji: '🚸',
          options: [
            { id: 'triangle', label: 'Dreieck', emoji: '🔺' },
            { id: 'circle', label: 'Kreis', emoji: '⚪' },
          ],
          answerId: 'triangle',
        },
        {
          id: 'shape-tile',
          objectName: 'Quadratische Fliese',
          spokenQuestion: 'Welche Form hat eine quadratische Fliese?',
          emoji: '🔲',
          options: [
            { id: 'square', label: 'Quadrat', emoji: '🟦' },
            { id: 'triangle', label: 'Dreieck', emoji: '🔺' },
          ],
          answerId: 'square',
        },
      ],
    },

  ],
};