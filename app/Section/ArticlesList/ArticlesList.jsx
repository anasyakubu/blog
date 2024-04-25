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
        {/*      {watches.map((blogs) => (    ))}*/}
        {/*  */}

        <div className="">
          {blogs.map((blog) => (
            <div className="flex flex-col md:flex-row" key={blog.id}>
              <div className="w-full md:w-2/3 mb-4 md:mb-0 m-1 bg-white text-black rounded-xl shadow-lg p-5 lg:py-32">
                {/* <!-- Content for the 2/3 width section --> */}
                <div className="">
                  {/* user image and details */}
                  <div className="flex gap-5">
                    <span>/</span>
                    <span>
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={User}
                        alt="User"
                      />
                    </span>
                    <span className="text-sm font-light">
                      {" "}
                      by{" "}
                      <small className="font-semibold underline">
                        <Link href={`/Profile/${blog.id}`}>Anas Yakubu</Link>
                      </small>{" "}
                      on <b>April 11, 2024</b>
                    </span>
                  </div>
                  <div className="mt-5">
                    <h2
                      className="text-2xl font-bold text-black hover:underline"
                      style={{ fontSize: "2rem", lineHeight: "2rem" }}
                    >
                      <Link href={`/Articles/${blog.id}`}>{blog.title}</Link>
                    </h2>
                    <p className="mt-3 text-sm p-2">Email Marketing</p>
                  </div>
                  <div className="mt-5">
                    <p>{blog.title}</p>
                  </div>
                  <div className="mt-5">
                    <Link href={`/Articles/${blog.id}`}>
                      <Button>Continue Reading</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                {/* <!-- Content for the 1/3 width section --> */}
                <ArticlesListCard user="Abbas Yakubu" title="Nextjs 14 Auth" />
                <ArticlesListCard
                  user="Hauwa Yakubu"
                  title="Political Science in Nigeria"
                />
              </div>
            </div>
          ))}
          {/*  */}
          {/* <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <ArticlesListCard user="" title="" />
              <ArticlesListCard user="" title="" />
              <ArticlesListCard user="" title="" />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
