export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Cricket Bat",
    category: "Cricket",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    name: "Professional Football",
    category: "Football",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    name: "Badminton Racket",
    category: "Badminton",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    name: "Running Shoes",
    category: "Running",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    name: "Gym Dumbbells",
    category: "Gym Equipment",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    name: "Sports Jersey",
    category: "Sports Clothing",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    name: "Cricket Ball",
    category: "Cricket",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b4f8b0c8?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 8,
    name: "Sports Water Bottle",
    category: "Sports Accessories",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
  },
];