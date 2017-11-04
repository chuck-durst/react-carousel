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

  /**
   * Initialize the slides
   * @param slides
   * @private
   */
  _initSlides = (slides = []) => {
    this.setState({ slides });
  };


  /**
   * Returns the PrevArrow component depending
   * on the current configuration
   * @returns {null}
   * @private
   */
  _getPrevArrow = () => {
    return this.props.customPrevArrow
      ? this.props.customPrevArrow(this.props.isInfinite === true || (this.state.activeSlide > 0))
      : null
  };


  /**
   * Returns the NextArrow component depending
   * on the current configuration
   * @returns {null}
   * @private
   */
  _getNextArrow = () => {
    return this.props.customNextArrow
      ? this.props.customNextArrow(this.props.isInfinite === true || (this.state.activeSlide < this.state.slides.length - 1))
      : null
  };


  /**
   * Returns the component computed style
   * Adds a background-color if defined
   * @returns {*}
   * @private
   */
  _getComponentStyle = () => {
    return Object.assign({}, carouselStyle, {
      backgroundColor: this.props.backdropColor
    })
  };


  /**
   * Goes to a defined slide
   * Checks if the infinite mode is enabled
   * @param slide
   * @private
   */
  _goToSlide = (slide) => {
    this.props.beforeChange();
    if (slide < 0 && this.props.isInfinite === true) {
      this.setState({ activeSlide: this.state.slides.length - 1 }, this.props.afterChange)
    } else if (slide > this.state.slides.length - 1 && this.props.isInfinite === true) {
      this.setState({ activeSlide: 0 }, this.props.afterChange);
    } else if (slide >= 0 && slide <= this.state.slides.length -1) {
      this.setState({ activeSlide: slide }, this.props.afterChange);
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
          Dots={ this.props.customDots }
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
