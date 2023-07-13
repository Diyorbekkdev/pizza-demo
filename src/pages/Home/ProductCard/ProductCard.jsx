import React, { useContext } from "react";
// style
import "./productCard.scss";
import { CartContext } from "../../../context/ProductContex";
const ProductCard = ({ id, image, name, description, price, filter }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, image, name, description, price });
  };
  return (
    <div className="card">
      {filter === "" ? "" : <p className="filter">{filter}</p>}
      <img src={image} alt="pizza" />
      <h4 className="title">{name}</h4>
      <p className="desc">{description}</p>
      <div className="btn_wrapper">
        <button className="addToCart" onClick={handleAddToCart}>
          Выбрать
        </button>
        <span>от {price} ₽</span>
      </div>
    </div>
  );
};

export default ProductCard;
