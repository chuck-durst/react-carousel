import React      from 'react'
import PropTypes  from 'prop-types'

import { carouselStyle } from './styles'


class ReactCarousel extends React.PureComponent {
  render() {
    return (
      <div className={ this.props.className } style={ carouselStyle }>
        IN
      </div>
    );
  }
}



/**-------------------------**\
 * propTypes & defaultProps
\**-------------------------**/


ReactCarousel.propTypes = {
  className       : PropTypes.string,
  showArrows      : PropTypes.bool,
  showDots        : PropTypes.bool,
  autoPlay        : PropTypes.bool,
  autoPlayDelay   : PropTypes.int,
  isInfinite      : PropTypes.bool,
  stopOnHover     : PropTypes.bool,
  customNextArrow : PropTypes.element,
  customPrevArrow : PropTypes.element,
  customDots      : PropTypes.func,
  beforeChange    : PropTypes.func,
  afterChange     : PropTypes.func,
  goToSlide       : PropTypes.int
};


ReactCarousel.defaultProps = {
  className       : 'react-carousel',
  showArrows      : true,
  showDots        : true,
  autoPlay        : false,
  autoPlayDelay   : 2000,
  isInfinite      : true,
  stopOnHover     : false,
  customNextArrow : <div />,
  customPrevArrow : <div />,
  customDots      : i => <div key={ i } />,
  beforeChange    : null,
  afterChange     : null,
  goToSlide       : null
};

export default ReactCarousel;
