import React, { useContext, useState } from "react";
import HeaderCards from "./HeaderCard/HeaderCards";
import ProductCard from "./ProductCard/ProductCard";

// style

import "./homeStyle.scss";
import {
  AppetizersProducts,
  BeveragesProducts,
  ComboProducts,
  DessertsProducts,
  pizzaProducts,
  sushiProducts,
} from "../../data/categories";
import { LanguageContext } from "../../context/LanguageContext";

const Home = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (category, event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: event.target.value,
    }));
  };

  const filterProductsByFilter = (products, category, filter) => {
    if (filter === "") {
      return products;
    }
    return products.filter(
      (product) => product.category === category && product.filter === filter
    );
  };

  return (
    <div>
      <section id="#header">
        <HeaderCards />
      </section>

      <section id="pizza">
        <div className="heading">
          <h2>{selectedLanguage === "en"
              ? "Pizza"
              : "Пицца"}</h2>
          <select
            name="price"
            id="price"
            onChange={(event) => handleFilterChange("Pizza", event)}
          >
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="pizza_row">
          {filterProductsByFilter(
            pizzaProducts,
            "Pizza",
            selectedFilters["Pizza"] || ""
          ).map((res) => (
            <ProductCard key={res.id} {...res} />
          ))}
        </div>
      </section>

      <section id="Sushi">
        <div className="heading">
          <h2>{selectedLanguage === "en"
              ? "Sushi"
              : "Суши"}</h2>
          <select
            name="price"
            id="price"
            onChange={(event) => handleFilterChange("Sushi", event)}
          >
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="pizza_row">
          {filterProductsByFilter(
            sushiProducts,
            "Sushi",
            selectedFilters["Sushi"] || ""
          ).map((res) => (
            <ProductCard key={res.id} {...res} />
          ))}
        </div>
      </section>

      <section id="Appetizers">
        <div className="heading">
          <h2>{selectedLanguage === "en"
              ? "Appetizers"
              : "Закуски"}</h2>
          <select
            name="price"
            id="price"
            onChange={(event) => handleFilterChange("Appetizers", event)}
          >
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="pizza_row">
          {filterProductsByFilter(
            AppetizersProducts,
            "Appetizers",
            selectedFilters["Appetizers"] || ""
          ).map((res) => (
            <ProductCard key={res.id} {...res} />
          ))}
        </div>
      </section>

      <section id="Desserts">
        <div className="heading">
          <h2>{selectedLanguage === "en"
              ? "Desserts"
              : "Десерты"}</h2>
          <select
            name="price"
            id="price"
            onChange={(event) => handleFilterChange("Desserts", event)}
          >
            <option value="">All Poducts</option>
            <option value="NEW">New</option>
            <option value="HOT">Hot</option>
          </select>
        </div>
        <div className="pizza_row">
          {filterProductsByFilter(
            DessertsProducts,
            "Desserts",
            selectedFilters["Desserts"] || ""
          ).map((res) => (
            <ProductCard key={res.id} {...res} />
          ))}
        </div>
      </section>

      <section id="Beverages">
        <div className="heading">
          <h2>{selectedLanguage === "en"
              ? "Beverages"
              : "Напитки"}</h2>
          <select
            name="price"
            id="price"
            onChange={(event) => handleFilterChange("Beverages", event)}
          >
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="pizza_row">
          {filterProductsByFilter(
            BeveragesProducts,
            "Beverages",
            selectedFilters["Beverages"] || ""
          ).map((res) => (
            <ProductCard key={res.id} {...res} />
          ))}
        </div>
      </section>
      <section id="Combo">
        <div className="heading">
          <h2>{selectedLanguage === "en"
              ? "Combo"
              : "Комбо"}</h2>
          <select
            name="price"
            id="price"
            onChange={(event) => handleFilterChange("Combo", event)}
          >
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="pizza_row">
          {filterProductsByFilter(
            ComboProducts,
            "Combo",
            selectedFilters["Combo"] || ""
          ).map((res) => (
            <ProductCard key={res.id} {...res} />
          ))}
        </div>
      </section>

      <section id="pizza_info">
        <div className="info">
          <h1>
            {selectedLanguage === "en"
              ? "Experience the Ultimate Pizza Delivery in Moscow"
              : "Насладитесь первоклассной доставкой пиццы в Москве"}
          </h1>
          <p className={`info_text ${showFullContent ? "show" : "blur"}`}>
            {selectedLanguage === "en"
              ? `Craving a delicious pizza in Moscow? Look no further! With our
            exceptional pizza delivery service, you can satisfy your taste buds
            right in the comfort of your own home. We understand the joy of
            savoring a piping-hot, cheesy slice of pizza, and we're dedicated to
            bringing that joy to your doorstep. Our extensive menu boasts a wide
            variety of mouthwatering pizzas, prepared with the freshest
            ingredients and crafted by skilled pizzaiolos.`
              : `Хотите отведать вкусную пиццу в Москве? Не смотрите дальше! С нашим
            исключительная служба доставки пиццы, вы сможете удовлетворить свои вкусовые рецепторы
            прямо в комфорте вашего собственного дома. Мы понимаем, как приятно
отведать обжигающе горячий кусочек пиццы с сыром, и мы стремимся
доставить это удовольствие прямо к вашему порогу. Наше обширное меню может похвастаться широким выбором
            разнообразные аппетитные пиццы, приготовленные из самых свежих
            ингредиенты, приготовленные опытными пиццайоло.`}

            <p>
              {selectedLanguage === "en"
                ? `From classic Margherita and Pepperoni to gourmet options like
              Truffle Mushroom and BBQ Chicken, we have a pizza to suit every
              palate. Choose from a range of crusts, including thin and crispy,
              thick and fluffy, or gluten-free for those with dietary
              restrictions. Our pizzas are generously topped with high-quality
              cheeses, flavorful sauces, and a medley of delectable toppings
              that will leave you craving for more. Ordering from us is a
              breeze. Simply visit our user-friendly website or give us a call,
              and our friendly customer service team will guide you through the
              process. We offer convenient online payment options to make your
              experience seamless. Once your order is placed, our dedicated
              delivery personnel will swiftly prepare your pizza and ensure it
              reaches you in the shortest possible time, piping hot and ready to
              devour. We pride ourselves not only on the exceptional quality of
              our pizzas but also on our commitment to outstanding service.`
                : `От классической маргариты и пепперони до изысканных блюд, таких как
              Трюфельные грибы и курица барбекю - у нас есть пицца на любой вкус.
              вкус. Выбирайте из широкого ассортимента коржей, в том числе тонких и хрустящих,
толстых и пышных, или безглютеновых для тех, кто придерживается диетических
              ограничения. Наши пиццы щедро посыпаны высококачественными
              сыры, ароматные соусы и множество восхитительных начинок
              это заставит вас желать большего. Заказ у нас - это
              легкий ветер. Просто посетите наш удобный веб-сайт или позвоните нам,
и наша дружелюбная служба поддержки клиентов проведет вас через весь
процесс. Мы предлагаем удобные способы онлайн-оплаты, чтобы сделать ваш
              испытайте все без проблем. Как только ваш заказ будет размещен, наш специальный
              сотрудники службы доставки быстро приготовят вашу пиццу и позаботятся о том, чтобы она была
              доставляется вам в кратчайшие сроки, обжигающе горячим и готовым к
употреблению. Мы гордимся не только исключительным качеством
нашей пиццы, но и нашей приверженностью к превосходному сервису.`}
            </p>
            <p>
              {selectedLanguage === "en"
                ? `Our delivery team is known for its professionalism and
              punctuality, ensuring that your pizza arrives on time, every time.
              We understand the importance of maintaining food safety standards,
              and we adhere to strict hygiene practices throughout the
              preparation and delivery process.`
                : `Наша команда доставки известна своим профессионализмом и
              пунктуальностью, гарантируя, что ваша пицца всегда прибудет вовремя.
                            Мы понимаем важность соблюдения стандартов безопасности пищевых
              продуктов и придерживаемся строгих правил гигиены на протяжении
              всего процесса приготовления и доставки.`}
            </p>
            <p>
              {selectedLanguage === "en"
                ? `Whether you're hosting a gathering with friends, enjoying a cozy
              night in, or simply craving a delicious slice of pizza, our
              delivery service in Moscow is here to satisfy your appetite.
              Indulge in the tantalizing flavors, delightful aromas, and
              unparalleled convenience of our pizza delivery. Treat yourself to
              a culinary experience that will leave you longing for more.`
                : `Проводите ли вы встречу с друзьями, наслаждаясь уютной
              переночевать дома или просто захотеть съесть вкусный кусочек пиццы, наш
              служба доставки в Москве здесь для того, чтобы удовлетворить ваш аппетит.
              Насладитесь дразнящими вкусами, восхитительными ароматами и
непревзойденным удобством нашей доставки пиццы. Побалуйте себя
кулинарными изысками, которые заставят вас желать большего.`}
            </p>
            <p>
              {selectedLanguage === "en"
                ? `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                corrupti consequatur doloremque at quis sit aut dicta recusandae
                nam tempora, dolores quae fugit eos. Nesciunt impedit inventore
                quas a neque? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Rerum natus enim dolore, ratione consequatur sed itaque eos
                modi suscipit praesentium sint, debitis harum quod voluptatum
                facere magnam necessitatibus earum doloremque eligendi illum nemo
                temporibus! Atque saepe nobis commodi aliquam, voluptate labore
                quidem excepturi porro. Maiores esse, quidem necessitatibus magni
                iure perspiciatis voluptas earum natus! Nostrum sunt laborum
                voluptate quibusdam fugiat dicta laudantium vel corrupti?
                Cupiditate vitae officia deserunt temporibus aut voluptas eveniet
                in eius itaque? Obcaecati possimus harum, cum amet mollitia esse
                quisquam dolores eaque. Delectus facere quibusdam rem repellendus,
                ab, mollitia necessitatibus esse, accusantium sint laboriosam
                porro officiis possimus?`
                : `Мы знаем, что такое страдание, и мы должны соблюдать правила, регулирующие элиту. Кваэрат
                коррупция влечет за собой тяжкие последствия, когда мы сидим без приказа об отводе
                во имя времени, Долорес, которая сбежала из ЭОСА. Нескиунт
                квази-ник? Знай, что такое боль, сиди и думай о том, как избавиться от жира
                элита. Rerum Natus enim dolore, причина, по которой это произошло, очевидна.
                Модии сукципит праэсентиум синт, дебитис харум квод сладострастный
                лицо огромное, необходимое, ухо тяжелое, желанное, иллум немо
                временно! В конце концов, нет ничего общего с другими, сладострастный труд - все, кроме
  порро. Главное - это то, что необходимо для достижения успеха.
                я вижу перспективу сладострастия от природы! Нострум сант лаборум
                сладострастный придирающийся к бегству диктат похвалы развращает?
                Жизненная позиция купидона, покинувшего временный мир после сладострастного вечера
                в эйус итаке? Обескровленный поссимус харум, и аметист моллития эссэ
                кисквам долорес эак. Delectus facere quibusdam rem repellendus,
  ab, mollitia necessitatibus esse, accusantium sint laboriosam
                порро официис поссимус?`}
            </p>
          </p>
          <div className={`see_more ${showFullContent ? "hide" : ""}`}>
            <button className="seeMore" onClick={toggleContent}>
              {selectedLanguage === "en"
                ? `See more content`
                : `Смотрите больше контента`}
            </button>
          </div>
          {showFullContent && (
            <div className="hide_content">
              <button className="hideContent" onClick={toggleContent}>
                {selectedLanguage === "en"
                  ? `Hide Content`
                  : `Скрыть содержимое`}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
