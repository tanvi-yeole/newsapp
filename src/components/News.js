import React from "react";
import { newsData } from "../data";
import NewsCard from './Newscard'

const News = () => {
  return (
    <div className="min-h-screen py-10">
      <h2 className="text-center text-2xl text-slate-200 mb-14 font-bold">
        Newser-top headlines
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            imgSrc={news.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
