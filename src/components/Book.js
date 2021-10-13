import React from 'react';
import PropTypes from 'prop-types';
import { FaGlobeAfrica } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
// import reading from '../img/reading.jpg';

const Book = ({ book }) => {
  const history = useHistory();
  const handleClick = (abbrev) => {
    history.push(`/${abbrev}`);
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
        <h4 className="text">{`${book.name}: ${book.chapters}`}</h4>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    abbrev: PropTypes.shape({
      en: PropTypes.string,
    }),
    chapters: PropTypes.number.isRequired,
  }).isRequired,
};
export default Book;
