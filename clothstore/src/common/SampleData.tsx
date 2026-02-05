export type ProductComment = {
  content: string;
  user: string;
  date: string;
};

export type ProductColor = {
  name: string; // tên hiển thị (White, Black, Red...)
  code: string; // mã màu (#fff, #000, rgb...)
};

export type Category =
  | "men"
  | "women"
  | "kids"
  | "casual"
  | "party"
  | "fitness";

export type Products = {
  id: number;
  name: string;
  colors: ProductColor[];
  size: string[];
  quantity: number;
  rating: number;
  category: Category;
  comment: ProductComment[];
  img: string[]; // nhiều ảnh
  price: number; // đơn vị: VND
  description: string;
};

export const products: Products[] = [
  {
    id: 1,
    name: "Basic White T-Shirt",
    category: "casual",
    colors: [
      { name: "White", code: "#ffffff" },
      { name: "Black", code: "#000000" },
    ],
    size: ["S", "M", "L", "XL"],
    quantity: 120,
    rating: 0,
    comment: [],
    img: ["/products/product1.png"],
    price: 199000,
    description: "Basic white T-shirt for everyday casual wear.",
  },

  {
    id: 2,
    name: "Oversize Hoodie",
    category: "men",
    colors: [{ name: "Black", code: "#000000" }],
    size: ["M", "L", "XL"],
    quantity: 75,
    rating: 0,
    comment: [],
    img: ["/products/img1.png"],
    price: 499000,
    description: "Street-style oversize hoodie for men.",
  },

  {
    id: 3,
    name: "Slim Fit Jeans",
    category: "men",
    colors: [{ name: "Blue", code: "#1d4ed8" }],
    size: ["28", "30", "32"],
    quantity: 60,
    rating: 0,
    comment: [],
    img: ["/products/product2.png"],
    price: 599000,
    description: "Slim fit jeans designed for men.",
  },

  {
    id: 4,
    name: "Running Sneakers",
    category: "kids",
    colors: [{ name: "Pink", code: "#ec4899" }],
    size: ["30", "31", "32"],
    quantity: 90,
    rating: 0,
    comment: [],
    img: ["/products/product3.png"],
    price: 799000,
    description: "Comfortable sneakers for kids.",
  },

  {
    id: 5,
    name: "Party Dress",
    category: "party",
    colors: [{ name: "Red", code: "#ef4444" }],
    size: ["S", "M", "L"],
    quantity: 40,
    rating: 0,
    comment: [],
    img: ["/products/party1.png"],
    price: 1299000,
    description: "Elegant party dress for special occasions.",
  },
  {
    id: 6,
    name: "Party Dress",
    category: "casual",
    colors: [{ name: "Red", code: "#ef4444" }],
    size: ["S", "M", "L"],
    quantity: 40,
    rating: 0,
    comment: [],
    img: ["/products/party1.png"],
    price: 1299000,
    description: "Elegant party dress for special occasions.",
  },
  {
    id: 7,
    name: "Running Sneakers",
    category: "kids",
    colors: [{ name: "Pink", code: "#ec4899" }],
    size: ["30", "31", "32"],
    quantity: 90,
    rating: 0,
    comment: [],
    img: ["/products/product3.png"],
    price: 799000,
    description: "Comfortable sneakers for kids.",
  },

  {
    id: 8,
    name: "Party Dress",
    category: "party",
    colors: [{ name: "Red", code: "#ef4444" }],
    size: ["S", "M", "L"],
    quantity: 40,
    rating: 0,
    comment: [],
    img: ["/products/party1.png"],
    price: 1299000,
    description: "Elegant party dress for special occasions.",
  },
  {
    id: 9,
    name: "Party Dress",
    category: "casual",
    colors: [{ name: "Red", code: "#ef4444" }],
    size: ["S", "M", "L"],
    quantity: 40,
    rating: 0,
    comment: [],
    img: ["/products/party1.png"],
    price: 1299000,
    description: "Elegant party dress for special occasions.",
  },
];
