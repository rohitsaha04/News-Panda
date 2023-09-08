import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            
          
        <span class="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={!imageUrl ? "https://helios-i.mashable.com/imagery/articles/0010t7IKDM6IcbdXEwDZU8z/hero-image.fill.size_1200x675.v1655283452.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

//  dd93c3dc002144b1b304b55b927b16fd