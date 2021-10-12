import React from 'react';
import PropTypes from 'prop-types';
import reading from '../img/reading.jpg';

const Book = ({ book }) => (
  <div className="col-6">
    <div>
      <img className="image" src={reading} alt="reading" />
      <div className="nehem">
        <h1>{book.name}</h1>
        <p>
          {book.chapters}
          {' '}
          Chapters
        </p>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    chapters: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Book;
