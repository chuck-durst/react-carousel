import React      from 'react'

import Slider from './Slider'

import {
  carouselStyle,
  arrowContainerStyle } from './styles'

class ReactCarousel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      slides       : [],
      activeSlide  : 0
    }
  }


  componentDidMount() {
    if (this.props.slides)
      this._initSlides(this.props.slides);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.slides !== nextProps.slides) {
      this._initSlides(nextProps.slides);
    }
  }


  _initSlides = (slides = []) => {
    this.setState({ slides });
  };


  _getPrevArrow = () => {
    return this.props.customPrevArrow
      ? this.props.customPrevArrow(this.props.isInfinite === true || (this.state.activeSlide > 0))
      : null
  };


  _getNextArrow = () => {
    return this.props.customNextArrow
      ? this.props.customNextArrow(this.props.isInfinite === true || (this.state.activeSlide < this.state.slides.length - 1))
      : null
  };


  _getComponentStyle = () => {
    return Object.assign({}, carouselStyle, {
      backgroundColor: this.props.backdropColor
    })
  };


  _goToSlide = (slide) => {
    console.log(slide);
    if (slide < 0 && this.props.isInfinite === true) {
      this.setState({ activeSlide: this.state.slides.length - 1 })
    } else if (slide > this.state.slides.length - 1 && this.props.isInfinite === true) {
      this.setState({ activeSlide: 0 });
    } else if (slide >= 0 && slide <= this.state.slides.length -1) {
      this.setState({ activeSlide: slide });
    }
  };


  render() {
    const prevArrow = this.props.showArrows === true
      ? this._getPrevArrow()
      : null;

    const nextArrow = this.props.showArrows === true
      ? this._getNextArrow()
      : null;

    const componentStyle = this._getComponentStyle();
console.log(componentStyle)

    return (
      <div className={ this.props.className } style={ componentStyle }>
        { this.props.showArrows === true &&
          <div onClick={ () => this._goToSlide(this.state.activeSlide -1 ) } style={ arrowContainerStyle }>
            { prevArrow }
          </div>
        }
        <Slider
          slides={ this.state.slides }
          activeSlide={ this.state.activeSlide }
          isAnimated={ this.props.isAnimated }
        />
        { this.props.showArrows === true &&
          <div onClick={ () => this._goToSlide(this.state.activeSlide + 1) } style={ arrowContainerStyle }>
            { nextArrow }
          </div>
        }
      </div>
    );
  }
}

export default ReactCarousel;
