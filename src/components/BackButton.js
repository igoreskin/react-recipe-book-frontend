import React from 'react';
import { Link } from 'react-router-dom';


export const BackButton = () => {
  return (
    <button className="backFromNewToListButton">
      <Link style={{textDecoration: "none"}} to={`/recipes`}>Back to All Recipes</Link>
    </button>
  )
}
