import React from 'react';
import { connect } from 'react-redux';

const RecipeShow = ({ recipe }) =>
  <div className="tile">
    <h4>{recipe.title}</h4>
    <p>{recipe.ingredients}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
// console.log(ownProps.match.params.recipeId)
console.log(state.recipes)
  const recipe = state.recipes.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.recipeId, 10));

  if (recipe) {
    console.log(recipe)
    return {recipe: recipe}
  } else {
  return { recipe: {}};
  }
};

export default connect(mapStateToProps)(RecipeShow);
