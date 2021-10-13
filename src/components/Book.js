import React from 'react';
import PropTypes from 'prop-types';
import { FaGlobeAfrica } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import reading from '../img/reading.jpg';

const Book = ({ book }) => (
  <div className="col-6 book-outline">
    <AiOutlineArrowRight className="fachevron" />
    <div className="book">
      <FaGlobeAfrica className="fa-icons" size={120} />
      <h4 className="text">{book.name}</h4>
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
