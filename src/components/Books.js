import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FaBible } from 'react-icons/fa';
import { getBooks } from '../redux/books/books';
// import bible from '../img/bible.jpg';
import Book from './Book';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const oldtestament = books
    .filter((book) => book.testament === 'VT')
    .slice(0, 5);

  return (
    <div className="row">
      <div className="col-7">
        <FaBible size={98} className="fa-icon" />
      </div>
      <div className="col-5 mt-5 text">
        <h1 className="d-block">Holy bible </h1>
        <p className="btn btn-dark">66 Books</p>
      </div>
      <h5 className="text mt-2">Sort by OLD Testament</h5>
      {oldtestament.map((book) => (
        <Book key={book.abbrev.pg} book={book} />
      ))}
    </div>
  );
};

export default Books;
