import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import store from '../redux/store';

it('renders   Header correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Header />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
