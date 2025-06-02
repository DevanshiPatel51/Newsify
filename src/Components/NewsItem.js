import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, source, author } = this.props
    return (
      <div>
        <div className="card ">
          <span className=" badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", zIndex: 1, right: "0" }} >From:&nbsp;<strong>{source}</strong> </span>
          <img src={imgUrl ? imgUrl : "https://www.investors.com/wp-content/uploads/2025/05/Stock-AppLovin-wallart-01-company.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <div className="card-footer text-body-secondary"> By <strong>{!author ? "Unknown" : author}</strong> </div>
            <br />
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div >
    )
  }
}

export default NewsItem
