import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipeActions';
import { Link } from 'react-router-dom';

class Recipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

  }

  onClick = () => {
    this.props.actions.deleteRecipe(this.props.recipe);
    console.log('clicked', this.props.recipe.id, this.props);
    console.log(this.props.actions.deleteRecipe)
  }

  // handleOnLikeClick = (event) => {
  //   this.setState({
  //     counter: ++this.state.counter,
  //   })
  //   console.log(++this.props.recipe.likes)
  // }

  handleOnLikeClick = () => {
    const recipe = this.props.recipe;
    const count = ++this.props.recipe.likes;
    this.props.actions.like(recipe, count)
  }

  render() {
    return (
      <div className="tile">
        <button className="editButton">
          <Link style={{textDecoration: "none"}} to={`/recipes/${this.props.recipe.id}`}>Edit</Link>
        </button>
        <span className="deleteButton" onClick={() => { if (window.confirm("Are you sure you want to delete this recipe?")) this.onClick() }}>X</span>
        <h4>{this.props.recipe.title}</h4>
        <p>{this.props.recipe.ingredients}</p>

        <p>
          <button className="like" onClick={(event) => this.handleOnLikeClick(event)}>
            Like  <i className="fa fa-thumbs-up" style={{color: '#FF00FF'}}></i>
          </button>
          &nbsp;&nbsp;Likes: <span className="w3-tag">&nbsp;&nbsp;{this.props.recipe.likes}&nbsp;&nbsp;</span>
        </p>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(Recipe);
