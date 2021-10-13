import React from 'react';
import { FaGlobeEurope } from 'react-icons/fa';
import ChapterDetails from './ChapterDetails';

const BookDetails = () => (
  <div className="row">
    <div className="col-7">
      <FaGlobeEurope size={98} className="fa-icon" />
    </div>
    <div className="col-5 mt-5 text">
      <h1 className="d-block">Leviticus </h1>
      <p className="btn btn-dark">35 Chapters</p>
    </div>
    <h5 className="text mt-2">Chapter Breakdown</h5>
    <ChapterDetails />
  </div>
);

export default BookDetails;
