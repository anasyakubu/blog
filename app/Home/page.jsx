import React from "react";
import HomeHeader from "../Section/HomeHeader/HomeHeader";
import ArticlesList from "../Section/ArticlesList/ArticlesList";
import Footer from "../Section/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <HomeHeader />
        <ArticlesList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
