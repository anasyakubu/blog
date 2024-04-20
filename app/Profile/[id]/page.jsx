import React from "react";
import Nav from "../../../components/shared/Nav";
import Image from "next/image";
import User from "../../../app/assets/user-1.jpg";
import "./page.scss";
import ProfileArticlesList from "../../../app/Section/ProfileArticlesList/ProfileArticlesList";
import Footer from "../../../app/Section/Footer/Footer";

const Profile = ({ params: { id } }) => {
  console.log(id);
  return (
    <div className="Profile">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="lg:px-6 p-3 py-5">
          <div className="">
            <div className="mt-10">
              <div className="">
                <div className="">
                  <div className="textSection flex justify-center">
                    <Image
                      className="h-64 w-64 rounded-full"
                      src={User}
                      alt="User"
                    />
                  </div>
                  <div className="mt-5 text-left">
                    <div className="space-y-2 mt-10 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0">
                      <p className="text-black font-semibold text-md">
                        User ID : <span>123d75JKHHY639jHTE68</span>
                      </p>

                      <p className="text-black font-semibold mt-5 text-md">
                        Name : <span>Anas Yakubu</span>
                      </p>

                      <p className="text-black font-semibold text-md mt-5">
                        Email : <span>yakubuanas04@gmail.com</span>
                      </p>
                      <p className="text-black font-semibold text-md mt-5">
                        Username : <span>anasyakubu</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* ARTICLE LIST */}
        <div className="">
          <ProfileArticlesList />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
