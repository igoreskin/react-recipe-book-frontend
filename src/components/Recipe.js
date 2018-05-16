import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipeActions';

const Recipe = (props) => {

  const onClick = () => {
    props.actions.deleteRecipe(props.recipe);
    console.log('clicked', props.recipe.id);
    console.log(props.actions.deleteRecipe)
  }

  return (
    <div className="tile">
      <span className="deleteButton" onClick={onClick}>X</span>
      <h4>{props.recipe.title}</h4>
      <p>{props.recipe.ingredients}</p>
    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(Recipe);
