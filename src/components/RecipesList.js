import React from 'react';
import Recipe from './Recipe';

const RecipesList = (props) => {
  const sortedRecipes = props.recipes.sort((a, b) => a.created_at < b.created_at ? 1 : -1);
  console.log(sortedRecipes);
  const renderRecipes = sortedRecipes.map((recipe) =>
    <Recipe recipe={recipe} key={recipe.id} />
  );

  return (
    <div>
      {renderRecipes}
    </div>
  )
}

export default RecipesList;
