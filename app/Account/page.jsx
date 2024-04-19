import React from "react";
import AccountHeader from "../Section/AccountHeader/AccountHeader";
import Footer from "../Section/Footer/Footer";
import AccountArticlesList from "../Section/AccountArticlesList/AccountArticlesList";

const Account = () => {
  return (
    <div className="Account">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <AccountHeader />
        <AccountArticlesList />
        <Footer />
      </div>
    </div>
  );
};

export default Account;
