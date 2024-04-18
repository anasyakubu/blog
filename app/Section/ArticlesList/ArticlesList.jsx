import ArticlesListCard from "@/components/shared/ArticlesListCard";
import React from "react";
import Image from "next/image";
import User from "../../assets/user-1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ArticlesList = () => {
  return (
    <div className="ArticlesList">
      <div className="p-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
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
                    <Link href="/">Anas Yakubu</Link>
                  </small>{" "}
                  on <b>April 11, 2024</b>
                </span>
              </div>
              <div className="mt-5">
                <h2
                  className="text-2xl font-bold text-black hover:underline"
                  style={{ fontSize: "2rem", lineHeight: "2rem" }}
                >
                  <Link href="/">The Ultimate Guide To Email Marketing</Link>
                </h2>
                <p className="mt-3 text-sm p-2">Email Marketing</p>
              </div>
              <div className="mt-5">
                <p>
                  Email marketing is one of the most popular marketing channels
                  because it’s relatively easy to use, highly effective, and
                  cheap….
                </p>
              </div>
              <div className="mt-5">
                <Button>Continue Reading</Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            {/* <!-- Content for the 1/3 width section --> */}
            <ArticlesListCard />
            <ArticlesListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
