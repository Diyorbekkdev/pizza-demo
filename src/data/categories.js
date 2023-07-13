import { products } from "./products";

export const categories = [
  { name: "Pizza", name2: 'Пицца', image: "/categories/pizza.svg", link: "pizza" },
  { name: "Combo", name2: 'Комбо', image: "/categories/combo.svg", link: "Combo" },
  { name: "Sushi", name2: 'Суши', image: "/categories/sushi.svg", link: "Sushi" },
  { name: "Sauces", name2: 'Соусы', image: "/categories/sauce.svg", link: "Sushi" },
  { name: "Desserts", name2: 'Десерты', image: "/categories/desert.svg", link: "Desserts" },
  { name: "Beverages", name2: 'Напитки', image: "/categories/drink.svg", link: "Beverages" },
  { name: "Appetizers", name2: 'Закуски', image: "/categories/snack.svg", link: "Appetizers" }
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



