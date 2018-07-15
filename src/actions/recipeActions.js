import fetch from 'isomorphic-fetch';

const RECIPES_LINK = process.env.REACT_APP_RECIPES_LINK

export function fetchRecipes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_RECIPES'});
    return fetch(RECIPES_LINK, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      }
    })
    .then(response => response.json())
    .then(responseJSON => {const recipes = responseJSON;
      return (dispatch({type: 'FETCH_RECIPES', payload: recipes}))
    }).catch(error => {
      console.log(error)
    })
  }
}


export function addRecipe(recipe, history) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RECIPES'});
    return fetch(RECIPES_LINK, {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(recipe)
    })
    .then(response => response.json())
    .then(responseJSON => {const recipe = responseJSON;
      history.push('/recipes');
      return (dispatch({type: 'ADD_RECIPE', payload: recipe}))
    })
  }
}


export function updateRecipe(recipe) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RECIPES'});
    console.log(recipe)
    return fetch(`${RECIPES_LINK}/${recipe.id}`, {
      method: 'PUT',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(recipe)
    })
    .then(response => response.json())
    .then(responseJSON => {const recipe = responseJSON;
      return (dispatch({type: 'UPDATE_RECIPE', payload: recipe}))
    })
  }
}



export function like(recipe) {
  const updatedRecipe = Object.assign({}, recipe, {likes: recipe.likes + 1})
  return (dispatch) => {
    return fetch(`${RECIPES_LINK}/${recipe.id}`, {
      method: 'PUT',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        },
        body: JSON.stringify(updatedRecipe)
      }
    ).then(res => {
      return res.json()
    }).then(recipe => {
      dispatch({type: 'LIKE', payload: recipe})
    })
  }
}



export function deleteRecipe(recipe) {
 return (dispatch) => {
  dispatch({type: 'DELETE_RECIPE',
  payload: recipe
  })
   dispatch({type: 'LOADING_RECIPES'});
   return fetch(`${RECIPES_LINK}/${recipe.id}`, {
     method: 'DELETE',
     headers: {
       'Accept': "application/json",
       'Content-Type': "application/json",
     },
     body: JSON.stringify(recipe)
   }
  )
 }
}

export function searchRecipe(search) {
  return {
    type: "SEARCH_RECIPE",
    payload: search
  }
}
