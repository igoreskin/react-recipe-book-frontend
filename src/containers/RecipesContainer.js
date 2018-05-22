import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipeActions';
import RecipesList from '../components/RecipesList';
import { NewButton } from '../components/NewButton';
import { BackButton } from '../components/BackButton';

class RecipesContainer extends Component {

  componentDidMount() {
    // if (this.props.recipes.length === 0) {
      // console.log('in component did mount')
      // console.log(this.props.match.url)
      this.props.actions.fetchRecipes()
    // }
  }

  handleOnClick = () => {

  }

  render() {
    return(
      <div>
        <div>
          <NewButton url={this.props.match.url} />
        </div>
        <div>
          <RecipesList recipes={this.props.recipes} />
        </div>
        <div><BackButton /></div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
