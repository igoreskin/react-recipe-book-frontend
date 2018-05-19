import React from 'react';
import { Link } from 'react-router-dom';


export const NewButton = (props) => {
  console.log(props)
  return (
    <button className="newRecipeButton">
      <Link style={{color: "white", textDecoration: "none"}} to={`${props.url}/new`}>New Recipe</Link>
    </button>
  )
}
