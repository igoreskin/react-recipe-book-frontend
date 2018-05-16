function recipesReducer(state = {loading: false, recipes: []}, action) {
  switch(action.type) {
    case 'LOADING_RECIPES':
      // return Object.assign({}, state, {loading: true})
      return {...state, loading: true}
    case 'FETCH_RECIPES':
      return {loading: false, recipes: action.payload};
    case 'ADD_RECIPE':
      const recipe = action.payload;
      return {loading: false, recipes: [...state.recipes, recipe]}
    case 'DELETE_RECIPE':
      const delRecipe = action.payload;
      const filteredRecipes = state.recipes.filter(el => el.id !== delRecipe.id)
      return {loading: false, recipes: filteredRecipes}

    default:
      return state;
  }
}

export default recipesReducer;
