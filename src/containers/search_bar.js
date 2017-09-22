import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchBooks, setSearchTerm } from '../actions/index';

import './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.props.searchBooks('ReactJs');
    this.props.setSearchTerm('ReactJs');
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    if (this.state.term === '') return;

    // We need to go and fetch books data
    this.props.searchBooks(this.state.term);
    this.props.setSearchTerm(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Search books on iTune store"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBooks, setSearchTerm }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
