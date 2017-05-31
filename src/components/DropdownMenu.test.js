import React from 'react';
import ReactDOM from 'react-dom';
import DropdownMenu from './DropdownMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DropdownMenu />, div);
});
