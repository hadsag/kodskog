"use client";
import React from "react";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  return (
    <div id="articles" className="w-full">
      <div className="max-w-[1240px] h-full mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#84735b]">
          Articles
        </p>
        <h2 className="py-4">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ArticleItem
            title="Deep Learning: A Comparative Analysis of Model Compression Effects on NLP Question Answering Capabilities [Malmö University] (Ongoing Research)"
            articleUrl="/articles/comparative-analysis-MC-on-QA-NLP-capabilities"
          />
          <ArticleItem
            title="Embedded Systems: Literature Review on Enhancing IoT Security with Analog AI-Based Host-Based Intrusion Detection and Prevention Systems  [Malmö University]"
            articleUrl="/articles/analog-ai-hb-ibds-iot"
          />
          <ArticleItem
            title="Deep Learning: Optimizing Fast Food Image Classification: A Comparative Study of VGG, ResNet, and Additional CNN Architectures in Pre-Trained Models [Umeå University]"
            articleUrl="/articles/optimizing-fast-food-image-classification"
          />
          <ArticleItem
            title="Software Development: Java? Clojure? Scala? Kotlin? 
            Investigating the Applications of JVM Languages"
            articleUrl="/articles/navigate-jvm-languages-for-projects"
          />
          <ArticleItem
            title="Software Development: Link Library"
            articleUrl="/articles/my-link-library"
          />
          <ArticleItem
            title="Big Data: Efficiency in Code Clone Detection: A Comparative Analysis of JavaScript and Clojure [Blekinge Institute of Technology]"
            articleUrl="/articles/code-clone-detection-js-clj-comparative-analysis"
          />
          <ArticleItem
            title="Distributed Systems: Introduction to Distributed Services, 
            REST, and Web Services [Malmö University] (Swedish)"
            articleUrl="/articles/DistributedServices-REST-WebServices"
          />
          <ArticleItem
            title="IoT Network: StarLink VS LoRaWan? Impact on Agriculture"
            articleUrl="/articles/starlink-vs-lorawan-impact-agriculture"
          />
          <ArticleItem
            title="Embedded Systems: Understanding Analog AI, Current Challenges, and Prospects [Medium Article - REDIRECT]"
            articleUrl="https://medium.com/@hadisaghir00/understanding-analog-ai-currecnt-challenges-and-prospects-8673670512d1"
            openInNewTab
          />
          <ArticleItem
            title="Machine Learning: No Dataset Avaiable? Use The Hustle Strategy [Medium Article - REDIRECT]"
            articleUrl="https://medium.com/@hadisaghir00/machine-learning-no-dataset-available-use-the-hustle-strategy-b8b0fcbb51e1"
            openInNewTab
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
