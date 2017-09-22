import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
