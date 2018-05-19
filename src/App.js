import React from 'react';
import './App.css';
import RecipesContainer from './containers/RecipesContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeForm from './containers/RecipeForm';
import RecipeShow from './components/RecipeShow';
import RecipeEditForm from './containers/RecipeEditForm';
import { LaunchButton } from './components/LaunchButton';

const App = (props) => {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Book</h1>
          </header>
          <Route exact path='/' render={LaunchButton} />
          <Route exact path='/recipes' component={RecipesContainer}/>
          <Switch>
            <Route path='/recipes/new' component={RecipeForm} />
            <Route path='/recipes/:recipeId/edit' component={RecipeEditForm} />
            <Route path='/recipes/:recipeId' component={RecipeShow} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
