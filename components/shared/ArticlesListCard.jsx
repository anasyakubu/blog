import React from "react";
import Image from "next/image";
import User from "../../app/assets/user-1.jpg";
import Link from "next/link";

const ArticlesListCard = async ({ tag, user, id, title }) => {
  return (
    <div className="ArticlesListCard">
      <div className="p-3 m-2 bg-white text-black border border-black rounded-xl shadow-xl">
        <div className="">
          <div className="flex gap-5">
            <span>/</span>
            <span>
              <Image className="h-10 w-10 rounded-full" src={User} alt="User" />
            </span>
            <span className="text-xl py-2 font-light">
              <small className="font-semibold ">
                <Link href={`/Profile/${id}`}>{user}</Link>
              </small>{" "}
            </span>
          </div>
          <div className="">
            <div className="mt-5 py-3">
              <h2
                className="text-2xl font-bold text-black hover:underline"
                style={{ fontSize: "1.5rem", lineHeight: "2.2rem" }}
              >
                <Link href={`/Articles/${id}`}>{title}</Link>
              </h2>
              <p className="mt-5 text-sm font-light p-2">{tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesListCard;
