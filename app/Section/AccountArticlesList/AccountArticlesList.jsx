import React from "react";
import "./AccountArticlesList.scss";
import AccountArticlesListCard from "@/components/shared/AccountArticlesListCard";

const AccountArticlesList = () => {
  return (
    <div className="AccountArticlesList">
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <AccountArticlesListCard />
          <AccountArticlesListCard />
          <AccountArticlesListCard />
          <AccountArticlesListCard />
        </div>
      </div>
    </div>
  );
};

export default AccountArticlesList;
