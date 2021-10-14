import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Books from '../components/Books';

it('renders   Books correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Books />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
