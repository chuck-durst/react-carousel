import React      from 'react'

import Slide  from '../Slide'

import { sliderStyle}  from '../styles'


class Slider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAnimated: props.isAnimated
    }
  }


  render() {

    if (!this.props.slides || this.props.slides.length === 0)
      return null;

    return (
      <div style={ sliderStyle }>
        {
          this.props.slides.map((slide, key) => (
            <Slide
              key={ key }
              index={ key }
              slide={ slide }
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
