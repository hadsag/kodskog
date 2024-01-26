import React from 'react';
import ArticleItem from './ArticleItem';

const Articles = () => {
  return (
    <div id='articles' className='w-full'>
      <div className='max-w-[1240px] h-full mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#84735b]'>
          Articles
        </p>
        <h2 className='py-4'>Featured Articles</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ArticleItem
            title='Deep Learning: Improving Computing Efficiency in BERT Model Training. Leveraging Mixed-Precision and Knowledge Distillation [Malmö University] (Ongoing Research)'
            articleUrl='/articles/improving-computing-efficiency-bert-training'
          />
          <ArticleItem
            title='Embedded Systems: Understanding Analog AI, Current Challenges, and Prospects [Malmö University]'
            articleUrl='/articles/understanding-analog-ai-embedded-systems'
          />
          <ArticleItem
            title='Deep Learning: Optimizing Fast Food Image Classification: A Comparative Study of VGG, ResNet, and Additional CNN Architectures in Pre-Trained Models [Umeå University]'
            articleUrl='/articles/optimizing-fast-food-image-classification'
          />
          <ArticleItem
            title='Software Development: Java? Clojure? Scala? Navigate JVM Languages for Your Project Needs'
            articleUrl='/articles/navigate-jvm-languages-for-projects'
          />
          <ArticleItem
            title='Big Data: Efficiency in Code Clone Detection: A Comparative Analysis of JavaScript and Clojure [Blekinge Institute of Technology]'
            articleUrl='/articles/code-clone-detection-js-clj-comparative-analysis'
          />
          <ArticleItem
            title='IoT - Network: StarLink VS LoRaWan? Impact on Agriculture [Medium Article]'
            articleUrl='/articles/starlink-vs-lorawan-impact-agriculture'
          />
          <ArticleItem
            title='Machine Learning: No Dataset Avaiable? Use The Hustle Strategy [Medium Article]'
            articleUrl='https://medium.com/@hadisaghir00/machine-learning-no-dataset-available-use-the-hustle-strategy-b8b0fcbb51e1'
            openInNewTab
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
