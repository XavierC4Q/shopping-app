import React from 'react'

const FoodButtons = ({produce, func}) => (
  <div className="buttonWrap">
    {produce.map(items=>(
      <button className="buttons"
      name={items.name}
      onClick={func}>
        {items.name}
      </button>
    ))}
  </div>
)

export default FoodButtons
