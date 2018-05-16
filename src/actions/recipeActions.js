import fetch from 'isomorphic-fetch';

export function fetchRecipes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_RECIPES'});
    return fetch('http://localhost:3001/recipes')
    .then(response => response.json())
    .then(responseJSON => {const recipes = responseJSON;
      return (dispatch({type: 'FETCH_RECIPES', payload: recipes}))
    })
  }
}

export function addRecipe(recipe, history) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RECIPES'});
    return fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(recipe)
    })
    .then(response => response.json())
    .then(responseJSON => {const recipe = responseJSON;
      return (dispatch({type: 'ADD_RECIPE', payload: recipe}))
    })
  }
}

export function deleteRecipe(recipe, history) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RECIPES'});
    return fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(recipe)
    })
    .then(response => response.json())
    .then(responseJSON => {const recipe = responseJSON;
      return (dispatch({type: 'DELETE_RECIPE', payload: recipe}))
    })
  }
}
