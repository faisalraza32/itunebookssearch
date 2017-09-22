import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ListGroupItem, Media } from 'react-bootstrap';
import { setSelectedBook } from '../actions/index';

class BookListItem extends Component {
  constructor(props) {
    super(props);
    this.setCurrentBook = this.setCurrentBook.bind(this);
  }

  setCurrentBook() {
    this.props.setSelectedBook(this.props.book);
  }

  render() {
    const { book } = this.props;
    const imageUrl = book.artworkUrl100;
    return (
      <ListGroupItem>
        <Media onClick={() => this.setCurrentBook()}>
          <Media.Left>
            <img src={imageUrl} alt={book.trackName} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{book.trackName}</Media.Heading>
            Author: <i>{book.artistName}</i><br />
            Price: <i>{book.formattedPrice}</i>
          </Media.Body>
        </Media>
      </ListGroupItem>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookListItem);
