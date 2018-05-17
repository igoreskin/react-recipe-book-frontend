import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipeActions';
import { Link } from 'react-router-dom';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addRecipe, history } = this.props
    console.log(this.props)
    addRecipe(this.state);
    history.push('/recipes');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Recipe</h2>
        <form className="tile" style={{padding: "10px"}} onSubmit={this.handleOnSubmit} >
          <input className="input" type="text" placeholder="Title" name="title" onChange={this.handleOnChange} /><br /><br />
          <textarea className="input" rows="10" type="textarea" placeholder="Ingredients" name="ingredients" onChange={this.handleOnChange} /><br /><br />
          <input className="backFromNewToListButton" type="submit" value="Add This Recipe" />
        </form>
        <button className="backFromNewToListButton">
          <Link style={{textDecoration: "none"}} to={`/recipes`}>Back to All Recipes</Link>
        </button>
      </div>
    );
  }
};

export default connect(null, { addRecipe })(RecipeForm);
