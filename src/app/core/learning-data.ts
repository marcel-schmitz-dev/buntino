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
      
      {
        id: 2,
        title: 'Farben unterscheiden',
        description: 'Entdecke weitere Farben.',
        questions: [
          {
            id: 'color-grass',
            objectName: 'Gras',
            spokenQuestion: 'Welche Farbe hat das Gras?',
            emoji: '🌱',
            options: [
              { id: 'green', label: 'Grün', color: '#48BB78' },
              { id: 'blue', label: 'Blau', color: '#4299E1' },
            ],
            answerId: 'green',
          },
          {
            id: 'color-sun',
            objectName: 'Sonne',
            spokenQuestion: 'Welche Farbe hat die Sonne?',
            emoji: '☀️',
            options: [
              { id: 'yellow', label: 'Gelb', color: '#F6D64A' },
              { id: 'red', label: 'Rot', color: '#F04452' },
            ],
            answerId: 'yellow',
          },
          {
            id: 'color-cloud',
            objectName: 'Wolke',
            spokenQuestion: 'Welche Farbe hat eine weiße Wolke?',
            emoji: '☁️',
            options: [
              { id: 'white', label: 'Weiß', color: '#FFFFFF' },
              { id: 'purple', label: 'Lila', color: '#9F7AEA' },
            ],
            answerId: 'white',
          },
        ],
      },
      {
        id: 3,
        title: 'Farben im Alltag',
        description: 'Finde die Farben in deiner Welt.',
        questions: [
          {
            id: 'color-strawberry',
            objectName: 'Erdbeere',
            spokenQuestion: 'Welche Farbe hat eine reife Erdbeere?',
            emoji: '🍓',
            options: [
              { id: 'red', label: 'Rot', color: '#F04452' },
              { id: 'green', label: 'Grün', color: '#48BB78' },
            ],
            answerId: 'red',
          },
          {
            id: 'color-ocean',
            objectName: 'Meer',
            spokenQuestion: 'Welche Farbe hat das Meer oft auf Bildern?',
            emoji: '🌊',
            options: [
              { id: 'blue', label: 'Blau', color: '#4299E1' },
              { id: 'yellow', label: 'Gelb', color: '#F6D64A' },
            ],
            answerId: 'blue',
          },
          {
            id: 'color-orange',
            objectName: 'Orange',
            spokenQuestion: 'Welche Farbe hat eine Orange?',
            emoji: '🍊',
            options: [
              { id: 'orange', label: 'Orange', color: '#ED8936' },
              { id: 'blue', label: 'Blau', color: '#4299E1' },
            ],
            answerId: 'orange',
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
      
      {
        id: 2,
        title: 'Obst erkennen',
        description: 'Finde noch mehr leckere Früchte.',
        questions: [
          {
            id: 'fruit-orange',
            objectName: 'Orange',
            spokenQuestion: 'Wo ist die Orange?',
            emoji: '🍊',
            options: [
              { id: 'orange', label: 'Orange', emoji: '🍊' },
              { id: 'apple', label: 'Apfel', emoji: '🍎' },
            ],
            answerId: 'orange',
          },
          {
            id: 'fruit-grapes',
            objectName: 'Trauben',
            spokenQuestion: 'Wo sind die Trauben?',
            emoji: '🍇',
            options: [
              { id: 'grapes', label: 'Trauben', emoji: '🍇' },
              { id: 'banana', label: 'Banane', emoji: '🍌' },
            ],
            answerId: 'grapes',
          },
          {
            id: 'fruit-pear',
            objectName: 'Birne',
            spokenQuestion: 'Wo ist die Birne?',
            emoji: '🍐',
            options: [
              { id: 'pear', label: 'Birne', emoji: '🍐' },
              { id: 'strawberry', label: 'Erdbeere', emoji: '🍓' },
            ],
            answerId: 'pear',
          },
        ],
      },
      {
        id: 3,
        title: 'Obst-Experte',
        description: 'Zeige, was du schon alles kennst.',
        questions: [
          {
            id: 'fruit-watermelon',
            objectName: 'Wassermelone',
            spokenQuestion: 'Wo ist die Wassermelone?',
            emoji: '🍉',
            options: [
              { id: 'watermelon', label: 'Wassermelone', emoji: '🍉' },
              { id: 'orange', label: 'Orange', emoji: '🍊' },
            ],
            answerId: 'watermelon',
          },
          {
            id: 'fruit-cherries',
            objectName: 'Kirschen',
            spokenQuestion: 'Wo sind die Kirschen?',
            emoji: '🍒',
            options: [
              { id: 'cherries', label: 'Kirschen', emoji: '🍒' },
              { id: 'pear', label: 'Birne', emoji: '🍐' },
            ],
            answerId: 'cherries',
          },
          {
            id: 'fruit-pineapple',
            objectName: 'Ananas',
            spokenQuestion: 'Wo ist die Ananas?',
            emoji: '🍍',
            options: [
              { id: 'pineapple', label: 'Ananas', emoji: '🍍' },
              { id: 'grapes', label: 'Trauben', emoji: '🍇' },
            ],
            answerId: 'pineapple',
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
      
      {
        id: 2,
        title: 'Gemüse erkennen',
        description: 'Entdecke weitere Gemüsesorten.',
        questions: [
          {
            id: 'vegetable-broccoli',
            objectName: 'Brokkoli',
            spokenQuestion: 'Wo ist der Brokkoli?',
            emoji: '🥦',
            options: [
              { id: 'broccoli', label: 'Brokkoli', emoji: '🥦' },
              { id: 'carrot', label: 'Karotte', emoji: '🥕' },
            ],
            answerId: 'broccoli',
          },
          {
            id: 'vegetable-corn',
            objectName: 'Mais',
            spokenQuestion: 'Wo ist der Mais?',
            emoji: '🌽',
            options: [
              { id: 'corn', label: 'Mais', emoji: '🌽' },
              { id: 'cucumber', label: 'Gurke', emoji: '🥒' },
            ],
            answerId: 'corn',
          },
          {
            id: 'vegetable-pepper',
            objectName: 'Paprika',
            spokenQuestion: 'Wo ist die Paprika?',
            emoji: '🫑',
            options: [
              { id: 'pepper', label: 'Paprika', emoji: '🫑' },
              { id: 'tomato', label: 'Tomate', emoji: '🍅' },
            ],
            answerId: 'pepper',
          },
        ],
      },
      {
        id: 3,
        title: 'Gemüse-Experte',
        description: 'Zeige, was du schon alles kennst.',
        questions: [
          {
            id: 'vegetable-potato',
            objectName: 'Kartoffel',
            spokenQuestion: 'Wo ist die Kartoffel?',
            emoji: '🥔',
            options: [
              { id: 'potato', label: 'Kartoffel', emoji: '🥔' },
              { id: 'broccoli', label: 'Brokkoli', emoji: '🥦' },
            ],
            answerId: 'potato',
          },
          {
            id: 'vegetable-onion',
            objectName: 'Zwiebel',
            spokenQuestion: 'Wo ist die Zwiebel?',
            emoji: '🧅',
            options: [
              { id: 'onion', label: 'Zwiebel', emoji: '🧅' },
              { id: 'pepper', label: 'Paprika', emoji: '🫑' },
            ],
            answerId: 'onion',
          },
          {
            id: 'vegetable-mushroom',
            objectName: 'Pilz',
            spokenQuestion: 'Wo ist der Pilz?',
            emoji: '🍄',
            options: [
              { id: 'mushroom', label: 'Pilz', emoji: '🍄' },
              { id: 'corn', label: 'Mais', emoji: '🌽' },
            ],
            answerId: 'mushroom',
          },
        ],
      },
    ],
  },
];
