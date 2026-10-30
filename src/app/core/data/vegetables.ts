import { LearningCategory } from '../../shared/models/learning-content';

export const VEGETABLES_CATEGORY: LearningCategory = {
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
};