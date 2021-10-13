import React from 'react';
import PropTypes from 'prop-types';
import { FaGlobeAfrica } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
// import reading from '../img/reading.jpg';

const Book = ({ book }) => {
  console.log(book);
  const history = useHistory();
  const handleClick = (abbv) => {
    history.push(`/${abbv}`);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="col-6 book-outline"
      onClick={() => handleClick(book.abbrev.en)}
      onKeyDown={() => handleClick(book.abbrev.en)}
    >
      <AiOutlineArrowRight className="fachevron" />
      <div className="book">
        <FaGlobeAfrica className="fa-icons" size={120} />
        <h4 className="text">{book.name}</h4>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    abbrev: PropTypes.string.isRequired,
    chapters: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Book;
