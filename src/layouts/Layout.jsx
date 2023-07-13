import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import MainHeader from "../components/header/MainHeader";


const Layout = () => {
  return (
    <Fragment>
      <MainHeader/>
      <main >
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
