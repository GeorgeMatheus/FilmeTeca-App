import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StarRating() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    console.log(rate)
    // other logic
  }

  return (
    <div>
      <Rating onClick={handleRating} ratingValue={rating} allowHalfIcon transition size={30}/* Available Props */ />
    </div>
  )
}