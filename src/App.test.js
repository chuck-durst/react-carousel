import React from 'react';
import ReactDOM from 'react-dom';
import ReactCarousel from './ReactCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactCarousel />, div);
});
