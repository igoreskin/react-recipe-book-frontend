import React from 'react';
import { connect } from 'react-redux';

const RecipeShow = ({ recipe }) => {
  return (
  <div className="tile">
    <h4>Title: {recipe.title}</h4>
    <p>Ingredients: {recipe.ingredients}</p>
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

export default connect(mapStateToProps)(RecipeShow);
