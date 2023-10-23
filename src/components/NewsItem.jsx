import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class NewsItem extends Component {
  static defaultProps = {
    title : "News Title",
    description : "News Description",
    imgUrl : "https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg",
    newsUrl : "/",
    mode : "light"
}
  static propTypes = {
    title : PropTypes.string,
    description : PropTypes.string,
    imgUrl : PropTypes.string,
    newsUrl : PropTypes.string,
    mode : PropTypes.string
}

  render() {
    let {title,description,imgUrl,newsUrl,mode,author,date} = this.props;
    return (
      <div className = "my-3">
        <div className="card" style={{width: "100%", height: "450px", overflowY:"auto", backgroundColor:mode === "light" ? "white" : "#232D3F", scrollbarColor:mode === "light" ? "light" : "dark"}}>
          <img src={imgUrl?imgUrl:"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"} className="card-img-top" alt="..."/>
          <div className={`card-body text-${mode === "light" ? "dark" : "light"}`}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small>Last updated by {author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-sm btn-${mode === "light" ? "primary" : "dark"}`}>Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem