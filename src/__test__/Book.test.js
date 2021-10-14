import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Book from '../components/Book';
import store from '../redux/store';
import book from './bookMOck';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Book book={book} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
