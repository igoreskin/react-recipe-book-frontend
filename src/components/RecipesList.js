import React from 'react';
import Recipe from './Recipe';
import SearchForm from '../containers/SearchForm';
import { BackButton } from './BackButton';

const RecipesList = (props) => {
  const sortedRecipes = props.recipes.sort((a, b) => a.likes < b.likes ? 1 : -1);
  // console.log(sortedRecipes);
  const renderRecipes = sortedRecipes.map((recipe) =>
    <Recipe recipe={recipe} key={recipe.id} />
  );

  return (
    <div>
      <SearchForm /><br/><br/><br/>
      {renderRecipes}
      <BackButton />
    </div>
  )
}

export default RecipesList;
