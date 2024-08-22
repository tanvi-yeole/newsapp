import React from "react";

const NewsCard = ({ title, description, imgSrc, url }) => {
  return (
    <div className="max-w-[300px] px-2 py-3 rounded-lg border-2 min-h-[400px] m-2 shadow-md flex flex-col justify-between">
      <div>
        <img
          src={!imgSrc ? "/Images/news.png" : imgSrc}
          alt="News Image"
          className="w-full object-cover object-center max-h-[300px]"
        />
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="text-xl font-bold">
          {title.length > 80 ? title.slice(0, 60) + "..." : title}
        </h3>
        <p className="text-base text-gray-400 text-ellipsis">{description}</p>
      </div>
      <div className="flex justify-start items-end">
        <button className="px-3 py-2 bg-red-800 text-white text-sm rounded-md">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
