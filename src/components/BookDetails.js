import React, { useEffect } from 'react';
import { FaGlobeEurope } from 'react-icons/fa';
import PropTypes, { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails } from '../redux/books/books';
import ChapterDetails from './ChapterDetails';

const BookDetails = ({ match }) => {
  const { BookDetails } = useSelector((state) => state.books);
  console.log(BookDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetails(match.params.abbv));
  }, [dispatch]);

  console.log(BookDetails.name);
  return (
    <div className="row">
      <div className="col-7">
        <FaGlobeEurope size={98} className="fa-icon" />
      </div>
      <div className="col-5 mt-5 text">
        <h1 className="d-block">
          {BookDetails.name}
        </h1>
        <p className="btn btn-dark">
          { BookDetails.chapters}
          {' '}
          chapters
        </p>
      </div>
      <h5 className="text mt-2">Chapter Breakdown</h5>
      <ChapterDetails />
    </div>
  );
};

BookDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      abbv: string,
    },
  }).isRequired,
};

export default BookDetails;
