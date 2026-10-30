import { LearningCategory } from '../../shared/models/learning-content';

export const FRUITS_CATEGORY: LearningCategory = {
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
          image: 'assets/farben/apfel.webp',
          options: [
            { id: 'apple', label: 'Apfel', image: 'assets/farben/apfel.webp' },
            { id: 'banana', label: 'Banane', image: 'assets/farben/banane.webp' },
          ],
          answerId: 'apple',
        },
        {
          id: 'fruit-banana',
          objectName: 'Banane',
          spokenQuestion: 'Wo ist die Banane?',
          image: 'assets/farben/banane.webp',
          options: [
            { id: 'orange', label: 'Orange', image: 'assets/farben/orange.webp' },
            { id: 'banana', label: 'Banane', image: 'assets/farben/banane.webp' },
          ],
          answerId: 'banana',
        },
        {
          id: 'fruit-strawberry',
          objectName: 'Erdbeere',
          spokenQuestion: 'Wo ist die Erdbeere?',
          image: 'assets/farben/erdbeere.webp',
          options: [
            { id: 'strawberry', label: 'Erdbeere', image: 'assets/farben/erdbeere.webp' },
            { id: 'grapes', label: 'Trauben', image: 'assets/obst/trauben.webp' },
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
          image: 'assets/farben/orange.webp',
          options: [
            { id: 'orange', label: 'Orange', image: 'assets/farebn/orange.webp' },
            { id: 'apple', label: 'Apfel', image: 'assets/farben/apfel.webp' },
          ],
          answerId: 'orange',
        },
        {
          id: 'fruit-grapes',
          objectName: 'Trauben',
          spokenQuestion: 'Wo sind die Trauben?',
          image: 'assets/obst/trauben.webp',
          options: [
            { id: 'grapes', label: 'Trauben', image: 'assets/obst/trauben.webp' },
            { id: 'banana', label: 'Banane', image: 'assets/farben/banane.webp' },
          ],
          answerId: 'grapes',
        },
        {
          id: 'fruit-pear',
          objectName: 'Birne',
          spokenQuestion: 'Wo ist die Birne?',
          image: 'assets/obst/birne.webp',
          options: [
            { id: 'pear', label: 'Birne', image: 'assets/obst/birne.webp' },
            { id: 'strawberry', label: 'Erdbeere', image: 'assets/farben/erdbeere.webp' },
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
          image: 'assets/obst/wassermelone.webp',
          options: [
            { id: 'watermelon', label: 'Wassermelone', image: 'assets/obst/wassermelone.webp' },
            { id: 'orange', label: 'Orange', image: 'assets/farben/orange.webp' },
          ],
          answerId: 'watermelon',
        },
        {
          id: 'fruit-cherries',
          objectName: 'Kirschen',
          spokenQuestion: 'Wo sind die Kirschen?',
          image: 'assets/obst/kirschen.webp',
          options: [
            { id: 'cherries', label: 'Kirschen', image: 'assets/obst/kirschen.webp' },
            { id: 'pear', label: 'Birne', image: 'assets/obst/birne.webp' },
          ],
          answerId: 'cherries',
        },
        {
          id: 'fruit-pineapple',
          objectName: 'Ananas',
          spokenQuestion: 'Wo ist die Ananas?',
          image: 'assets/obst/ananas.webp',
          options: [
            { id: 'pineapple', label: 'Ananas', image: 'assets/obst/ananas.webp' },
            { id: 'grapes', label: 'Trauben', image: 'assets/obst/trauben.webp' },
          ],
          answerId: 'pineapple',
        },
      ],
    },

  ],
};