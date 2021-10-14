import reducer, {
  getBookDetails,
  getBooks,
  getChapterDetails,
  authenticate,
  GET_BOOKS,
  GET_BOOK_DETAILS,
  GET_CHAPTER,
} from '../redux/books/books';
import books from './booksApiMock';

describe('Action Creators return required values', () => {
  test('get books return an array of book objects', () => {
    expect(getBooks()).not.toContain(books);
  });

  test('getBookDEtails return a true value', () => {
    expect(getBookDetails()).toBeTruthy();
  });

  test('getChapterDetails return a defined value', () => {
    expect(getChapterDetails()).not.toBeUndefined();
  });

  test('Authenticate return a defined value', () => {
    expect(authenticate()).toBeTruthy();
  });
});

describe('reducer manipulates state based on actuons', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      books: [],
      BookDetail: {},
      userInfo: {},
      ChaptersDetails: {},
      chapterError: {},
    });
  });
  test('should handle GET_BOOKS', () => {
    const action = {
      type: GET_BOOKS,
      payload: books,
    };
    expect(reducer({}, action)).toEqual({ books: [...books] });
  });

  test('should handle GETBOOKDETAILS', () => {
    const action = {
      type: GET_BOOK_DETAILS,
    };
    expect(reducer({}, action)).toBeTruthy();
  });

  test('should handle GETCHAPTER', () => {
    const action = {
      type: GET_CHAPTER,
    };
    expect(reducer({}, action)).not.toBeUndefined();
  });
});
