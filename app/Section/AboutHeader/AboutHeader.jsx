import Nav from "../../../components/shared/Nav";
import React from "react";
import "./AboutHeader.scss";
// import { Button } from "../../../components/ui/button";
import Image from "next/image";
import BannerOne from "../../assets/Banner-1.svg";

const AboutHeader = () => {
  return (
    <div className="AboutHeader">
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
                We Don’t Just Teach Content Marketing — It’s How We Built Our
                Company
              </span>
            </h1>
          </div>
          {/* Image */}
          <div className="mt-1 flex justify-center text-center">
            <Image src={BannerOne} alt="Image" />
          </div>
          <div className="">
            <p className="text-lg text-black">
              Good writing isn’t enough to attract and hold attention. Great
              writing isn’t enough to attract and hold attention. Anyone who
              makes a living as a writer today will tell you that your content
              has to be made up of strategic ingredients. It has to connect with
              your target audience and inspire action. Luckily, writers can
              develop those winning skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
