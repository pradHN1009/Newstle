import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>  {
const [newsArticles, setnewsArticles] = useState([])
const [loading, setloading] = useState(false)
const [page, setpage] = useState(1)
const [pageSize, setpageSize] = useState(20)
const [totalResults, settotalResults] = useState(0)
const [hasMore, sethasMore] = useState(true)
const {setProgress, apiKey, mode, country, category} = props;



const capitalize = (word) => {
    return (word[0].toUpperCase() + word.slice(1))
}

document.title = `Newstle - ${capitalize(category)}`
const fetchMoreData = async () => {
    setpage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setnewsArticles(newsArticles.concat(data.articles))
    settotalResults(data.totalResults)
    sethasMore(newsArticles.length < totalResults)
}

const updateNews = async () => {
    setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setloading(true)
    setProgress(20)
    let response = await fetch(url);
    setProgress(40)
    let data = await response.json();
    setProgress(70)
    setnewsArticles(data.articles)
    settotalResults(data.totalResults)
    setloading(false)
    setProgress(100)
}
useEffect(() => {
  updateNews()
}, [])



    return (
      <>
        <div className={`container my-3 text-${mode === "light" ? "dark" : "light"}`}>
            <h1 className= "text-center" style={{margin : "35px"}}>Top {capitalize(category)} Headlines</h1>
        </div>
        <InfiniteScroll
          dataLength={newsArticles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner/>}
        >
            <div className="container">
                <div className="row gx-3">
                    {newsArticles.map((data,index)=>{
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

News.defaultProps = {
    setProgress : () => {},
    apiKey : "",
    mode : "light",
    country : "in",
    category : "general"
}
News.propTypes = {
    setProgress : PropTypes.func,
    apiKey : PropTypes.string,
    mode : PropTypes.string,
    country : PropTypes.string,
    categiry : PropTypes.string
}

export default News