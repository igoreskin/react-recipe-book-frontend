import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const RecipeShow = (props) => {
  return (
  <div className="tile">
    <button className="editRecipeButton">
      <Link style={{textDecoration: "none"}} to={`/recipes/${props.recipe.id}/edit`}>Edit This Recipe</Link>
    </button>
    <button className="backToListButton">
      <Link style={{textDecoration: "none"}} to={`/recipes`}>Back to Recipes</Link>
    </button>
    <h4>Title: {props.recipe.title}</h4>
    <p>Ingredients: {props.recipe.ingredients}</p>
  </div>
)}

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.recipeId, 10));

  if (recipe) {
    return {recipe: recipe}
  } else {
  return { recipe: {}};
  }
};

export default connect(mapStateToProps)(RecipeShow);
