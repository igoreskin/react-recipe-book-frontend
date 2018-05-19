import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRecipe } from '../actions/recipeActions';
import { BackButton } from '../components/BackButton';
// import { bindActionCreators } from 'redux';

class RecipeEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.recipe.title,
      ingredients: this.props.recipe.ingredients,
      id: this.props.recipe.id
    };
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const { updateRecipe, history } = this.props
    updateRecipe(this.state);
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
        <h2>Edit This Recipe</h2>
        <form className="tile" style={{padding: "10px"}} onSubmit={this.handleOnSubmit} >
          <input className="input" style={{fontSize: "14px"}} type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleOnChange} /><br /><br />
          <textarea className="input" rows="10" placeholder="Ingredients" name="ingredients" value={this.state.ingredients} onChange={this.handleOnChange} /><br /><br />
          <input className="backFromNewToListButton" type="submit" value="Save Changes" />
        </form>
        <BackButton />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.recipeId, 10));

  if (recipe) {
    console.log(recipe)
    return {recipe: recipe}
  } else {
  return { recipe: {}};
  }
};


export default connect(mapStateToProps, {updateRecipe})(RecipeEditForm);
