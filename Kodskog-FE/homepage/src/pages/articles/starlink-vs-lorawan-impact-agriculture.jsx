"use client";
import React, {useEffect,useState} from "react";
import RootLayout from "../../app/layout";
import Image from "next/image";

const ArticleContent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768 || window.innerHeight < 868);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div id="projects" className="w-full">
      {!isSmallScreen && (
        <div className="w-screen lg:h-[20vh] md:h-[30vh] h-[10vh] relative">
          <div className="absolute top-0 left-0 w-full lg:h-[20vh] md:h-[30vh] h-[10vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src="/assets/projects/Lines.png"
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">IoT Network</h2>
          <h3> StarLink and LoRa in Agriculture </h3>
          </div>
        </div>
      )}
      <div
        className={`w-screen ${
          isSmallScreen
            ? `pt-90px h-[calc(100vh-90px)]`
            : "lg:h-[80vh] md:h-[70vh] h-[90vh]"
        } relative`}
      >
        <iframe
          src="https://hackmd.io/@hadsag/BkMUEYW9a"
          className="w-full h-full absolute inset-0"
          width="100%"
          height="100%"
          style={{
            top: isSmallScreen ? "90px" : "0",
            overflow: "hidden",
          }}
          allowFullScreen
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





