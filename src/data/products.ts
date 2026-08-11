export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Cricket Bat",
    category: "Cricket",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80",
    stock: 10,
  },

  {
    id: 2,
    name: "Professional Football",
    category: "Football",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    stock: 15,
  },

  {
    id: 3,
    name: "Badminton Racket",
    category: "Badminton",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    stock: 20,
  },

  {
    id: 4,
    name: "Running Shoes",
    category: "Running",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    stock: 25,
  },

  {
    id: 5,
    name: "Gym Dumbbells",
    category: "Gym",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    stock: 30,
  },

  {
    id: 6,
    name: "Sports Jersey",
    category: "Sports Clothing",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
    stock: 35,
  },

  {
    id: 7,
    name: "Basketball",
    category: "Basketball",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    stock: 25,
  },

  {
    id: 8,
    name: "Tennis Racket",
    category: "Tennis",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80",
    stock: 20,
  },
];