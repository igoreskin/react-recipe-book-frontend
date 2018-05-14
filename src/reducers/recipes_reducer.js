function recipesReducer(state = {loading: false, recipes: []}, action) {
  switch(action.type) {
    case 'LOADING_RECIPES':
      // return Object.assign({}, state, {loading: true})
      return {...state, loading: true}
    case 'FETCH_RECIPES':
      return {loading: false, recipes: action.payload};
    default:
      return state;
  }
}

export default recipesReducer;
