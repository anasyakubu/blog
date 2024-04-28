"use client";
import React, { useState } from "react";
import { UploadButton } from "../../../utils/uploadthing";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImageUrl(res[0]);
          alert("Upload Completed");
        }}
        onUploadError={(Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default ImageUpload;
