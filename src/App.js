import React from 'react';
import './App.css';
import RecipesContainer from './containers/RecipesContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RecipeForm from './containers/RecipeForm';
import { WrapRecipeShow } from './components/RecipeShow';

const App = (props) => {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Book</h1>
          </header>
          <Route exact path='/' render={() => (<Link className="launchButton" to={'/recipes'}>Please click here to launch the application!</Link>)} />
          <Route exact path='/recipes' component={RecipesContainer}/>
          <Switch>
            <Route path='/recipes/new' component={RecipeForm} />
            <Route path='/recipes/:recipeId' component={WrapRecipeShow} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
