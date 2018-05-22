import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipe } from '../actions/recipeActions';
// import { BackButton } from '../components/BackButton';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    event.target.reset();
    console.log(this.state.search)
    this.props.searchRecipe(this.state.search);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="search" style={{margin: "auto", maxWidth: "300px"}} onSubmit={this.handleOnSubmit} >
          <input type="text" placeholder="Search by title.." name="search" onChange={this.handleOnChange} />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    );
  }
};

export default connect(null, { searchRecipe })(SearchForm);
