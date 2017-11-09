import React from 'react';
import { mount } from 'enzyme';
import ReactCarousel from '../src';

describe('ReactCarousel', () => {
		it('renders without crashing', () => {
				mount(<ReactCarousel />);
		});
});
