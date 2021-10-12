import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/books';
import bible from '../img/bible.jpg';
import Book from './Book';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const oldtestament = books
    .filter((book) => book.testament === 'VT')
    .slice(0, 10);

  return (
    <div className="row">
      <div className="col-7">
        <img className="img" src={bible} alt="bible" />
      </div>
      <div className="col-5 mt-5">
        <h1 className="d-block">Holy bible </h1>
        <p>66 Books</p>
      </div>
      <div className="row">
        {oldtestament.map((book) => (
          <Book key={book.abbrev.pg} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
