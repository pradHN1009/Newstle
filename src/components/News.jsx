import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
constructor(props){
    super(props);
    this.state = {
        newsArticles : [],
        loading : false,
        page:1,
        pageSize:20,
        totalResults : 0,
        hasMore : true
    }
    document.title = `Newstle - ${this.capitalize(this.props.category) }`
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
fetchMoreData = async () => {
    this.setState({page : this.state.page+1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=05edbb607b1a4bd481fef3f953a611d2&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    this.setState({newsArticles : this.state.newsArticles.concat(data.articles), totalResults : data.totalResults, hasMore : this.state.newsArticles.length < this.state.totalResults})
}
async componentDidMount(){
    this.updateNews()
}
render() {
    const {mode, category} = this.props;
    return (
      <>
        <div className={`container my-3 text-${mode === "light" ? "dark" : "light"}`}>
            <h1 className= "text-center" style={{margin : "35px"}}>Top {this.capitalize(category)} Headlines</h1>
        </div>
        <InfiniteScroll
          dataLength={this.state.newsArticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner/>}
        >
            <div className="container">
                <div className="row gx-3">
                    {this.state.newsArticles.map((data,index)=>{
                        return <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key = {index}>
                        <NewsItem  title = {data.title} description = {data.description} imgUrl = {data.urlToImage} newsUrl = {data.url} mode = {mode} author = {data.author} date = {data.publishedAt}/>
                        </div>
                    })}
                    </div>
            </div>
            </InfiniteScroll>
            </>
    )
  }
}
