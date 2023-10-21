import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

constructor(){
    super();
    this.state = {
        newsArticles : [],
        loading : false,
        page:1
    }
}
previousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page-1}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({newsArticles : data.articles, page : this.state.page-1})
}
nextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page+1}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({newsArticles : data.articles, page : this.state.page+1})
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({newsArticles : data.articles}) // this also works - this.setState(this.state.newsArticles = data.articles);
}
render() {
    return (
      <div className="container my-3 mx-3">
        <div className="row gx-3">
            {this.state.newsArticles.map((data)=>{
                return <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key = {data.url}>
                <NewsItem  title = {data.title} description = {data.description} imgUrl = {data.urlToImage} newsUrl = {data.url}/>
                </div>
            })}
            </div>
        <div className="container my-3 d-flex justify-content-between">
        <button type="button" disabled = {this.state.page<=1?true:false} class="btn btn-primary" onClick = {this.previousClick}>&larr; Previous</button>
        <button type="button" class="btn btn-primary" onClick = {this.nextClick}>Next &rarr;</button>
        </div>
     </div>
    )
  }
}
