import React from "react";
import "./ArticlesListBeta.scss";
import ArticlesListCardBeta from "../../../components/shared/ArticlesListCardBeta";
import { getBlogs } from "../../../lib/blog.data";

const ArticlesListBeta = async () => {
  const blogs = await getBlogs();
  return (
    <div className="ArticlesListBeta">
      <div className="text-center pt-5 p-20">
        {blogs.map((blog) => (
          <div className="w-full text-left" key={blog.id}>
            <ArticlesListCardBeta
              title={blog.title}
              tag={blog.tag}
              id={blog.id}
            />
          </div>
        ))}
        {/* <div className="w-full text-left">
          <ArticlesListCardBeta />
        </div> */}
      </div>
    </div>
  );
};

export default ArticlesListBeta;
