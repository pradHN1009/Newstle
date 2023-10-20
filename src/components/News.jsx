import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

data = require("../NewsOutput.json")
constructor(){
    super();
    this.state = {
        newsArticles : this.data,
        loading : false
    }
}
render() {
    // let data = {}
    // fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=05edbb607b1a4bd481fef3f953a611d2").then(response => response.json()).then(newsData => this.data = newsData)
    return (
      <div className="container my-3 mx-3">
        <div className="row gx-3">
            {this.state.newsArticles.articles.map((data)=>{
                return <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <NewsItem key = {data.url} title = {data.title} description = {data.description} imgUrl = {data.urlToImage} />
                </div>
            })}
            </div>
     </div>
    )
  }
}
