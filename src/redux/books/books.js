import axios from 'axios';

const GET_BOOKS = 'app/books/GET_BOOKS';
const GET_BOOK_DETAILS = 'app/books/GET_BOOK_DETAILS';
const AUTHENTICATE = 'app/books/AUTHENTICATE';

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://www.abibliadigital.com.br/api/books',
  );
  if (data) {
    dispatch({ type: GET_BOOKS, payload: data });
  }
};

export const getBookDetails = (abbv) => async (dispatch) => {
  const { data } = await axios.get(
    `https://www.abibliadigital.com.br/api/books/${abbv}`,
  );
  if (data) {
    dispatch({ type: GET_BOOK_DETAILS, payload: data });
  }
};

export const authenticate = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const { data } = await axios.post(
    'https://www.abibliadigital.com.br/api/users',
    {
      name: 'Name',
      email: 'muthomititus@gmail.com',
      password: '1234567',
      notifications: true,
    },
    config,
  );
  if (data) {
    dispatch({ type: AUTHENTICATE, payload: data });
  }
};

const initialState = {
  books: [],
  BookDetails: {},
  userInfo: {},
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        books: payload,
      };
    case GET_BOOK_DETAILS:
      return {
        ...state,
        BookDetails: payload,
      };
    case AUTHENTICATE:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
