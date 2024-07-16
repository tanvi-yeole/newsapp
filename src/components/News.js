import React, { Component } from "react";
import NewsItem from "./NewsItem";
import charg from "../Images/charg.jpg";
// import News from "./News";
import { Link } from "react-router-dom";
import mob from "../Images/mob.jpg";
import ai from "../Images/ai.jpg";
import pc from "../Images/pc.jpg";
export class News extends Component {
  render() {
    return (
      <div className="mx-20">
        <b>
          <h2 className="text-center mt-10 text-2xl">Newser-top headlines</h2>
        </b>
        <div className="flex flex-row mt-14 ps-24 h-80">
          <div className="col-md-4 mx-8 border-4 border-gray-950 w-80 rounded-xl">
            <div className="flex flex-col ms-3 rounded mt-1 border-2 border-red-700 w-72 h-20">
              <NewsItem
                title="AI is taking over the IT sector"
                description="mydesc"
              />
              <Link className="underline text-blue-600 text-sm">
              Read More</Link>

            </div>
            <img className="h-52 object-center ps-3 mt-1 px-3" src={ai} alt="" />

          </div>
          <div className="col-md-4 mx-8 border-4 border-gray-950 w-80 rounded-xl">
            <div className="flex flex-col ms-3 mt-1 border-2 border-black w-72 h-20 rounded">
              <NewsItem
                title="Iphone 16 Launching"
                description="Iphone's Best version is on the way"/>
              <Link className="underline text-blue-600 text-sm">
              Read More</Link>
            </div>
            <img className="h-52 object-center ps-3 mt-1 px-3" src={mob} alt="" />
          </div>
          <div className="col-md-4 mx-8 border-4 border-gray-950 w-80 rounded-xl">
            <div className="flex flex-col ms-3 mt-1 border-2 border-black w-72 h-20 rounded">
              <NewsItem title="Hp PAvilion" description="New Launch Ryzen-7" />
              <Link className="underline text-blue-600 text-sm">
              Read More</Link>
            </div>
            <img className="h-52 object-center ps-3 mt-1 px-3" src={ai} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default News;
