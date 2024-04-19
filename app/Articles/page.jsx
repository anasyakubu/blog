import Nav from "../../components/shared/Nav";
import ArticlesListPage from "../Section/ArticlesListPage/ArticlesListPage";
import Footer from "../Section/Footer/Footer";
import Subscribe from "../Section/Subscribe/Subscribe";
import React from "react";

const Articles = () => {
  return (
    <div className="Articles">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <ArticlesListPage />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Articles;
