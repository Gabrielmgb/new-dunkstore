export const products = [
  {
    id: 1,
    name: "Nike Dunk Low Retro White/Black",
    rating: 4.8,
    reviews: 127,
    price: 899.99,
    originalPrice: 1199.99,
    image: "/placeholder.svg?height=400&width=400",
    tag: "PROMOÇÃO",
    category: "Unissex",
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: ["Branco", "Preto"],
  },
  {
    id: 2,
    name: "Nike Dunk High Vintage Navy",
    rating: 4.9,
    reviews: 89,
    price: 749.99,
    originalPrice: 999.99,
    image: "/placeholder.svg?height=400&width=400",
    tag: "LANÇAMENTO",
    category: "Masculino",
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["Azul", "Branco"],
  },
  {
    id: 3,
    name: "Nike Dunk SB Street Pink",
    rating: 4.7,
    reviews: 67,
    price: 1099.99,
    image: "/placeholder.svg?height=400&width=400",
    tag: "EXCLUSIVO",
    category: "Feminino",
    sizes: ["35", "36", "37", "38", "39"],
    colors: ["Rosa", "Branco"],
  },
  {
    id: 4,
    name: "Nike Dunk Low Championship Red",
    rating: 4.8,
    reviews: 95,
    price: 999.99,
    image: "/placeholder.svg?height=400&width=400",
    tag: "LIMITADO",
    category: "Masculino",
    sizes: ["38", "40", "41", "42", "43", "44"],
    colors: ["Vermelho", "Branco"],
  },
  {
    id: 5,
    name: "Nike Dunk High Pro SB",
    rating: 4.9,
    reviews: 150,
    price: 1299.99,
    image: "/placeholder.svg?height=400&width=400",
    tag: "OFERTA",
    category: "Unissex",
    sizes: ["39", "40", "41", "42"],
    colors: ["Preto"],
  },
  {
    id: 6,
    name: "Nike Dunk Low Coast",
    rating: 4.6,
    reviews: 78,
    price: 849.99,
    originalPrice: 1099.99,
    image: "/placeholder.svg?height=400&width=400",
    tag: "PROMOÇÃO",
    category: "Feminino",
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["Azul", "Branco"],
  },
];

export const favoriteProducts = [products[2], products[1], products[0]];

export const cartItems = [
  { ...products[0], quantity: 2, size: "42" },
  { ...products[2], quantity: 1, size: "38" },
  { ...products[4], quantity: 1, size: "41" },
];
