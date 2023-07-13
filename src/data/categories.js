import { products } from "./products";

export const categories = [
  { name: "Pizza", image: "/categories/pizza.svg", link: "pizza" },
  { name: "Combo", image: "/categories/combo.svg", link: "Combo" },
  { name: "Sushi", image: "/categories/sushi.svg", link: "Sushi" },
  { name: "Sauces", image: "/categories/sauce.svg", link: "Sauces" },
  { name: "Desserts", image: "/categories/desert.svg", link: "Desserts" },
  { name: "Beverages", image: "/categories/drink.svg", link: "Beverages" },
  { name: "Appetizers", image: "/categories/snack.svg", link: "Appetizers" },
];

export const pizzaProducts = products.filter((product) =>
  product.category.includes("Pizza")
);
export const sushiProducts = products.filter((res) =>
  res.category.includes("Sushi")
);
export const AppetizersProducts = products.filter((res) =>
  res.category.includes("Appetizers")
);
export const DessertsProducts = products.filter((res) =>
  res.category.includes("Desserts")
);
export const BeveragesProducts = products.filter((res) =>
  res.category.includes("Beverages")
);
export const ComboProducts = products.filter((res) =>
  res.category.includes("Combo")
);
