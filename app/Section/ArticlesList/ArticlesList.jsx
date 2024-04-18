import ArticlesListCard from "@/components/shared/ArticlesListCard";
import React from "react";

const ArticlesList = () => {
  return (
    <div className="ArticlesList">
      <div className="p-10">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <div className="">
              {/* user image and details */}
              <div className=""></div>
            </div>
          </div>
          <div className="">
            <ArticlesListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
