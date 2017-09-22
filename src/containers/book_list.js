import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Panel, ListGroup } from 'react-bootstrap';
import BookListItem from './book_list_item';
import './book_list.css';

class BookList extends Component {

  renderBook(book) {
    return (
      <BookListItem key={book.trackId} book={book} />
    );
  }

  renderHeader() {
    return (
      <div style={{ height: '14pt' }}>
        <div style={{ float: 'left' }}>
          {`Term: ${this.props.searchTerm}`}
        </div>
        <Badge pullRight style={{ opacity: '0.25' }}>
          {this.props.books && this.props.books.resultCount}
        </Badge>
      </div>
    );
  }

  render() {
    return (
      <div className="books-list col-md-4">
        <Panel header={this.renderHeader()}>
          <ListGroup fill>
            {this.props.books.results && this.props.books.results.map(this.renderBook)}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps({ books, searchTerm }) {
  return { books, searchTerm };
}

export default connect(mapStateToProps)(BookList);
