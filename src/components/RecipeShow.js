import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const RecipeShow = (props) => {
  return (
  <div className="tile">
    <button className="editRecipeButton">
      <Link style={{textDecoration: "none"}} to={`/recipes/new`}>New Recipe</Link>
    </button>
    <button className="backToListButton">
      <Link style={{textDecoration: "none"}} to={`/recipes`}>Back to Recipes</Link>
    </button>
    <h4>Title: {props.recipe.title}</h4>
    <p>Ingredients: {props.recipe.ingredients}</p>
  </div>
)}

const mapStateToProps = (state, ownProps) => {
  console.log(parseInt(ownProps.match.url.slice(-1)))
  console.log(state.recipes)
  const recipe = state.recipes.recipes.find(recipe => recipe.id === parseInt(ownProps.match.url.slice(-1), 10));

  if (recipe) {
    console.log(recipe)
    return {recipe: recipe}
  } else {
  return { recipe: {}};
  }
};

export const WrapRecipeShow = connect(mapStateToProps)(RecipeShow);
