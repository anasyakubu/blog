import Nav from "@/components/shared/Nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BannerTwo from "../../assets/Sharing articles-bro.svg";
import "./AccountHeader.scss";

const AccountHeader = () => {
  return (
    <div className="AccountHeader">
      <div className="">
        <Nav />
        <div className="lg:px-6 py-5">
          <div className="bg-black py-12 text-white p-10 m-5 rounded-xl shadow-lg">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <h2
                  className="text-2xl font-semibold text-white"
                  style={{ fontSize: "1.5rem" }}
                >
                  Welcome Back ! Anas Yakubu
                </h2>
                <p className="mt-5 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum, nisi. Fugit dignissimos laudantium cum quasi minus
                  recusandae nisi qui magni. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Suscipit pariatur maiores culpa
                  quaerat nulla quia iure tenetur officiis ipsam vitae?
                </p>
                <div className="mt-6">
                  <Link href="/">
                    <Button className="bg-white text-black">Read More</Button>
                  </Link>
                </div>
              </div>
              {/* img */}
              <div className="flex justify-center">
                <Image className="w-64" src={BannerTwo} alt="Banner 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
