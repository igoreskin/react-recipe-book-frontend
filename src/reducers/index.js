import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
})

export default rootReducer;
