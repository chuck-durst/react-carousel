import PropTypes  from 'prop-types'

import ReactCarousel  from './ReactCarousel'
import PrevArrow      from './PrevArrow'
import NextArrow      from './NextArrow'
import Dot            from './Dot'

ReactCarousel.propTypes = { // TODO add default classes overwritting
  slides          : PropTypes.arrayOf(PropTypes.string).isRequired,
  className       : PropTypes.string,
  showArrows      : PropTypes.bool,
  showDots        : PropTypes.bool,
  autoPlay        : PropTypes.bool,
  autoPlayDelay   : PropTypes.number,
  slidesSpeed     : PropTypes.number,
  isInfinite      : PropTypes.bool,
  isAnimated      : PropTypes.bool,
  stopOnHover     : PropTypes.bool,
  slideNavigation : PropTypes.bool,
  allowKeyboard   : PropTypes.bool,
  customNextArrow : PropTypes.func,
  customPrevArrow : PropTypes.func,
  customDots      : PropTypes.func,
  beforeChange    : PropTypes.func,
  afterChange     : PropTypes.func,
  goToSlide       : PropTypes.number,
  backdropColor   : PropTypes.string,
  sliderClassName : PropTypes.string,
  slidesClassName : PropTypes.string,
};


ReactCarousel.defaultProps = {
  slides          : [],
  className       : 'ce-carousel',
  showArrows      : true,
  showDots        : true,
  autoPlay        : false,
  autoPlayDelay   : 5000,
  slidesSpeed     : 150,
  isInfinite      : true,
  isAnimated      : true,
  stopOnHover     : false,
  slideNavigation : true,
  allowKeyboard   : true,
  customNextArrow : NextArrow,
  customPrevArrow : PrevArrow,
  customDots      : Dot,
  beforeChange    : ()=>{},
  afterChange     : ()=>{},
  goToSlide       : null,
  backdropColor   : null,
  sliderClassName : 'ce-carousel__slider',
  slidesClassName : 'ce-carousel__slide',
};

export default ReactCarousel;
