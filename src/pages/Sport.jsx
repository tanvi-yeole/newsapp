import React, { useEffect } from "react";
import News from "../components/News";
import NewsCard from "../components/Newscard";

const Sport = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=35353a5cc55c45ffa40caf1ae046ad00";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.articles);
      setData(data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-4 my-4 text-2xl flex gap-5 flex-wrap justify-center items-center">
      {/* <News /> */}
      {data.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          description={news.description}
          imgSrc={news.urlToImage}
          url={news.url}
        />
      ))}
      <div>
        <div className="container flex flex-justify-between"/>
        <button type="button class="bg-red-500> &larr; Previous</button>
        <button type="button class="bg-red-500>Next &rarr;</button>
      </div>
    </div>
    
  );
};

export default Sport;
