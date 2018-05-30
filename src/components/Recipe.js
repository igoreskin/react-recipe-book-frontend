import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipeActions';
import { Link } from 'react-router-dom';

const Recipe = (props) => {

  const onClick = () => {
    props.actions.deleteRecipe(props.recipe);
    console.log('clicked', props.recipe.id, props);
    console.log(props.actions.deleteRecipe)
  }

  const callApi = () => {
    console.log('a')
    fetch('http://localhost:3001/recipes')
    .then(response => {
      console.log('b')
      return response.json()
    })
    .then(responseJSON => console.log('c',responseJSON))
    .catch(err => console.log('d', err))
    console.log('e')

    // a b c+json e

    //a e b c+json
  }

  const handleOnLikeClick = () => {
    const recipe = props.recipe;
    props.actions.like(recipe)
  }

  return (
    <div className="tile">
      <button className="editButton">
        <Link style={{textDecoration: "none"}} to={`/recipes/${props.recipe.id}`}>Edit</Link>
      </button>
      <span className="deleteButton" onClick={() => { if (window.confirm("Are you sure you want to delete this recipe?")) onClick() }}>X</span>
      <h4>{props.recipe.title}</h4>
      <p>{props.recipe.ingredients}</p>

      <p>
        <button className="like" onClick={(event) => handleOnLikeClick(event)}>
          Like  <i className="fa fa-thumbs-up" style={{color: '#FF00FF'}}></i>
        </button>
        &nbsp;&nbsp;Likes: <span className="w3-tag">&nbsp;&nbsp;{props.recipe.likes}&nbsp;&nbsp;</span>
      </p>
      <button onClick={() => callApi()}>Call Api</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(Recipe);
