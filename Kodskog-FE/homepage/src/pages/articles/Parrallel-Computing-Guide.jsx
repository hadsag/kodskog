"use client";
import React from "react";
import RootLayout from "../../app/layout";
import Image from "next/image";

const ArticleContent = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[20vh] relative">
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/lines.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Deep Learning</h2>
          <h3> Architecture Analysis of Pre-Trained CNN Models</h3>
        </div>
      </div>
      <div className="w-screen h-[80vh] relative">
        <iframe
          src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FHadi-Saghir%2FParrallel-Computing%2Fblob%2Fmain%2FREADME.md&style=default&type=markdown&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"
          className="w-full h-full absolute inset-0"
        />
      </div>
    </div>
  );
};

const Article = () => {
  return (
    <RootLayout>
      <ArticleContent />
    </RootLayout>
  );
};

export default Article;





