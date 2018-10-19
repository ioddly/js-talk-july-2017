import React from 'react';
import { render } from 'react-testing-library';

import WikiSearch from './WikiSearch';

describe('WikiSearch', () => {
  test('render', () => {
    render(<WikiSearch />);
  });
});
