import React, { Component } from 'react'
import News from "./News";
// import NewsItem from "./NewsItem";
export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
       
            <h2 className='text-blue-700 text-xl font-medium ps-1'>{title}</h2>
            <p className='card-desc ps-1 text-black text-lg'>{description}</p>
          </div>
  
    )
  }
}

export default NewsItem

