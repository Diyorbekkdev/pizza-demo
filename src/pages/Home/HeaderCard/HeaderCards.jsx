import React, { useContext, useState } from "react";
import bg1 from "../../../assets/images/pizza1.png";
import bg2 from "../../../assets/images/pizza2.png";

// style
import "./headercard.scss";
import { LanguageContext } from "../../../context/LanguageContext";
const HeaderCards = () => {
  const { selectedLanguage} = useContext(LanguageContext);
  const cardData = [
    {
      title: "3 medium pizzas for 999 rubles",
      title2: "3 средние пиццыот 999 рублей",
      img: bg1,
    },
    {
      title: "10% cashback for self-pickup (delivery)",
      title2: "Кэшбек 10% на самовывоз (доставка)",
      img: bg2,
    },
    {
      title: "3 medium pizzas for 999 rubles",
      title2: "3 средние пиццыот 999 рублей",
      img: bg1,
    },
    {
      title: "10% cashback for self-pickup (delivery)",
      title2: "Кэшбек 10% на самовывоз (доставка)",
      img: bg2,
    },
  ];
  return (
    <div className="header_card">
      {cardData.map((res, index) => (
        <div
          key={index}
          className="card_box"
          style={{ backgroundImage: `url("${res.img}")` }}
        >
          <p className="title">{selectedLanguage === 'en' ? `${res.title}` : `${res.title2}`}</p>
        </div>
      ))}
    </div>
  );
};

export default HeaderCards;
