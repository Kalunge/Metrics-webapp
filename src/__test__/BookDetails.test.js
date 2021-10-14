import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import BookDetails from '../components/BookDetails';
import store from '../redux/store';
import { match } from './bookMOck';

it('renders   BookDetails correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BookDetails match={match} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
