function recipesReducer(state = {loading: false, recipes: []}, action) {
  switch(action.type) {
    case 'LOADING_RECIPES':
      return {...state, loading: true}
    case 'FETCH_RECIPES':
      return {loading: false, recipes: action.payload};
    case 'ADD_RECIPE':
      const recipe = action.payload;
      return {loading: false, recipes: [...state.recipes, recipe]}
    case 'UPDATE_RECIPE':
      const updRecipe = action.payload;
      const recipeToUpdate = state.recipes.find(el => el.id === updRecipe.id)
      const index = state.recipes.indexOf(recipeToUpdate)
      const updatedRecipes = [...state.recipes.slice(0, index), updRecipe, ...state.recipes.slice(index + 1)]
      return {loading: false, recipes: updatedRecipes}
    case 'DELETE_RECIPE':
      const delRecipe = action.payload;
      const filteredRecipes = state.recipes.filter(el => el.id !== delRecipe.id)
      return {loading: false, recipes: filteredRecipes}
    case 'SEARCH_RECIPE':
      const selected = [];
      const searchTerm = action.payload;
      state.recipes.forEach((el) => {if (el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        selected.push(el)
      }});
      if (selected.length === 0) {
      console.log(selected)
        window.alert("Recipe not found, please try another title!")
        return {loading: false, recipes: state.recipes}
      }
      return {loading: false, recipes: selected}

    default:
      return state;
  }
}

export default recipesReducer;
