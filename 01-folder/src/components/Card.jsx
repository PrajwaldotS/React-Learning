import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="top">
        <h1>{card.heading}</h1>
        <p>{card.tagline}</p>
      </div>
      <div className="tags">
        {card.tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Card;

