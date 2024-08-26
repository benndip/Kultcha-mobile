export const cultureItems = [
  {
    id: 0,
    title: 'Bakweri',
    mainBg: require('../assets/images/cult1.png'),
    items: [
      {
        videoUrl: 'https://example.com/video1.mp4',
        audioUrl: 'https://example.com/audio1.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model1.glb',
        title: 'AI in Cooking',
        description:
          "A beginner's guide to AI's influence in the culinary world.",
        id: 0,
      },
      {
        videoUrl: 'https://example.com/video2.mp4',
        audioUrl: 'https://example.com/audio2.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model2.glb',
        title: 'Meals with AI',
        description: 'Exploring how AI can improve your meal planning.',
        id: 1,
      },
      {
        videoUrl: 'https://example.com/video3.mp4',
        audioUrl: 'https://example.com/audio3.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model3.glb',
        title: 'AI for Nutrition',
        description: 'Discover how AI helps create healthier meal options.',
        id: 2,
      },
      {
        videoUrl: 'https://example.com/video10.mp4',
        audioUrl: 'https://example.com/audio10.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model10.glb',
        title: 'AI in Music Production',
        description: 'Discover how AI is revolutionizing music creation.',
        id: 3,
      },
      {
        videoUrl: 'https://example.com/video11.mp4',
        audioUrl: 'https://example.com/audio11.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model11.glb',
        title: 'AI Composers',
        description: "Exploring AI's role in composing original music.",
        id: 4,
      },
    ],
  },
  {
    id: 1,
    title: 'Bangwa',
    mainBg: require('../assets/images/cult8.png'),
    items: [
      {
        videoUrl: 'https://example.com/video4.mp4',
        audioUrl: 'https://example.com/audio4.mp3',
        bgImage: require('../assets/images/cult2.png'),
        modelUrl: 'https://example.com/model4.glb',
        title: 'AI Travel Guide',
        description:
          'AI-powered travel guides to enhance your travel experience.',
        id: 0,
      },
      {
        videoUrl: 'https://example.com/video5.mp4',
        audioUrl: 'https://example.com/audio5.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model5.glb',
        title: 'AI in Cities',
        description:
          'Understanding the role of AI in modern urban development.',
        id: 1,
      },
    ],
  },
  {
    id: 2,
    title: 'Nkambe',
    mainBg: require('../assets/images/cult6.png'),
    items: [
      {
        videoUrl: 'https://example.com/video6.mp4',
        audioUrl: 'https://example.com/audio6.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model6.glb',
        title: 'AI for Historical Sites',
        description: 'How AI is preserving and enhancing historical sites.',
        id: 0,
      },
      {
        videoUrl: 'https://example.com/video7.mp4',
        audioUrl: 'https://example.com/audio7.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model7.glb',
        title: 'AI Tours',
        description:
          "AI-based virtual tours of the world's most iconic landmarks.",
        id: 1,
      },
    ],
  },
  {
    id: 3,
    title: 'Bassa',
    mainBg: require('../assets/images/cult4.png'),
    items: [
      {
        videoUrl: 'https://example.com/video8.mp4',
        audioUrl: 'https://example.com/audio8.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model8.glb',
        title: 'AI Fashion Trends',
        description: 'Exploring the impact of AI in the fashion industry.',
        id: 0,
      },
      {
        videoUrl: 'https://example.com/video9.mp4',
        audioUrl: 'https://example.com/audio9.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model9.glb',
        title: 'AI-Driven Clothing Design',
        description: 'Learn how AI is used to create custom clothing designs.',
        id: 1,
      },
    ],
  },
  {
    id: 4,
    title: 'Bamoum',
    mainBg: require('../assets/images/cult5.png'),
    items: [
      {
        videoUrl: 'https://example.com/video10.mp4',
        audioUrl: 'https://example.com/audio10.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model10.glb',
        title: 'AI in Music Production',
        description: 'Discover how AI is revolutionizing music creation.',
        id: 0,
      },
      {
        videoUrl: 'https://example.com/video11.mp4',
        audioUrl: 'https://example.com/audio11.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model11.glb',
        title: 'AI Composers',
        description: "Exploring AI's role in composing original music.",
        id: 1,
      },
    ],
  },
  {
    id: 5,
    title: 'Nordiste',
    mainBg: require('../assets/images/cult5.png'),
    items: [
      {
        videoUrl: 'https://example.com/video10.mp4',
        audioUrl: 'https://example.com/audio10.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model10.glb',
        title: 'AI in Music Production',
        description: 'Discover how AI is revolutionizing music creation.',
        id: 0,
      },
      {
        videoUrl: 'https://example.com/video11.mp4',
        audioUrl: 'https://example.com/audio11.mp3',
        bgImage: require('../assets/images/cult1.png'),
        modelUrl: 'https://example.com/model11.glb',
        title: 'AI Composers',
        description: "Exploring AI's role in composing original music.",
        id: 1,
      },
    ],
  },
];

const arr = cultureItems.map((item) => {
  return item.items;
});

export const cultures = cultureItems.map((item) => item.title);

export const allItems = arr.flat();
