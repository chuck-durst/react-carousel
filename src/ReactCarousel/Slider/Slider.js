import React      from 'react'

import Slide      from '../Slide'
import Pagination from '../Pagination'

import { sliderStyle}  from '../styles'


class Slider extends React.PureComponent {
  render() {

    if (!this.props.slides || this.props.slides.length === 0)
      return null;

    return (
      <div style={ sliderStyle } className="ce-carousel__slider">
        <Pagination slides={ this.props.slides } activeSlide={ this.props.activeSlide } />
        {
          this.props.slides.map((slide, key) => (
            <Slide
              key={ key }
              index={ key }
              slide={ slide }
              isAnimated={ this.props.isAnimated }
              totalSlides={ this.props.slides.length }
              activeSlide={ this.props.activeSlide }
            />
          ))
        }
      </div>
    );
  }
}

export default Slider;
