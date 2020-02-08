// IMPORT DEPENDENCIES
import React from 'react'

const ArticlesCard = ({ title, image, author, description, url }) => (
  <a href={url}>
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{title}</h4>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={author} />
        </figure>
      </div>
      <div className="card-content">
        <h5 className="title is-6">{description}</h5>
        <h6 className="subtitle is-6">{author}</h6>
      </div>
    </div>
  </a>
)

export default ArticlesCard