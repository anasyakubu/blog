import React from "react";

const Input = ({ placeholder, value }) => {
  return (
    <div className="Input mt-5">
      <input
        className="p-5 w-full rounded-xl bg-white text-black outline-none border border-black"
        type="text"
        placeholder="Enter Text"
        name=""
      />
    </div>
  );
};

export default Input;
