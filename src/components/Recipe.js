import React from 'react';

const Recipe = ({recipe}) => {
  return (
    <div className="tile">
      <h4>{recipe.title}</h4>
      <p>{recipe.ingredients}</p>
    </div>

  )
}

export default Recipe;
