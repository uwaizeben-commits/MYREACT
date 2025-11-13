import React from 'react'
import './card.css'

const Card = ({ product }) => {
  const { title, description, price, rating, image } = product

  return (
    <div className="card-item">
      <div className="image-wrap">
        <img
          src={image}
          alt={title}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null
            // tiny inline SVG placeholder
            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="20">No image</text></svg>'
          }}
        />
      </div>
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <p className="price">Price: ${price}</p>
      {rating && <p className="rating">Rating: {rating.rate}</p>}
    </div>
  )
}

export default Card
