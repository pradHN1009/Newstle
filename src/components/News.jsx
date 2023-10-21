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
previousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
    this.setState({loading : true})
    let response = await fetch(url);
    let data = await response.json();
    this.setState({newsArticles : data.articles, page : this.state.page-1, loading : false})
}

nextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
    this.setState({loading : true})
    let response = await fetch(url);
    let data = await response.json();
    this.setState({newsArticles : data.articles, page : this.state.page+1, loading : false})
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading : true})
    let response = await fetch(url);
    let data = await response.json();
    this.setState({newsArticles : data.articles, totalResults : data.totalResults, loading : false}) // this also works - this.setState(this.state.newsArticles = data.articles);
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
                <NewsItem  title = {data.title} description = {data.description} imgUrl = {data.urlToImage} newsUrl = {data.url} mode = {mode}/>
                </div>
            })}
            </div>
        <div className="container my-3 d-flex justify-content-between">
        <button type="button" disabled = {this.state.page<=1?true:false} class="btn btn-primary" onClick = {this.previousClick}>&larr; Previous</button>
        <button type="button" disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} class="btn btn-primary" onClick = {this.nextClick}>Next &rarr;</button>
        </div>
     </div>
    )
  }
}
