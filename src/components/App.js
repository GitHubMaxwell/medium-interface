import React, { Fragment } from "react";
import Header from "./Header.js";
import Sidenav from "./Sidenav.js";
import Hero from "./Hero.js";
// import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

function Deck() {
  return (
    <Fragment>
      <div className="deck top">
        <Header />
      </div>
      <div className="deck main">
        <Sidenav />
        <Hero />
        {/* <Sidebar /> */}
      </div>
      <div className="deck bottom">
        <Footer />
      </div>
    </Fragment>
  );
}

export default Deck;
