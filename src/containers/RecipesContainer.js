import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipeActions';
import RecipesList from '../components/RecipesList';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import RecipeShow from '../components/RecipeShow';

class RecipesContainer extends Component {

  componentDidMount() {
    // if (this.props.recipes.length === 0) {
      // console.log('in component did mount')
      console.log(this.props.match.url)
      this.props.actions.fetchRecipes()
    // }
  }

  render() {
    return(
      <div>
        <div>
          <button className="newRecipeButton">
            <Link style={{color: "white", textDecoration: "none"}} to={`${this.props.match.url}/new`}>New Recipe</Link>
          </button>
        </div>
        <div>
          <RecipesList recipes={this.props.recipes} />
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={RecipeForm} />
            <Route path={`${this.props.match.url}/:recipeId`} component={RecipeShow} />
          </Switch>
        </div>
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
