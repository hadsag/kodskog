"use client";
import React from "react";
import RootLayout from "../../app/layout";
import Image from "next/image";

const FyarilContent = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[20vh] relative">
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/Fyaril.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">A Product-based Search Engine</h2>
          <h3> Azure / Docker / Microservices / TensorFlow </h3>
        </div>
      </div>
      <div className="w-screen h-[80vh] relative">
        <iframe
          src="https://hackmd.io/@hadsag/B1lq5pecT"
          className="w-full h-full absolute inset-0"
        />
      </div>
    </div>
  );
};

const Fyaril = () => {
  return (
    <RootLayout>
      <FyarilContent />
    </RootLayout>
  );
};

export default Fyaril;
