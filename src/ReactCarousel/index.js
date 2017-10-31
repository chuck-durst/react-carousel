import PropTypes  from 'prop-types'

import ReactCarousel from './ReactCarousel'


ReactCarousel.propTypes = {
  className       : PropTypes.string,
  showArrows      : PropTypes.bool,
  showDots        : PropTypes.bool,
  autoPlay        : PropTypes.bool,
  autoPlayDelay   : PropTypes.number,
  isInfinite      : PropTypes.bool,
  stopOnHover     : PropTypes.bool,
  customNextArrow : PropTypes.element,
  customPrevArrow : PropTypes.element,
  customDots      : PropTypes.func,
  beforeChange    : PropTypes.func,
  afterChange     : PropTypes.func,
  goToSlide       : PropTypes.number
};


ReactCarousel.defaultProps = {
  className       : 'react-carousel',
  showArrows      : true,
  showDots        : true,
  autoPlay        : false,
  autoPlayDelay   : 2000,
  isInfinite      : true,
  stopOnHover     : false,
  customNextArrow : null,
  customPrevArrow : null,
  customDots      : i => i,
  beforeChange    : null,
  afterChange     : null,
  goToSlide       : null
};

export default ReactCarousel;
