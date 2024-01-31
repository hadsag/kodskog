"use client";
import React, { useState, useEffect } from "react";
import RootLayout from "../app/layout";
import Image from "next/image";
import { useCallback } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const maxWidth = 800;

const ArticleContent = () => {
  //pdf
  const file = "https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/articles/Curriculum+Vitae+(CV)+-+Hadi+Saghir.pdf";
  const [numPages, setNumPages] = React.useState(0);
  const [scale, setScale] = useState(1); // Add a scale state for zoom level

  function onDocumentLoadSuccess(document: PDFDocumentProxy) {
    setNumPages(document.numPages);
  }

  const zoomIn = () => {
    setScale(scale + 0.2); // Increase scale by 0.2 for zoom in
  };

  const zoomOut = () => {
    if (scale > 0.4) {
      // Prevent zooming out too much
      setScale(scale - 0.2); // Decrease scale by 0.2 for zoom out
    }
  };

  const downloadPDF = () => {
    // Create a link element, set the download attribute with a filename
    const link = document.createElement("a");
    link.href = file;
    link.download = "CV - Hadi Saghir"; // Set a filename for download
    link.click(); // Trigger the download by simulating a click
  };

  //screen
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
          <img
            className="absolute z-1 w-full h-full object-cover"
            // src="/assets/projects/Lines.png"
            src="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/Lines.png"            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Curriculum Vitae (CV)</h2>
            <h3> 2024 </h3>
          </div>
        </div>
      )}

      {!isSmallScreen && (
        <div
          id="articleButtons"
          className="fixed bottom-0 left-0 w-full flex justify-center p-4 z-50"
        >
          <button onClick={zoomOut} className="article-btn">
            <i className="fas fa-minus"></i> {/* Font Awesome minus icon */}
          </button>
          <button onClick={downloadPDF} className="article-btn">
            <i className="fas fa-download"></i>{" "}
          </button>
          <button onClick={zoomIn} className="article-btn">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      )}

      {isSmallScreen && (
        <div id="articleButtons" className="fixed bottom-0 right-0 p-4 z-50">
          <button onClick={downloadPDF} className="article-btn">
            <i className="fas fa-download"></i>{" "}
          </button>
        </div>
      )}

      <div
        id="articles"
        className={`w-screen ${
          isSmallScreen
            ? `pt-[90px] h-[calc(100vh-90px)]`
            : "lg:h-[80vh] md:h-[70vh] h-[90vh]"
        } flex justify-center`}
      >
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} style={{ marginBottom: "16px" }}>
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  isSmallScreen
                    ? Math.min(window.innerWidth, maxWidth)
                    : maxWidth
                }
                scale={scale}
              />
            </div>
          ))}
        </Document>
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
