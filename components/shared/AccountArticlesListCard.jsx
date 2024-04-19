import React from "react";
import Image from "next/image";
import User from "../../app/assets/user-1.jpg";
import Link from "next/link";
import { Button } from "../ui/button";

const AccountArticlesListCard = () => {
  return (
    <div className="AccountArticlesListCard">
      <div className="p-3 m-2 bg-white text-black border border-black rounded-xl shadow-xl">
        <div className="">
          <div className="flex gap-5">
            <span>/</span>
            <span>
              <Image className="h-10 w-10 rounded-full" src={User} alt="User" />
            </span>
            <span className="text-xl py-2 font-light">
              <small className="font-semibold ">
                <Link href="/">Me</Link>
              </small>{" "}
            </span>
          </div>
          <div className="mt-3">
            <p className="text-black text-sm font-semibold">15-April-2024</p>
          </div>
          <div className="">
            <div className="mt-5 py-3">
              <h2
                className="text-2xl font-bold text-black hover:underline"
                style={{ fontSize: "1.5rem", lineHeight: "2.2rem" }}
              >
                <Link href="/">
                  {" "}
                  How To Optimize Your Website For Local Search in 2024 SEO
                </Link>
              </h2>
              <p className="mt-3 text-sm font-light p-2">
                Copy Writing Marketing
              </p>
              <div className="mt-3 flex justify-between gap-3">
                <Button>Update</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountArticlesListCard;
