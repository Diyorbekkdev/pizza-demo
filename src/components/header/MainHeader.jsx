import React, { Fragment, useContext, useEffect, useState } from "react";
import language from "../../assets/images/language.png";
import userLogin from "../../assets/images/Account.png";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart.svg";
import { categories } from "../../data/categories";

// style
import "./header.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/ProductContex";


const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 140;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const targetElement = document.getElementById(id);
    const offset = 70; // Adjust this value to account for any fixed headers

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth',
    });
  };
  return (
    <Fragment>
      <header className="header">
        <nav className="container">
          <div className="nav_left">
            <div className="language_option">
              <img src={language} alt="language icon" />
              <select name="language" id="language">
                <option value="en">Eng</option>
                <option value="ru">Ru</option>
              </select>
            </div>
            <p className="address">Проверить адрес</p>
            <p className="delivering">
              Среднее время доставки*
              <span className="delivering_time">34567</span>:
            </p>
          </div>
          <div className="nav_right">
            <p>Время работы: с 11:00 до 23:00</p>
            <div className="user_login">
              <img src={userLogin} alt="account" />
              <p>Войти в аккаунт</p>
            </div>
          </div>
        </nav>
        <div className="line"></div>
      </header>
      <div className={`wrapper ${isSticky ? "sticky" : ""}`}>
        <div className={`fixed_navbar container`}>
          <div className="logo_wrapper">
            <img src={logo} alt="" />
            <h1>Куда пицца</h1>
            <ul className={`sticky_navbar  ${isSticky ? "show_nav" : ""}`}>
              {categories.map((res, index) => (
                <li key={index}>
                  <NavLink onClick={() => scrollTo(res.link)} href="#g">{res.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink to={'cart'} className="">
            <button  className="cart">
              <img src={cart} alt="cart" />
              <p className="price">{cartItems.length} </p>
            </button>
          </NavLink>
        </div>
      </div>

      <div className="container">
        <div className={`category ${isSticky ? "my-3" : ""}`}>
          {categories.map((res, index) => (
            <NavLink
             onClick={() => scrollTo(res.link)}
            
              key={index}
              className="category_row"
            >
              <img src={res.image} alt="" />
              <p className="title">{res.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MainHeader;
