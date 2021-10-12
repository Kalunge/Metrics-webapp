import axios from 'axios';

const GET_BOOKS = 'app/books/GET_BOOKS';
const initialState = {
  books: [],
};

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://www.abibliadigital.com.br/api/books',
  );
  if (data) {
    dispatch({ type: GET_BOOKS, payload: data });
  }
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        books: payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
