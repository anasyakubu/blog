import Image from "next/image";
import React from "react";
import Img from "../../app/assets/Random-img.jpg";
import User from "../../app/assets/user-1.jpg";
import Link from "next/link";

const ArticlesListCardBeta = async ({
  tag,
  user,
  id,
  title,
  article,
  createdAt,
}) => {
  const dateString = "2024-04-28T11:54:13.582+00:00";
  const date = new Date(dateString);

  const currentTime = new Date();
  const timeDifference = Math.floor((currentTime - date) / 1000); // Difference in seconds

  if (timeDifference < 60) {
    console.log("Less than a minute ago");
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    console.log(`${minutes} minute(s) ago`);
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    console.log(`${hours} hour(s) ago`);
  } else {
    const days = Math.floor(timeDifference / 86400);
    console.log(`${days} day(s) ago`);
  }

  //
  const dateOne = "2024-04-23T21:00:35.358+00:00";
  const date1 = new Date(dateOne);

  const formattedDate = date.toLocaleDateString("en-US");
  // const formattedTime = date.toLocaleTimeString("en-US");

  console.log(`${formattedDate}`);

  return (
    <div className="ArticlesListCardBeta">
      <div className="w-full bg-white text-black p-5 m-2 sm:my-5 shadow-xl rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-4 md:mb-0 m-1 lg:py-32">
            <div className="flex gap-3">
              <p className="">
                <Link href={`/Articles/${id}`}>
                  <Image
                    src={User}
                    alt="User"
                    className="h-8 w-8 rounded-full"
                  />
                </Link>
              </p>
              <p className="my-2 text-sm">
                <Link href={`/Articles/${id}`}>Anas Yakubu |</Link>
              </p>

              <p className="my-2 text-sm">
                <Link href={`/Articles/${id}`}>Nov 6, 2023</Link>
              </p>
            </div>
            <h6 className="mt-5 text-2xl font-extrabold hover:underline">
              <Link href={`/Articles/${id}`}>{title}</Link>
            </h6>
            <p className="mt-3 text-sm">
              <Link href={`/Articles/${id}`}>{article}</Link>
            </p>
            <div className="mt-5 text-sm flex gap-3">
              <p className="p-2 bg-[#e4e4e4] rounded-2xl">{tag}</p>
              <p className="my-2 text-[#999] ">3 day(s) ago.</p>
              {/* <p className="my-2 text-[#999] ">selected for you</p> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:my-20 my-8 flex justify-center">
            <Link href={`/Articles/${id}`}>
              <Image
                src={Img}
                alt="Img"
                className="lg:w-80 shadow-lg w-full h-full rounded-md"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesListCardBeta;
