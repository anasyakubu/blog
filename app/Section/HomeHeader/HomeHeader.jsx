import Nav from "@/components/shared/Nav";
import React from "react";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <Nav />
      <div className="lg:px-6 lg:py-20 sm:py-32">
        <div className="text-center">
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-3xl font-semibold text-black sm:py-10">
              <span
                className="text-4xl md:text-[5rem] font-bold mt-1 leading-none"
                style={{ lineHeight: "2rem" }}
              >
                We Help Writers Succeed in the Creator Economy
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
