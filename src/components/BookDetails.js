import React, { useEffect } from 'react';
import { FaGlobeEurope } from 'react-icons/fa';
import PropTypes, { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails, getChapterDetails } from '../redux/books/books';
import Header from './Header';
// import ChapterDetails from './ChapterDetails';

const BookDetails = ({ match }) => {
  console.log(match.params.abbrev);
  const { BookDetail } = useSelector((state) => state.books);
  console.log(BookDetail);

  const { ChaptersDetails } = useSelector((state) => state.books);
  console.log(ChaptersDetails, 'dbndsnb');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetails(match.params.abbrev));
    dispatch(getChapterDetails(match.params.abbrev));
  }, [dispatch]);

  console.log(BookDetail.name);
  return (
    <>
      <Header metric={BookDetail.name} />
      <div className="row">
        <div className="col-7">
          <FaGlobeEurope size={98} className="fa-icon" />
        </div>
        <div className="col-5 mt-5 text">
          <h1 className="d-block">{BookDetail.name}</h1>
          <p className="btn btn-dark">
            {BookDetail.chapters}
            chapters
          </p>
        </div>
        <h5 className="text mt-2">Chapter one</h5>
        {ChaptersDetails.verses && ChaptersDetails.verses.map((verse) => (
          <div className="chapter" key={verse.number}>
            <p className="text">{`${verse.number}: ${verse.text}`}</p>
          </div>
        ))}
      </div>
    </>
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
