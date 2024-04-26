import ArticlesListCard from "../../../components/shared/ArticlesListCard";
import React from "react";
import Image from "next/image";
// import { cookies } from "next/headers";
import { getBlogs } from "../../../lib/blog.data";
import User from "../../assets/user-1.jpg";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import "./ArticlesList.scss";

const ArticlesList = async ({ id }) => {
  const blogs = await getBlogs();
  return (
    <div className="ArticlesList">
      <div className="p-10">
        <div className="">
          <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {blogs.map((blog) => (
              <div key={blog.id}>
                <ArticlesListCard
                  title={blog.title}
                  tag={blog.tag}
                  id={blog.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
