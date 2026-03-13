export interface Category {
  id: number;
  title: string;
  image: { uri: string };
}

export interface Banner {
  id: string;
  image: { uri: string };
}

export interface Promotion {
  id: number;
  image: { uri: string };
  name: string;
  price: string;
  oldPrice?: string;
  time: string;
  delivery: string;
}

export interface CouponRestaurantData {
  id: number;
  name: string;
  image: { uri: string };
}

export const CATEGORIES: Category[] = [
  { id: 1, title: 'Restaurantes', image: { uri: 'https://cdn-icons-png.flaticon.com/512/1996/1996055.png' } },
  { id: 2, title: 'Mercados', image: { uri: 'https://cdn-icons-png.flaticon.com/512/3028/3028531.png' } },
  { id: 3, title: 'Clube Ifood', image: { uri: 'https://static.ifood-static.com.br/image/upload/t_high/ifood-club/hotsite/v2/club-footer.png' } },
  { id: 4, title: 'Farmácia', image: { uri: 'https://cdn-icons-png.flaticon.com/512/4320/4320323.png' } },
  { id: 5, title: 'Pet Shops', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Cd_T8LcselvCiSFXuSlRm3cQgmxNiwuG8w&s' } },
  { id: 6, title: 'Express', image: { uri: 'https://cdn-icons-png.flaticon.com/512/477/477532.png' } },
  { id: 7, title: 'Bebidas', image: { uri: 'https://cdn-icons-png.flaticon.com/512/1308/1308307.png' } },
  { id: 8, title: 'Shopping', image: { uri: 'https://cdn-icons-png.flaticon.com/512/79/79557.png' } }
];

export const BANNERS: Banner[] = [
  { id: '1', image: { uri: 'https://canada1.discourse-cdn.com/ifood/original/3X/8/c/8c681ced49fb1ef3180aa108d49aaf3f0627ff6b.png' }},
  { id: '2', image: { uri: 'https://espacodasempadas.com.br/wp-content/uploads/2025/02/SITE_EE_-_BANNER_IFOOD.png'}}, 
  { id: '3', image: { uri: 'https://images.tcdn.com.br/img/editor/up/1118683/banner_burguer_ifood.png' }}
];

export const PROMOTIONS: Promotion[] = [
  { id: 1, name: '50 unidades de salgad...', price: 'R$ 12,99', oldPrice: 'R$ 39,99', time: '42-52 min', delivery: 'Free', image: {uri:'https://i.ytimg.com/vi/3mDuDvbMrzQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCM1ghP-0rx7sC2gwjY9lc0JjH4sg'} },
  { id: 2, name: 'X Burger', price: 'R$ 4,99', oldPrice: 'R$ 20,99', time: '41-51 min', delivery: 'Free', image: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUNanh6fz5HJ7TeAz98VhLr2HjsMI0pqbBg&s'} },
  { id: 3, name: '5 Pães de Queijo', price: 'R$ 4,99', oldPrice: 'R$ 15,99', time: '41-51 min', delivery: 'Free', image: {uri:'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg'} },
];

export const COUPON_LIST: CouponRestaurantData[] = [
  { id: 1, name: "Habib's", image: { uri: 'https://upload.wikimedia.org/wikipedia/pt/b/b1/Novo-logo.png' } },
  { id: 2, name: "McDonald's", image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5vobdKAFbYdrQWVWrr_hDQvDSJqgcMePRw&s' } },
  { id: 3, name: "Subway", image: { uri: 'https://logo.com/image-cdn/images/kts928pd/production/d589d16513edeb3ad05ea454373e133073880802-500x281.png?w=1920&q=72&fm=webp' } },
  { id: 4, name: "China in Box", image: { uri: 'https://static.ifood-static.com.br/image/upload/t_high/logosgde/f6abd964-2476-4adf-874a-f9f42f20f6c4/202510151141_ICmk_c.png' } },
];