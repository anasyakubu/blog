"use client";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./page.scss";
import Nav from "../../../components/shared/Nav";
import Footer from "../../Section/Footer/Footer";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Robot from "../../assets/Android-pana.svg";
import { addBlog } from "../../../lib/actions/blog.action";

const Add = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCzHfb2mXLWWYbjVLUANexHlqB7SvpePy4"
  );

  const [title, setTitle] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Generative AI Call to fetch text insights
   */
  async function generateArticle() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Generate and article with this title : ${title}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    generateArticle();
  };

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
                  <form action={addBlog}>
                    <input
                      className="w-full p-3 rounded-xl outline-none border text-black border-black"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      onChange={(e) => handleChangeTitle(e)}
                    />
                    {/* <textarea
                      className="w-full mt-5 p-3 rounded-xl outline-none border text-black border-black"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Text Here"
                      value=""
                    ></textarea> */}
                    {loading === true && aiResponse === "" ? (
                      <textarea
                        className="w-full mt-5 p-3 rounded-xl outline-none border text-black border-black"
                        name="article"
                        id="article"
                        cols="30"
                        rows="10"
                        placeholder="Loading.."
                        value=""
                      ></textarea>
                    ) : (
                      <div>
                        <p className="text-sm mt-3 text-black"></p>
                        <textarea
                          className="w-full mt-5 p-3 rounded-xl outline-none border text-black border-black"
                          name="article"
                          id="article"
                          cols="30"
                          rows="10"
                          placeholder="Text Here"
                          value={aiResponse}
                        ></textarea>
                      </div>
                    )}
                    <input
                      className="w-full mt-5 p-3 rounded-xl outline-none border text-black border-black"
                      type="text"
                      id="tag"
                      name="tag"
                      placeholder="#web develop"
                      onChange={(e) => handleChangeTitle(e)}
                    />
                    <div className="mt-5 flex justify-between gap-5">
                      <Button
                        type="submit"
                        className="bg-white text-black hover:bg-[#f4f4f4]"
                      >
                        Post
                      </Button>
                      <Button variant="destructive">Cancel</Button>
                    </div>
                  </form>
                </div>
              </div>
              {/*  */}
              <div className="flex justify-center">
                <div className="py-10">
                  <Image className="w-72" src={Robot} alt="Robot" />
                  <div className="mt-5 text-center">
                    <p className="text-xl text-black font-semibold">
                      Use AI to create an Article
                    </p>
                    <p className="text-sm mt-2">
                      Enter a Title to use AI to generate and Article
                    </p>
                    <div className="mt-5">
                      <Button onClick={() => handleClick()}>
                        Generate Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Add;
