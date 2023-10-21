import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className = "my-3">
        <div className="card" style={{width: "100%", height: "450px", overflowY:"auto"}}>
            <img src={imgUrl?imgUrl:"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem