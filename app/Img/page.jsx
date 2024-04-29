"use client";
import React from "react";
import ImageUpload from "../Section/ImageUpload/ImageUpload";
// import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  // const { data: session, status } = useSession();
  return (
    <div>
      <ImageUpload />
      {/* <h2>Welcome, {session.user.name}</h2>
      <hr />
      <p>Email: {session.user.email}</p> */}
    </div>
  );
};

export default page;

// export default function page() {
//   const { data: session, status } = useSession();
//   return (
//     <div>
//       <ImageUpload />
//       <h2>Welcome, {session.user.name}</h2>
//       <hr />
//       <p>Email: {session.user.email}</p>
//     </div>
//   );
// }
