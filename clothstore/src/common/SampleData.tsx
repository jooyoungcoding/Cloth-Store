export type ProductComment = {
  content: string;
  user: string;
  date: string;
};

export type ProductColor = {
  name: string; // tên hiển thị (White, Black, Red...)
  code: string; // mã màu (#fff, #000, rgb...)
};

export type filters = [{ tab: "men" }, { tab: "women" }, { tab: "kids" }];

export type Products = {
  id: number;
  name: string;
  colors: ProductColor[];
  size: string[];
  quantity: number;
  rating: number;
  filters: filters[];
  category: string;
  comment: ProductComment[];
  img: string[]; // nhiều ảnh
  price: number; // đơn vị: VND
  description: string;
};

export const products = [
  {
    id: 1,
    name: "Basic White T-Shirt",
    category: "T-Shirt",
    filters: ["men"],
    colors: [
      { name: "White", code: "#ffffff" },
      { name: "Black", code: "#000000" },
      { name: "Gray", code: "#9ca3af" },
    ],
    size: ["S", "M", "L", "XL"],
    quantity: 120,
    comment: [
      {
        user: "John",
        content: "The fabric is soft and very comfortable to wear.",
        date: "2025-01-12",
      },
      {
        user: "Anna",
        content: "Nice fit and true to size.",
        date: "2025-01-15",
      },
    ],
    rating: 0,
    img: ["./product1.png", "./product1-black.png"],
    price: 199000,
    description:
      "Basic white T-shirt made from 100% cotton. Breathable, comfortable, and suitable for everyday wear.",
  },

  {
    id: 2,
    name: "Oversize Hoodie",
    category: "Hoodie",
    filters: ["men"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Dark Gray", code: "#374151" },
    ],
    size: ["M", "L", "XL"],
    quantity: 75,
    comment: [
      {
        user: "Minh",
        content: "The hoodie is thick and keeps me warm.",
        date: "2025-01-20",
      },
    ],
    rating: 0,
    img: ["./img1.png"],
    price: 499000,
    description:
      "Oversized hoodie with a streetwear style. Warm, comfortable, and perfect for casual outings.",
  },

  {
    id: 3,
    name: "Slim Fit Jeans",
    category: "Jeans",
    filters: ["men"],
    colors: [
      { name: "Blue", code: "#1d4ed8" },
      { name: "Dark Blue", code: "#1e3a8a" },
    ],
    size: ["28", "30", "32", "34"],
    quantity: 60,
    comment: [],
    rating: 0,
    img: ["./product2.png"],
    price: 599000,
    description:
      "Slim-fit jeans with light stretch. Stylish and easy to match.",
  },

  {
    id: 4,
    name: "Running Sneakers",
    category: "Shoes",
    filters: ["women", "kids"],
    colors: [
      { name: "Gray", code: "#6b7280" },
      { name: "Pink", code: "#ec4899" },
    ],
    size: ["39", "40", "41", "42", "43"],
    quantity: 90,
    comment: [],
    rating: 0,
    img: ["./product3.png"],
    price: 799000,
    description: "Lightweight running sneakers with breathable mesh material.",
  },

  {
    id: 5,
    name: "Running Sneakers",
    category: "Shoes",
    filters: ["kids", "men"],
    colors: [
      { name: "Gray", code: "#6b7280" },
      { name: "Black", code: "#000000" },
    ],
    size: ["39", "40", "41", "42", "43"],
    quantity: 90,
    comment: [],
    rating: 0,
    img: ["./product2.png"],
    price: 799000,
    description: "Durable sneakers designed for everyday training.",
  },

  {
    id: 6,
    name: "Running Sneakers 2",
    category: "Shoes",
    filters: ["kids"],
    colors: [
      { name: "Red", code: "#ef4444" },
      { name: "Blue", code: "#2563eb" },
    ],
    size: ["39", "40", "41", "42", "43"],
    quantity: 90,
    comment: [],
    rating: 0,
    img: ["./product2.png"],
    price: 799000,
    description: "Comfortable sneakers for kids with vibrant colors.",
  },
];
