import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';

import './book_detail.css';

class BookDetail extends Component {
  render() {
    const { book } = this.props;
    if (book == null) return <div />;
    const imageUrl = _.replace(book.artworkUrl100, '100x100', '240x240');
    return (
      <div className="col-md-8">
        <Panel header={book.trackName}>
          <p>
            Author: <b>{book.artistName}</b>
          </p>
          <p>
            Price: <b>{book.formattedPrice}</b>
          </p>
          <img className="book-image" src={imageUrl} />
          <p>Detail : <span dangerouslySetInnerHTML={{ __html: book.description }} />
          </p>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps({ selectedBook }) {
  return { book: selectedBook };
}

export default connect(mapStateToProps)(BookDetail);
