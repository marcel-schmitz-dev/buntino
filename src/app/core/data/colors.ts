import { LearningCategory } from '../../shared/models/learning-content';

export const COLORS_CATEGORY: LearningCategory = {
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
          image: 'assets/farben/apfel.webp',
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
          image: 'assets/farben/banane.webp',
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
          image: 'assets/farben/blaubeere.webp',
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
          image: 'assets/farben/gras.webp',
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
          image: 'assets/farben/sonne.webp',
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
          image: 'assets/farben/wolke.webp',
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
          image: 'assets/farben/erdbeere.webp',
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
          image: 'assets/farben/meer.webp',
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
          image: 'assets/farben/orange.webp',
          options: [
            { id: 'orange', label: 'Orange', color: '#ED8936' },
            { id: 'blue', label: 'Blau', color: '#4299E1' },
          ],
          answerId: 'orange',
        },
      ],
    },

  ],
};