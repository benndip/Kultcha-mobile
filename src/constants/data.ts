import { images } from "../assets/images";

export const categories = [
  {
    id: 1,
    title: 'Paintings',
  },
  {
    id: 2,
    title: 'Drawings',
  },
  {
    id: 3,
    title: 'Sculpture',
  },
  {
    id: 4,
    title: 'Ceramics',
  },
  {
    id: 5,
    title: 'Digital Art',
  },
  {
    id: 6,
    title: 'Textile Art',
  }
];

export const ceramics = [
  {
    id: 1,
    categoryId: 3,
    title: 'Ceramic Vase',
    description: 'A beautifully crafted ceramic vase, showcasing traditional African craftsmanship and design.',
    image: images.vas1,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Fatoumata Diarra',
      avatar: 'https://i.pravatar.cc/150?img=1'
    }
  },
  {
    id: 2,
    categoryId: 5,
    title: 'Ceramic Bowl',
    description: 'A sturdy ceramic bowl that highlights the intricate patterns and vibrant colors typical of African pottery.',
    image: images.vas2,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Kwame Nkrumah',
      avatar: 'https://i.pravatar.cc/150?img=2'
    }
  },
  {
    id: 3,
    categoryId: 2,
    title: 'Handcrafted Ceramic Pot',
    description: 'An exquisite handcrafted ceramic pot, reflecting the artistic skills passed down through generations.',
    image: images.vas3,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Amina Mohammed',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  },
  {
    id: 4,
    categoryId: 1,
    title: 'Ceramic Vase Duplicate',
    description: 'Another version of the ceramic vase, featuring unique design elements and artistic flair.',
    image: images.vas4,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Chinua Achebe',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  },
  {
    id: 5,
    categoryId: 6,
    title: 'Ceramic Bowl Duplicate',
    description: 'A duplicate ceramic bowl with a distinct pattern, showcasing the versatility of African pottery.',
    image: images.vas5,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Ngugi wa Thiong\'o',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  },
  {
    id: 6,
    categoryId: 4,
    title: 'Handcrafted Ceramic Pot Duplicate',
    description: 'A second handcrafted ceramic pot, emphasizing the timeless techniques of African artisans.',
    image: images.vas6,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Nana Asante',
      avatar: 'https://i.pravatar.cc/150?img=6'
    }
  },
  {
    id: 7,
    categoryId: 2,
    title: 'Ceramic Sculpture',
    description: 'A stunning ceramic sculpture that embodies the spirit and culture of African art.',
    image: images.vas7,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Wangari Maathai',
      avatar: 'https://i.pravatar.cc/150?img=7'
    }
  },
  {
    id: 8,
    categoryId: 5,
    title: 'Decorative Ceramic Plate',
    description: 'A decorative ceramic plate adorned with traditional African motifs, perfect for home decor.',
    image: images.vas8,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Fela Kuti',
      avatar: 'https://i.pravatar.cc/150?img=8'
    }
  },
  {
    id: 9,
    categoryId: 1,
    title: 'Africa: The Art of a Continent',
    description: 'A comprehensive artwork that reflects the diverse artistic heritage across the African continent.',
    image: images.vas9,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Bessie Head',
      avatar: 'https://i.pravatar.cc/150?img=9'
    }
  },
  {
    id: 10,
    categoryId: 3,
    title: 'African Art Home Decor',
    description: 'Unique African art pieces designed to enhance and complement your home decor.',
    image: images.vas10,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Lupita Nyong\'o',
      avatar: 'https://i.pravatar.cc/150?img=10'
    }
  },
  {
    id: 11,
    categoryId: 4,
    title: 'Beaded African Enamel Coffee Mug',
    description: 'An enamel coffee mug embellished with traditional African beadwork, combining functionality with art.',
    image: images.vas11,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Thandiwe Newton',
      avatar: 'https://i.pravatar.cc/150?img=11'
    }
  },
  {
    id: 12,
    categoryId: 2,
    title: 'Sacred Inca Valley Ceramic Vase',
    description: 'A ceramic vase inspired by the sacred valleys of the Inca, incorporating African cultural motifs.',
    image: images.vas12,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Kofi Annan',
      avatar: 'https://i.pravatar.cc/150?img=12'
    }
  },
  {
    id: 13,
    categoryId: 6,
    title: 'Cerâmica Marajoara',
    description: 'A piece of Cerâmica Marajoara, showcasing the intricate designs and patterns characteristic of this African art form.',
    image: images.vas13,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Mariama Bâ',
      avatar: 'https://i.pravatar.cc/150?img=13'
    }
  },
  {
    id: 14,
    categoryId: 1,
    title: 'Ceramic Design Art',
    description: 'A beautifully designed ceramic artwork that captures the essence of African artistic traditions.',
    image: images.vas14,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Chimamanda Ngozi Adichie',
      avatar: 'https://i.pravatar.cc/150?img=14'
    }
  },
  {
    id: 15,
    categoryId: 3,
    title: 'Ceramic Artwork',
    description: 'An elegant piece of ceramic artwork, reflecting the rich cultural narratives of Africa.',
    image: images.vas15,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Idris Elba',
      avatar: 'https://i.pravatar.cc/150?img=15'
    }
  },
  {
    id: 16,
    categoryId: 2,
    title: 'Djembe Learning Ceramic Art',
    description: 'A unique ceramic artwork inspired by the traditional djembe drums, symbolizing African musical heritage.',
    image: images.vas16,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Salif Keita',
      avatar: 'https://i.pravatar.cc/150?img=16'
    }
  },
  {
    id: 17,
    categoryId: 4,
    title: 'Moon-faced 3D Design Mug',
    description: 'A 3D design mug featuring a moon-faced motif, blending modern design with traditional African art.',
    image: images.vas17,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Miriam Makeba',
      avatar: 'https://i.pravatar.cc/150?img=17'
    }
  },
  {
    id: 18,
    categoryId: 5,
    title: 'NOVICA Home Decor',
    description: 'Home decor items from NOVICA, crafted by talented African artisans, perfect for adding a unique touch to your space.',
    image: images.drawing6,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Patrice Lumumba',
      avatar: 'https://i.pravatar.cc/150?img=18'
    }
  },
  {
    id: 19,
    categoryId: 1,
    title: 'Africa Heartwood Project Product',
    description: 'A product from the Africa Heartwood Project, supporting grassroots initiatives in West Africa.',
    image: images.vas19,
    threeDModal: require("../assets/3dModels/african_chokwe_mask.glb"),
    user: {
      name: 'Esi Edugyan',
      avatar: 'https://i.pravatar.cc/150?img=19'
    }
  },
]

export const digitalArts = [
  {
    id: 20,
    categoryId: 3,
    title: 'African Digital Artwork 1',
    description: 'A vibrant digital artwork that captures the dynamic spirit of African culture.',
    image: images.digitalArt1,
    threeDModal: require("../assets/3dModels/african_head_sculpture.glb"),
    user: {
      name: 'Yvonne Adhiambo Owuor',
      avatar: 'https://i.pravatar.cc/150?img=20'
    }
  },
  {
    id: 21,
    categoryId: 4,
    title: 'African Digital Artwork 2',
    description: 'An expressive digital art piece reflecting the rich traditions and modern influences of Africa.',
    image: images.digitalArt2,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Fatoumata Diarra',
      avatar: 'https://i.pravatar.cc/150?img=21'
    }
  },
  {
    id: 22,
    categoryId: 2,
    title: 'African Digital Artwork 3',
    description: 'A creative digital artwork showcasing the beauty and diversity of African landscapes.',
    image: images.digitalArt3,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Kwame Nkrumah',
      avatar: 'https://i.pravatar.cc/150?img=22'
    }
  },
  {
    id: 23,
    categoryId: 5,
    title: 'African Digital Artwork 4',
    description: 'A stunning digital art piece that highlights the cultural heritage of Africa.',
    image: images.digitalArt4,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Amina Mohammed',
      avatar: 'https://i.pravatar.cc/150?img=23'
    }
  },
  {
    id: 24,
    categoryId: 1,
    title: 'African Ceremonial Mask',
    description: 'A traditional African ceremonial mask used in various cultural rituals and celebrations.',
    image: images.digitalArt5,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Chinua Achebe',
      avatar: 'https://i.pravatar.cc/150?img=24'
    }
  },
  {
    id: 25,
    categoryId: 6,
    title: 'African Children Laughing',
    description: 'A joyful digital artwork capturing the innocence and happiness of African children.',
    image: images.digitalArt6,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Ngugi wa Thiong\'o',
      avatar: 'https://i.pravatar.cc/150?img=25'
    }
  },
  {
    id: 26,
    categoryId: 3,
    title: 'African Tribe Woman',
    description: 'A powerful digital artwork depicting a woman from an African tribe, representing strength and heritage.',
    image: images.digitalArt7,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Nana Asante',
      avatar: 'https://i.pravatar.cc/150?img=26'
    }
  },
  {
    id: 27,
    categoryId: 4,
    title: 'African Digital Artwork 8',
    description: 'A captivating digital artwork illustrating the vibrant life and culture of Africa.',
    image: images.digitalArt8,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Wangari Maathai',
      avatar: 'https://i.pravatar.cc/150?img=27'
    }
  },
  {
    id: 28,
    categoryId: 2,
    title: 'African Digital Artwork 9',
    description: 'An engaging digital art piece that reflects the dynamic energy of African communities.',
    image: images.digitalArt9,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Fela Kuti',
      avatar: 'https://i.pravatar.cc/150?img=28'
    }
  },
  {
    id: 29,
    categoryId: 5,
    title: 'African Digital Artwork 10',
    description: 'A beautifully designed digital artwork capturing the essence of African heritage.',
    image: images.digitalArt10,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Bessie Head',
      avatar: 'https://i.pravatar.cc/150?img=29'
    }
  },
  {
    id: 30,
    categoryId: 1,
    title: 'African Digital Artwork 11',
    description: 'A unique digital artwork that highlights the rich artistic traditions of Africa.',
    image: images.digitalArt11,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Lupita Nyong\'o',
      avatar: 'https://i.pravatar.cc/150?img=30'
    }
  },
  {
    id: 31,
    categoryId: 6,
    title: 'Dancers by Anne Boland',
    description: 'A vibrant digital artwork featuring dancers, celebrating the rhythm and movement of African dance.',
    image: images.digitalArt12,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Thandiwe Newton',
      avatar: 'https://i.pravatar.cc/150?img=31'
    }
  },
  {
    id: 32,
    categoryId: 3,
    title: 'African Digital Artwork 13',
    description: 'An expressive digital art piece that showcases the beauty of African landscapes and people.',
    image: images.digitalArt13,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Kofi Annan',
      avatar: 'https://i.pravatar.cc/150?img=32'
    }
  },
  {
    id: 33,
    categoryId: 4,
    title: 'African Digital Artwork 14',
    description: 'A dynamic digital artwork reflecting the lively spirit and culture of Africa.',
    image: images.digitalArt14,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Mariama Bâ',
      avatar: 'https://i.pravatar.cc/150?img=33'
    }
  },
  {
    id: 34,
    categoryId: 2,
    title: 'Father Won\'t Give Up by Humble Homage',
    description: 'A touching digital artwork titled "Father Won\'t Give Up", representing resilience and determination.',
    image: images.digitalArt15,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Chimamanda Ngozi Adichie',
      avatar: 'https://i.pravatar.cc/150?img=34'
    }
  },
  {
    id: 35,
    categoryId: 5,
    title: 'Joyful Brotherhood',
    description: 'A heartwarming digital artwork depicting a joyful brotherhood among African children.',
    image: images.digitalArt16,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Idris Elba',
      avatar: 'https://i.pravatar.cc/150?img=35'
    }
  },
]

export const drawings = [
  {
    id: 36,
    categoryId: 1,
    title: 'African Drawing 1',
    description: 'An intricate African drawing that captures the essence of traditional artistic styles. The artwork brings out the richness of cultural motifs, blending history and creativity. The detailed patterns reflect the artist’s deep connection to heritage. This piece invites viewers to explore the complexities of African tradition. Its intricate designs evoke a sense of timeless beauty.',
    image: images.drawing1,
    threeDModal: require("../assets/3dModels/white_photo_frame.glb"),
    user: {
      name: 'Salif Keita',
      avatar: 'https://i.pravatar.cc/150?img=36'
    }
  },
  {
    id: 37,
    categoryId: 3,
    title: 'African Drawing 2',
    description: 'A detailed African drawing showcasing cultural symbols and artistic expression. The artwork features bold lines and shapes that highlight the diversity of African aesthetics. Each element is carefully placed to tell a story of cultural significance. The vibrant colors enhance the emotional depth of the piece. It’s a tribute to the artistic heritage of the African continent.',
    image: images.drawing2,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Miriam Makeba',
      avatar: 'https://i.pravatar.cc/150?img=37'
    }
  },
  {
    id: 38,
    categoryId: 2,
    title: 'African Drawing 3',
    description: 'A captivating African drawing that reflects the beauty and diversity of African art. The piece integrates traditional motifs with contemporary styles, creating a unique visual language. The layers of textures and patterns add depth to the composition. This artwork serves as a bridge between past and present. It’s a celebration of the vibrant cultural heritage of Africa.',
    image: images.drawing3,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Patrice Lumumba',
      avatar: 'https://i.pravatar.cc/150?img=38'
    }
  },
  {
    id: 39,
    categoryId: 4,
    title: 'Celebration of Afro Beauty',
    description: 'A digital artwork celebrating Afro beauty, highlighting the elegance and grace of African women. The piece captures the strength and resilience inherent in African femininity. The artist uses soft hues and bold lines to convey a sense of pride and dignity. Each element is carefully crafted to emphasize cultural identity. This artwork is a tribute to the beauty of African womanhood.',
    image: images.drawing4,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Esi Edugyan',
      avatar: 'https://i.pravatar.cc/150?img=39'
    }
  },
  {
    id: 40,
    categoryId: 5,
    title: 'Minimalist African Abstract Art',
    description: 'A minimalist African abstract art piece with a vintage twist, evoking deep emotions. The artwork’s simplicity belies the complexity of its themes and interpretations. The artist’s use of color and form creates a powerful narrative. This piece invites viewers to find their own meaning within its abstract forms. It’s an exploration of the intersections between tradition and modernity.',
    image: images.drawing5,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Yvonne Adhiambo Owuor',
      avatar: 'https://i.pravatar.cc/150?img=40'
    }
  },
  {
    id: 41,
    categoryId: 6,
    title: 'African Lady on African Continent',
    description: 'A powerful artwork depicting an African lady standing proudly on the African continent, symbolizing strength and heritage. The figure’s stance exudes confidence, representing the resilience of African women. The continent beneath her feet emphasizes the deep connection to the land. This piece is a celebration of identity and empowerment. It’s a visual narrative of pride and cultural roots.',
    image: images.drawing6,
    threeDModal: require("../assets/3dModels/african_drum (1).glb"),
    user: {
      name: 'Fatoumata Diarra',
      avatar: 'https://i.pravatar.cc/150?img=41'
    }
  },
]
