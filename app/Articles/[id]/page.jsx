import React from "react";
// import { Button } from "@/components/ui/button";
import "./page.scss";
import Image from "next/image";
import BannerOne from "../../../app/assets/Sharing articles-bro.svg";
import User from "../../../app/assets/user-1.jpg";
import Nav from "../../../components/shared/Nav";
import Subscribe from "../../Section/Subscribe/Subscribe";
import Footer from "../../Section/Footer/Footer";
import Link from "next/link";
import { getBlog } from "../../../lib/blog.data";

const Read = async ({ params }) => {
  const { id } = params;
  const blog = await getBlog(id);
  return (
    <div className="Read">
      {" "}
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="lg:px-6 py-1">
          <div className="text-center pt-5 p-20">
            {/*  */}
            <div className="">
              <h1
                className="text-3xl font-extrabold text-black sm:py-5"
                style={{
                  fontWeight: "600",
                }}
              >
                <span className="text-4xl md:text-[4rem] font-extrabold mt-1 leading-none">
                  The Ultimate Guide To Email Marketing
                </span>
              </h1>
            </div>
            {/* Image */}
            <div className="mt-1 flex justify-center text-center">
              <Image src={BannerOne} alt="Image" />
            </div>
            {/* User */}
            <div className="text-center flex justify-center">
              <div className="flex gap-4">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={User}
                  alt="User"
                />
                <span className="py-3 text-black text-sm font-semibold">
                  <Link href={`/Profile/${id}`}> Anas Yakubu</Link> /
                </span>
                <span className="py-3 text-black text-sm font-semibold">
                  April 11 2024
                </span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-black font-semibold text-xl">{blog.title}</h3>
              <p className="text-md mt-5 text-black">{blog.article}</p>
            </div>
          </div>
          {/* Subscribe */}
          <div className="">
            <Subscribe />
          </div>
          {/* Subscribe */}
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
