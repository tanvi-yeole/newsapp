import React, { useEffect } from "react";
import News from "../components/News";
import NewsCard from "../components/Newscard";

const Homepage = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=35353a5cc55c45ffa40caf1ae046ad00";
        const response = await fetch(url,{
          mode:'cors',
          headers:{
            'Access-Control-Allow-Origin':'*'
          }
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.articles);
        setData(data.articles);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mx-4 text-2xl flex gap-5 flex-wrap justify-center items-center py-5 px-10 flex-col">
      <div className="text-center">
        <h3 className="font-bold text-3xl">Top Headlines</h3>
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

export default Homepage;
