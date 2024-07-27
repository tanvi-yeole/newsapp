import React from "react";

const NewsCard = ({ title, description, imgSrc, url }) => {
  return (
    <>
      <div className="max-w-[300px] px-2 py-3 rounded-lg border-2 min-h-[400px] max-h-[530px]">
        <div className="flex flex-col h-full">
          <div className="w-full">
            <img
              src={imgSrc}
              alt="New Image"
              onError={(e) => {
                e.target.src = "/Images/news.png";
              }}
              className="w-full object-cover object-center max-h-[300px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-base text-gray-400 text-ellipsis">
              {description}
            </p>
          </div>
          <div>
            <button className="px-3 py-2 bg-red-800 text-white text-sm rounded-md mt-9">
              <a href={url} target="_blank">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
