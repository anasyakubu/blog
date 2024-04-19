import React from "react";
import "./Subscribe.scss";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NYM from "../../assets/nym.png";
import { addSubscribers } from "../../server-action/addSubscribers";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="p-10">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Card */}
          <div className="text-center">
            <div className="mt-6">
              <div className="bg-[#eee] text-black p-16 rounded-2xl shadow-lg">
                <Image className="w-20 h-8" src={NYM} alt="NYM Logo" />
                <h6 className="text-black mt-5 text-md py-2 font-semibold">
                  Want to understand the future of content marketing? <br /> Get
                  our free guide, The Killer and the Poet:
                </h6>
                <div className="mt-3">
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
                </div>
              </div>
            </div>
          </div>
          {/* Text */}
          <div className="lg:py-40 sm:my-10">
            <h1 className="text-2xl font-extrabold text-black">
              Get free access to proven marketing training.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
