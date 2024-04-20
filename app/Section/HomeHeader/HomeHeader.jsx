import Nav from "../../../components/shared/Nav";
import React from "react";
import "./HomeHeader.scss";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import NYM from "../../assets/nym.png";
import { addSubscribers } from "../../server-action/addSubscribers";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <Nav />
      <div className="lg:px-6 py-1">
        <div className="text-center pt-5 p-20">
          <div className="">
            <h1
              className="text-3xl font-extrabold text-black sm:py-16"
              style={{
                fontWeight: "600",
              }}
            >
              <span className="text-4xl md:text-[4rem] font-extrabold mt-1 leading-none">
                We Help Writers Succeed in the Creator Economy
              </span>
            </h1>
          </div>
          {/* Card */}
          <div className="mt-6 m-10">
            <div className="bg-[#eee] text-black p-24 rounded-2xl shadow-lg">
              <Image className="w-20 h-8" src={NYM} alt="NYM Logo" />
              <h6 className="text-black mt-5 text-lg py-2 font-semibold">
                Want to understand the future of content marketing? <br /> Get
                our free guide, The Killer and the Poet:
              </h6>
              <div className="mt-3">
                <form action={addSubscribers}>
                  <input
                    className="w-full h-full p-5 m-1 outline-none border border-black rounded-xl"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <div className="mt-4">
                    <Button type="submit" className="w-full h-full p-3 text-md">
                      Subscribe Now
                    </Button>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-black text-sm font-medium">
                      We won`t send you spam. Unsubscribe at any time.
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
