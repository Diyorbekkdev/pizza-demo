import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import { LanguageContext } from "../../context/LanguageContext";

// style
import './footer.scss';

// icons
import insta from '../../assets/images/insta.svg';
import phone from '../../assets/images/phone.svg';
import fa from '../../assets/images/fa.svg';
import location from '../../assets/images/location.svg';

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_container">
          <div className="logo_wrapper">
            <img src={logo} alt="" />
            <h3>
              {selectedLanguage === "en" ? `Where is the Pizza?` : `Куда пицца`}
            </h3>
          </div>
          <ul>
            <li>
              <a className="title" href="#fg">
                {selectedLanguage === "en"
                  ? `Where is the Pizza?`
                  : `Куда пицца`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en" ? `About the company` : `О компании`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en"
                  ? `User agreement`
                  : `Пользовательское соглашение`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en"
                  ? `Warranty conditions`
                  : `Условия гарантии`}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="title" href="#fg">
                {selectedLanguage === "en" ? `Help` : `Помощь`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en" ? `Restaurant` : `Ресторан`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en" ? `Contacts` : `Контакты`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en" ? `Support` : `Поддержка`}
              </a>
            </li>
            <li>
              <a href="#fg">
                {selectedLanguage === "en"
                  ? `Track the order`
                  : `Отследить заказ`}
              </a>
            </li>
          </ul>

          <ul className="contact_us">
            <li>
              <a className="title" href="#fg">
                {selectedLanguage === "en" ? `Contact Us` : `Контакты`}
              </a>
            </li>
            <li>
              <a href="#fg">
                <img src={phone} alt="" />
                +7 (926) 223-10-11
              </a>
            </li>
            <li>
              <a href="#fg">
                <img src={location} alt="" />
                {selectedLanguage === "en"
                  ? `Moscow, ul. Yunykh Lenintsev, 99`
                  : `Москва, ул. Юных Ленинцев, д.99`}
              </a>
            </li>
            <li className="last">
              <a href="#fg">
                <img src={fa} alt="" />
                Facebok
              </a>
              <a href="#fg">
                <img src={insta} alt="" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <small>© Copyright 2021 — Куда Пицца</small>
      </div>
    </footer>
  );
};

export default Footer;
