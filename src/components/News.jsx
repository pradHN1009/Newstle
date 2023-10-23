import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
static defaultProps = {
    mode : "light",
    country : "in",
    category : "general"
}
static propTypes = {
    mode : PropTypes.string,
    country : PropTypes.string,
    categiry : PropTypes.string
}
constructor(){
    super();
    this.state = {
        newsArticles : [],
        loading : false,
        page:1,
        pageSize:20,
        totalResults : 0
    }
}

capitalize = (word) => {
    return (word[0].toUpperCase() + word.slice(1))
}
updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading : true})
    let response = await fetch(url);
    let data = await response.json();
    this.setState({newsArticles : data.articles, totalResults : data.totalResults, loading : false})
}
previousClick = async () => {
    this.setState({page:this.state.page - 1})
    this.updateNews()
}

nextClick = async () => {
    this.setState({page:this.state.page + 1})
    this.updateNews()
}
async componentDidMount(){
    this.updateNews()
}
render() {
    const {mode, category} = this.props;
    return (
      <div className="container my-3 mx-3">
        <div className={`container my-3 text-${mode === "light" ? "dark" : "light"}`}>
            <h1 className= "text-center" style={{margin : "35px"}}>Top {this.capitalize(category)} Headlines</h1>
        </div>
        {this.state.loading && <Spinner/>}
        <div className="row gx-3">
            {!this.state.loading && this.state.newsArticles.map((data)=>{
                return <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key = {data.url}>
                <NewsItem  title = {data.title} description = {data.description} imgUrl = {data.urlToImage} newsUrl = {data.url} mode = {mode} author = {data.author} date = {data.publishedAt}/>
                </div>
            })}
            </div>
        <div className="container my-3 d-flex justify-content-between">
        <button type="button" disabled = {this.state.page<=1?true:false} className={`btn btn-${mode === "light" ? "primary" : "dark"}`} onClick = {this.previousClick}>&larr; Previous</button>
        <button type="button" disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} className={`btn btn-${mode === "light" ? "primary" : "dark"}`} onClick = {this.nextClick}>Next &rarr;</button>
        </div>
     </div>
    )
  }
}
