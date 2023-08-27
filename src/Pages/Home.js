import React from "react";
import Swingappbar from "../Components/bars/Swingappbar";
import ProductCard from "../Components/Cards/Productcard";
import styles from  "../Components/css/Home.module.css"

const Home = () => {
  return (
    <div>
      <Swingappbar />
      <section className="hero">
        <ProductCard Productname="Hooli"/>
        <ProductCard Productname="TradeShare"/>
        <ProductCard Productname="SwingTrader"/>
      </section>
<div className={styles.aboutdiv}>
</div>
      </div>
  );
};

export default Home;
