import React from "react";
import bg1 from "../../../assets/images/pizza1.png";
import bg2 from "../../../assets/images/pizza2.png";

// style
import "./headercard.scss";
const HeaderCards = () => {
  const cardData = [
    {
      title: "3 средние пиццыот 999 рублей",
      img: bg1,
    },
    {
      title: "Кэшбек 10% на самовывоз (доставка)",
      img: bg2,
    },
    {
      title: "3 средние пиццыот 999 рублей",
      img: bg1,
    },
    {
      title: "Кэшбек 10% на самовывоз (доставка)",
      img: bg2,
    },
  ];
  return (
    <div className="header_card">
      {cardData.map((res, index) => (
        <div key={index} className="card_box" style={{ backgroundImage: `url("${res.img}")` }}>
          <p className="title">{res.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HeaderCards;
