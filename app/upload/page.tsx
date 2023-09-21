"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Metadata } from "next";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={400}
          alt="An image of a girl"
        />
      )}
      <CldUploadWidget
        uploadPreset="egm9lvrh"
        onUpload={(result, widget) => {
          if (result.event != "success") return;

          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
          styles: {},
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }

export default UploadPage;
