import React from "react";
import "./page.scss";
import Nav from "../../../components/shared/Nav";
import Footer from "../../Section/Footer/Footer";
import { Button } from "../../../components/ui/button";

const Add = () => {
  return (
    <div className="Add">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="lg:px-6 py-1">
          <div className="p-5">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="bg-black text-white rounded-2xl shadow-2xl p-6 py-10">
                <h2
                  className="text-2xl font-extrabold text-white"
                  style={{ fontSize: "3rem", lineHeight: "3.5rem" }}
                >
                  Create a Blog Post
                </h2>
                <p className="mt-5 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-10">
                  <form action="">
                    <input
                      className="w-full p-3 rounded-xl outline-none border text-black border-black"
                      type="text"
                      placeholder="Title"
                    />
                    <textarea
                      className="w-full mt-5 p-3 rounded-xl outline-none border text-black border-black"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Text Here"
                    ></textarea>
                    <div className="mt-5 flex justify-between gap-5">
                      <Button className="bg-white text-black hover:bg-[#f4f4f4]">
                        Post
                      </Button>
                      <Button variant="destructive">Cancel</Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Add;
