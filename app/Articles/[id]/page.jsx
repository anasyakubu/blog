import React from "react";
// import { Button } from "@/components/ui/button";
import "./page.scss";
import Image from "next/image";
import BannerOne from "../../../app/assets/Sharing articles-bro.svg";
import Nav from "../../../components/shared/Nav";
import Subscribe from "../../Section/Subscribe/Subscribe";
import Footer from "../../Section/Footer/Footer";

const Read = async ({ params: { id } }) => {
  console.log(id);
  return (
    <div className="Read">
      {" "}
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="lg:px-6 py-1">
          <div className="text-center pt-5 p-20">
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
            <div className="">
              <h3 className="text-black font-semibold text-xl">
                Email marketing is one of the most popular marketing channels
                because it’s relatively easy to use, highly effective, and
                cheap.
              </h3>
              <p className="text-md mt-5 text-black">
                Yet, implementing an email marketing strategy can feel
                overwhelming. How do you get started? What kinds of emails
                should you send? What email marketing software should you use?
                What’s the difference between an average and highly effective
                marketing strategy? This guide simplifies email marketing.
                Whether you’re a beginner or an advanced user, it covers
                everything you need to know to start a highly successful email
                marketing strategy with minimal time and effort.
              </p>

              <p className="text-md mt-5 text-black">
                Yet, implementing an email marketing strategy can feel
                overwhelming. How do you get started? What kinds of emails
                should you send? What email marketing software should you use?
                What’s the difference between an average and highly effective
                marketing strategy? This guide simplifies email marketing.
                Whether you’re a beginner or an advanced user, it covers
                everything you need to know to start a highly successful email
                marketing strategy with minimal time and effort.
              </p>

              <p className="text-md mt-5 text-black">
                Yet, implementing an email marketing strategy can feel
                overwhelming. How do you get started? What kinds of emails
                should you send? What email marketing software should you use?
                What’s the difference between an average and highly effective
                marketing strategy? This guide simplifies email marketing.
                Whether you’re a beginner or an advanced user, it covers
                everything you need to know to start a highly successful email
                marketing strategy with minimal time and effort.
              </p>
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
