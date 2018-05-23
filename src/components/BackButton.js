import React from 'react';
import { Link } from 'react-router-dom';

const handleOnClick = () => {
  window.location.reload()
}


export const BackButton = () => {
  return (
    <button className="backFromNewToListButton" onClick={handleOnClick}>
      <Link style={{textDecoration: "none"}} to={`/recipes`}>Back to All Recipes</Link>
    </button>
  )
}
