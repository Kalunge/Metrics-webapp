import axios from 'axios';

const GET_BOOKS = 'app/books/GET_BOOKS';
const GET_BOOK_DETAILS = 'app/books/GET_BOOK_DETAILS';
const GET_BOOK_DETAILS_FAIL = 'app/books/GET_BOOK_DETAILS_FAIL';
const AUTHENTICATE = 'app/books/AUTHENTICATE';
const GET_CHAPTER = 'app/books/GET_CHAPTER';

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://www.abibliadigital.com.br/api/books',
  );
  if (data) {
    dispatch({ type: GET_BOOKS, payload: data });
  }
};

export const getBookDetails = (abbrev) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://www.abibliadigital.com.br/api/books/${abbrev}`,
    );

    dispatch({ type: GET_BOOK_DETAILS, payload: data });
  } catch (error) {
    dispatch({ type: GET_BOOK_DETAILS_FAIL, payload: error });
  }
};

export const authenticate = () => async (dispatch) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldlZCBPY3QgMTMgMjAyMSAxNDo1MTowMiBHTVQrMDAwMC5rYWx1bmdlQGdtYWlsLmNvbSIsImlhdCI6MTYzNDEzNjY2Mn0.GpHR2Csj3AD_biDooBSFoyd3wFRVFPPfYipTufr1UDQ';
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    'https://www.abibliadigital.com.br/api/users/kalunge@gmail.com',
    config,
  );
  if (data) {
    dispatch({ type: AUTHENTICATE, payload: data });
  }
};

export const getChapterDetails = (abbrev) => async (dispatch) => {
  const { data } = await axios.get(
    `https://www.abibliadigital.com.br/api/verses/kjv/${abbrev}/1`,
  );

  dispatch({ type: GET_CHAPTER, payload: data });
};

const initialState = {
  books: [],
  BookDetail: {},
  userInfo: {},
  ChaptersDetails: {},
  chapterError: {},
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
        BookDetail: payload,
      };
    case AUTHENTICATE:
      return {
        ...state,
        userInfo: payload,
      };
    case GET_CHAPTER:
      return {
        ...state,
        ChaptersDetails: payload,
      };
    case GET_BOOK_DETAILS_FAIL:
      return {
        ...state,
        chapterError: payload,
      };
    default:
      return state;
  }
};

export { GET_BOOKS, GET_BOOK_DETAILS, GET_CHAPTER };
export default booksReducer;
