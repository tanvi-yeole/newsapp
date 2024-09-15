import React, { useEffect } from "react";
import News from "../components/News";
import NewsCard from "../components/Newscard";

const Music = ({ category }) => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=35353a5cc55c45ffa40caf1ae046ad00`;
      const response = await fetch(url,{
        mode:'cors',
        headers:{
          'Access-Control-Allow-Origin':'*'
        }
      });
      const data = await response.json();
      console.log(data.articles);
      setData(data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-4 text-2xl flex gap-5 flex-wrap justify-center items-center py-5 px-10 flex-col">
      <div className="text-center">
        <h3 className="font-bold text-3xl">
          Top Headlines -{" "}
          {category.charAt(0).toUpperCase() +
            category.slice(1, category.length)}
        </h3>
      </div>
      {/* <News /> */}
      <div className="flex gap-2 flex-wrap justify-center ">
        {data.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            imgSrc={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
