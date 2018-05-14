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
