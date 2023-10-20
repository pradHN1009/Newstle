import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    let title = "Headlines"
    let desc = "Some random nonsense about headlines"
    let data = require("../NewsOutput.json")
    return (
      <div className="container my-3 mx-3">
        <div className="row gx-3">
            <div className="col-sm-12 col-md-4 col-lg-3">
            <NewsItem title = {data.articles[0].title} description = {data.articles[0].description} imgUrl = {data.articles[0].urlToImage} />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
            <NewsItem title = {data.articles[1].title} description = {data.articles[1].description} imgUrl = {data.articles[1].urlToImage}/>
            </div> 
            <div className="col-sm-12 col-md-4 col-lg-3">
            <NewsItem title = {data.articles[2].title} description = {data.articles[2].description} imgUrl = {data.articles[2].urlToImage}/>
            </div> 
            <div className="col-sm-12 col-md-4 col-lg-3">
            <NewsItem title = {data.articles[3].title} description = {data.articles[3].description} imgUrl = {data.articles[4].urlToImage}/>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
            <NewsItem title = {data.articles[4].title} description = {data.articles[4].description} imgUrl = {data.articles[4].urlToImage}/>
            </div> 
        </div>
     </div>
    )
  }
}
