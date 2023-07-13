import React, {useState } from "react";
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

const Home = () => {
  const [showFullContent, setShowFullContent] = useState(false);

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
          <h2>Pizza</h2>
          <select name="price" id="price" onChange={(event) => handleFilterChange("Pizza", event)}>
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
          <h2>Sushi</h2>
          <select name="price" id="price" onChange={(event) => handleFilterChange("Sushi", event)}>
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
          <h2>Appetizers</h2>
          <select name="price" id="price" onChange={(event) => handleFilterChange("Appetizers", event)}>
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
          <h2>Desserts</h2>
          <select name="price" id="price" onChange={(event) => handleFilterChange("Desserts", event)}>
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
          <h2>Beverages</h2>
          <select name="price" id="price" onChange={(event) => handleFilterChange("Beverages", event)}>
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
          <h2>Combo</h2>
          <select name="price" id="price" onChange={(event) => handleFilterChange("Combo", event)}>
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
          <h1>Experience the Ultimate Pizza Delivery in Moscow</h1>
          <p className={`info_text ${showFullContent ? "show" : "blur"}`}>
            Craving a delicious pizza in Moscow? Look no further! With our
            exceptional pizza delivery service, you can satisfy your taste buds
            right in the comfort of your own home. We understand the joy of
            savoring a piping-hot, cheesy slice of pizza, and we're dedicated to
            bringing that joy to your doorstep. Our extensive menu boasts a wide
            variety of mouthwatering pizzas, prepared with the freshest
            ingredients and crafted by skilled pizzaiolos.
            <p>
              From classic Margherita and Pepperoni to gourmet options like
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
              our pizzas but also on our commitment to outstanding service.
            </p>
            <p>
              Our delivery team is known for its professionalism and
              punctuality, ensuring that your pizza arrives on time, every time.
              We understand the importance of maintaining food safety standards,
              and we adhere to strict hygiene practices throughout the
              preparation and delivery process.
            </p>
            <p>
              Whether you're hosting a gathering with friends, enjoying a cozy
              night in, or simply craving a delicious slice of pizza, our
              delivery service in Moscow is here to satisfy your appetite.
              Indulge in the tantalizing flavors, delightful aromas, and
              unparalleled convenience of our pizza delivery. Treat yourself to
              a culinary experience that will leave you longing for more.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
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
              porro officiis possimus?
            </p>
          </p>
          <div className={`see_more ${showFullContent ? "hide" : ""}`}>
            <button className="seeMore" onClick={toggleContent}>
              See more content
            </button>
          </div>
          {showFullContent && (
            <div className="hide_content">
              <button className="hideContent" onClick={toggleContent}>
                Hide Content
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
