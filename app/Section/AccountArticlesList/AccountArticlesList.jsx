import React from "react";
import "./AccountArticlesList.scss";
import AccountArticlesListCard from "../../../components/shared/AccountArticlesListCard";
import { getBlogs } from "../../../lib/blog.data";

const AccountArticlesList = async () => {
  const blogs = await getBlogs();
  return (
    <div className="AccountArticlesList">
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {blogs.map((blog) => (
            <div className="" key={blog.id}>
              <AccountArticlesListCard
                title={blog.title}
                tag={blog.tag}
                id={blog.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountArticlesList;
