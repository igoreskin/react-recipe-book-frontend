import React, { Component } from 'react';
import './App.css';
import RecipesContainer from './containers/RecipesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Book</h1>
        </header>
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
