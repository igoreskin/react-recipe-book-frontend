import React, { Component } from 'react';
import './App.css';
import RecipesContainer from './containers/RecipesContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeForm from './containers/RecipeForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Book</h1>
          </header>
          <Route exact path='/' component={RecipesContainer}/>
          <Route path='/new' component={RecipeForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
