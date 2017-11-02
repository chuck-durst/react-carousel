import PropTypes  from 'prop-types'

import ReactCarousel  from './ReactCarousel'
import PrevArrow      from './PrevArrow'
import NextArrow      from './NextArrow'

ReactCarousel.propTypes = {
  slides          : PropTypes.arrayOf(PropTypes.string).isRequired,
  className       : PropTypes.string,
  showArrows      : PropTypes.bool,
  showDots        : PropTypes.bool,
  autoPlay        : PropTypes.bool,
  autoPlayDelay   : PropTypes.number,
  isInfinite      : PropTypes.bool,
  isAnimated      : PropTypes.bool,
  stopOnHover     : PropTypes.bool,
  customNextArrow : PropTypes.func,
  customPrevArrow : PropTypes.func,
  customDots      : PropTypes.func,
  beforeChange    : PropTypes.func,
  afterChange     : PropTypes.func,
  goToSlide       : PropTypes.number,
  backdropColor   : PropTypes.string
};


ReactCarousel.defaultProps = {
  slides          : null,
  className       : 'react-carousel',
  showArrows      : true,
  showDots        : true,
  autoPlay        : false,
  autoPlayDelay   : 2000,
  isInfinite      : true,
  isAnimated      : true,
  stopOnHover     : false,
  customNextArrow : NextArrow,
  customPrevArrow : PrevArrow,
  customDots      : i => i,
  beforeChange    : null,
  afterChange     : null,
  goToSlide       : null,
  backdropColor   : null
};

export default ReactCarousel;
