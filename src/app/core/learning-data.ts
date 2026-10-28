import {LearningCategory,} from '../shared/models/learning-content';

export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: 'colors',
    title: 'Farben',
    description: 'Entdecke die bunte Welt!',
    emoji: '🎨',
    levels: [
      {
        id: 1,
        title: 'Farben entdecken',
        description: 'Erkenne die richtigen Farben.',
        questions: [
          {
            id: 'color-apple',
            objectName: 'Apfel',
            spokenQuestion: 'Welche Farbe hat der Apfel?',
            emoji: '🍎',
            options: [
              { id: 'red', label: 'Rot', color: '#F04452' },
              { id: 'blue', label: 'Blau', color: '#4299E1' },
            ],
            answerId: 'red',
          },
          {
            id: 'color-banana',
            objectName: 'Banane',
            spokenQuestion: 'Welche Farbe hat die Banane?',
            emoji: '🍌',
            options: [
              { id: 'green', label: 'Grün', color: '#48BB78' },
              { id: 'yellow', label: 'Gelb', color: '#F6D64A' },
            ],
            answerId: 'yellow',
          },
          {
            id: 'color-blueberry',
            objectName: 'Blaubeere',
            spokenQuestion: 'Welche Farbe hat die Blaubeere?',
            emoji: '🫐',
            options: [
              { id: 'blue', label: 'Blau', color: '#4299E1' },
              { id: 'red', label: 'Rot', color: '#F04452' },
            ],
            answerId: 'blue',
          },
        ],
      },
    ],
  },
  {
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
    ],
  },
  {
    id: 'fruits',
    title: 'Obst',
    description: 'Entdecke leckeres Obst!',
    emoji: '🍓',
    levels: [
      {
        id: 1,
        title: 'Obst entdecken',
        description: 'Finde das richtige Obst.',
        questions: [
          {
            id: 'fruit-apple',
            objectName: 'Apfel',
            spokenQuestion: 'Wo ist der Apfel?',
            emoji: '🍎',
            options: [
              { id: 'apple', label: 'Apfel', emoji: '🍎' },
              { id: 'banana', label: 'Banane', emoji: '🍌' },
            ],
            answerId: 'apple',
          },
          {
            id: 'fruit-banana',
            objectName: 'Banane',
            spokenQuestion: 'Wo ist die Banane?',
            emoji: '🍌',
            options: [
              { id: 'orange', label: 'Orange', emoji: '🍊' },
              { id: 'banana', label: 'Banane', emoji: '🍌' },
            ],
            answerId: 'banana',
          },
          {
            id: 'fruit-strawberry',
            objectName: 'Erdbeere',
            spokenQuestion: 'Wo ist die Erdbeere?',
            emoji: '🍓',
            options: [
              { id: 'strawberry', label: 'Erdbeere', emoji: '🍓' },
              { id: 'grapes', label: 'Trauben', emoji: '🍇' },
            ],
            answerId: 'strawberry',
          },
        ],
      },
    ],
  },
  {
    id: 'vegetables',
    title: 'Gemüse',
    description: 'Lerne Gemüse spielerisch kennen!',
    emoji: '🥕',
    levels: [
      {
        id: 1,
        title: 'Gemüse entdecken',
        description: 'Finde das richtige Gemüse.',
        questions: [
          {
            id: 'vegetable-carrot',
            objectName: 'Karotte',
            spokenQuestion: 'Wo ist die Karotte?',
            emoji: '🥕',
            options: [
              { id: 'carrot', label: 'Karotte', emoji: '🥕' },
              { id: 'broccoli', label: 'Brokkoli', emoji: '🥦' },
            ],
            answerId: 'carrot',
          },
          {
            id: 'vegetable-tomato',
            objectName: 'Tomate',
            spokenQuestion: 'Wo ist die Tomate?',
            emoji: '🍅',
            options: [
              { id: 'tomato', label: 'Tomate', emoji: '🍅' },
              { id: 'corn', label: 'Mais', emoji: '🌽' },
            ],
            answerId: 'tomato',
          },
          {
            id: 'vegetable-cucumber',
            objectName: 'Gurke',
            spokenQuestion: 'Wo ist die Gurke?',
            emoji: '🥒',
            options: [
              { id: 'cucumber', label: 'Gurke', emoji: '🥒' },
              { id: 'pepper', label: 'Paprika', emoji: '🫑' },
            ],
            answerId: 'cucumber',
          },
        ],
      },
    ],
  },
];
