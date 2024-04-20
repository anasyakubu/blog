import ProfileArticlesListCard from "../../../components/shared/ProfileArticlesListCard";
import React from "react";
import "./ProfileArticlesList.scss";

const ProfileArticlesList = () => {
  return (
    <div className="ProfileArticlesList">
      <div className="p-10">
        <div className="text-center">
          <h2
            className="text-black font-semibold text-2xl"
            style={{ fontSize: "2rem" }}
          >
            Recent Blog Post
          </h2>
        </div>
        {/*  */}
        <div className="mt-5">
          <div className="space-y-2 mt-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <ProfileArticlesListCard />
            <ProfileArticlesListCard />
            <ProfileArticlesListCard />
            <ProfileArticlesListCard />
            <ProfileArticlesListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileArticlesList;
