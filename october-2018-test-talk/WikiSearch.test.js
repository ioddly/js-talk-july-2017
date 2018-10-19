import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import 'isomorphic-fetch';

import WikiSearch from './WikiSearch';

describe('WikiSearch', () => {
  test('renders without crashing', () => {
    render(<WikiSearch />);
  });

  test('fetches search results from Wikipedia', async () => {
    const { getByPlaceholderText, getByText } = render(<WikiSearch />);

    const input = getByPlaceholderText('Enter search...');

    fireEvent.input(input, { target: { value: 'George Washington' } });

    const btn = getByText('Search Wikipedia');

    fireEvent.click(btn);

    await waitForElement(() => getByText('George Washington'));
  });
});
