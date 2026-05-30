"use client";
import React from "react";
import Link from "next/link";

const articles = [
  { title: "A Comparative Analysis of Model Compression Effects on NLP Question Answering Capabilities", url: "/articles/comparative-analysis-MC-on-QA-NLP-capabilities" },
  { title: "Literature Review on Enhancing IoT Security with Analog AI-Based Host-Based Intrusion Detection and Prevention Systems", url: "/articles/analog-ai-hb-ibds-iot" },
  { title: "Optimizing Fast Food Image Classification: A Comparative Study of VGG, ResNet, and Additional CNN Architectures", url: "/articles/optimizing-fast-food-image-classification" },
  { title: "Java? Clojure? Scala? Kotlin? Investigating the Applications of JVM Languages", url: "/articles/navigate-jvm-languages-for-projects" },
  { title: "Link Library", url: "/articles/my-link-library" },
  { title: "Efficiency in Code Clone Detection: A Comparative Analysis of JavaScript and Clojure", url: "/articles/code-clone-detection-js-clj-comparative-analysis" },
  { title: "Introduction to Distributed Services, REST, and Web Services (Swedish)", url: "/articles/DistributedServices-REST-WebServices" },
  { title: "Understanding Analog AI, Current Challenges, and Prospects", url: "https://medium.com/@hadisaghir00/understanding-analog-ai-currecnt-challenges-and-prospects-8673670512d1", external: true },
  { title: "No Dataset Available? Use The Hustle Strategy", url: "https://medium.com/@hadisaghir00/machine-learning-no-dataset-available-use-the-hustle-strategy-b8b0fcbb51e1", external: true },
];

const Articles = () => {
  return (
    <div id="articles" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8">
        <p className="text-xl tracking-widest uppercase text-[#84735b]">Articles</p>
        <div className="flex flex-col gap-2 mt-4">
          {articles.map(({ title, url, external }) => (
            external ? (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg p-4 hover:border-[#c3bcab] hover:shadow-md transition-all duration-200">
                <p className="text-base font-medium text-gray-800 leading-snug">{title}</p>
              </a>
            ) : (
              <Link key={url} href={url}
                className="block border border-gray-200 rounded-lg p-4 hover:border-[#c3bcab] hover:shadow-md transition-all duration-200">
                <p className="text-base font-medium text-gray-800 leading-snug">{title}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
