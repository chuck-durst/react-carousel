import React      from 'react'

import Slide      from '../Slide'
import Pagination from '../Pagination'

import { sliderStyle}  from '../styles'


class Slider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.slideOnMobile  = false;
  }


  componentDidMount() {
    // Store a variable that defines if the slides can be dragged on mobile/tablet
    this.slideOnMobile = (this.props.slideOnMobile === true && this._isMobile() === true);
  }


  _isMobile = () => {
    return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  };


  handleSlideTouchMove = (e) => {
    if (this.slideOnMobile === true) {
      console.log(e, e.targetTouches[0].pageX, e.targetTouches[0].pageY)
    }
  };


  handleSlideTouchEnd = (e) => {
    console.log(this.refs);
    this.refs['slide--2'].slide(0);
    console.log('touch end');
  };


  render() {

    if (!this.props.slides || this.props.slides.length === 0)
      return null;

    return (
      <div style={ sliderStyle } className="ce-carousel__slider">
        { this.props.showDots === true &&
          <Pagination
            slides={ this.props.slides }
            activeSlide={ this.props.activeSlide }
            onPaginationClick={ this.props.onPaginationClick }
          />
        }
        {
          this.props.slides.map((slide, key) => (
            <Slide
              key={ key }
              ref={ `slide--${ key }` }
              index={ key }
              slide={ slide }
              isAnimated={ this.props.isAnimated }
              slidesSpeed={ this.props.slidesSpeed }
              totalSlides={ this.props.slides.length }
              activeSlide={ this.props.activeSlide }
              onTouchMove={ this.handleSlideTouchMove }
              onTouchEnd={ this.handleSlideTouchEnd }
              moveDirection={ this.props.moveDirection }
            />
          ))
        }
      </div>
    );
  }
}

export default Slider;
