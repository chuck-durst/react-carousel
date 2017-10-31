import React      from 'react'

import Slider from './Slider'

import { carouselStyle } from './styles'


class ReactCarousel extends React.PureComponent {
  render() {
    return (
      <div className={ this.props.className } style={ carouselStyle }>
        <Slider />
      </div>
    );
  }
}

export default ReactCarousel;
