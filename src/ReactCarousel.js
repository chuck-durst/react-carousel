import React      from 'react'

import Slider   	from './Slider'
import Pagination from './Pagination'

import debounce from './debounce'

import {
  carouselStyle,
	carouselContentStyle,
  arrowContainerStyle } from './styles'

class ReactCarousel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      slides        : [],
      activeSlide   : 0,
      moveDirection : null
    };

    this.autoPlayInterval = null;
    this.isHovered        = false
  }


  componentDidMount() {
    if (this.props.slides)
      this._initSlides(this.props.slides);

    if (this.props.autoPlay === true) {
      this._setAutoPlay();
    }
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.slides !== nextProps.slides) {
      this._initSlides(nextProps.slides);
    }

    if (nextProps.goToSlide && nextProps.goToSlide !== this.props.goToSlide && this.state.slides[nextProps.goToSlide]) {
      this.goToSlide(nextProps.goToSlide);
    }
    if (nextProps.autoPlay !== this.props.autoPlay) {
      if (nextProps.autoPlay === false) {
        clearInterval(this.autoPlayInterval);
      } else {
        this._setAutoPlay();
      }
    }
  }


  componentWillUnmount() {
    clearInterval(this.autoPlayInterval);
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
   * Launches the automatic play
   * @private
   */
  _setAutoPlay = () => {
    this.autoPlayInterval = setInterval(() => {
      if (this.isHovered === false || this.props.stopOnHover === false) {
        this.goToSlide();
      }
    }, this.props.autoPlayDelay);
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
  goToSlide = (slide = this.state.activeSlide + 1) => {
		this.props.beforeChange(this.state.activeSlide);
    if (slide < 0 && this.props.isInfinite === true) {
      this.setState({
        activeSlide   : this.state.slides.length - 1,
        moveDirection : 'left'
      }, () => this.props.afterChange(this.state.slides.length - 1, 'left'))
    } else if (slide > this.state.slides.length - 1 && this.props.isInfinite === true) {
      this.setState({
        activeSlide   : 0,
        moveDirection : 'right'
      }, () => this.props.afterChange(0, 'right'));
    } else if (slide >= 0 && slide <= this.state.slides.length -1) {
      this.setState({
        activeSlide   : slide,
        moveDirection : slide > this.state.activeSlide ? 'right' : 'left'
      }, () => this.props.afterChange(slide, this.state.moveDirection));
    }
  };


  /**
   * Defines if the component is hovered
   * This will be useful to stop the auto play
   * @param isHover
   * @private
   */
  _handleMouseHover = (isHover) => {
    this.isHovered = isHover;
  };


  /**
   * Debounce if animated
   * @private
   */
  _handlePrevClick = debounce(() => {
    this.goToSlide(this.state.activeSlide - 1)
  }, this.props.isAnimated ? this.props.slidesSpeed : 0, true);


  /**
   * Debounce if animated
   * the slideSpeed prop is used as the debounce value
   * @private
   */
  _handleNextClick = debounce(() => {
    this.goToSlide(this.state.activeSlide + 1)
  }, this.props.isAnimated ? this.props.slidesSpeed : 0, true);


  /**
   * Allow the user to use his keyboard arrow
   * keys to navigated through the slides
   * @param e
   * @returns {null}
   * @private
   */
  _handleKeyUp = (e) => {
    const which = e.which;

    if (this.props.allowKeyboard === false || !which)
      return null;

    switch(which) {
      case 39:
        return this._handleNextClick();
      case 37:
        return this._handlePrevClick();
      default:
        return null;
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
      <div
        tabIndex="0"
        onKeyUp={ this._handleKeyUp }
        className={ this.props.className }
        style={ componentStyle }
        onMouseOver={ () => this._handleMouseHover(true) }
        onMouseLeave={ () => this._handleMouseHover(false) }
      >
        { this.props.showArrows === true && this.props.slides.length > 1 &&
          <div onClick={ this._handlePrevClick } style={ arrowContainerStyle }>
            { prevArrow }
          </div>
        }
        <div style={ carouselContentStyle }>
					<Slider
						slides={ this.state.slides }
						activeSlide={ this.state.activeSlide }
						isInfinite={ this.props.isInfinite }
						isAnimated={ this.props.isAnimated }
						slidesSpeed={ this.props.slidesSpeed }
						slideNavigation={ this.props.slideNavigation }
						slideOnDesktop={ this.props.slideOnDesktop }
						showDots={ this.props.showDots }
						moveDirection={ this.state.moveDirection }
						goToSlide={ this.goToSlide }
						sliderClassName={ this.props.sliderClassName }
						slidesClassName={ this.props.slidesClassName }
					/>
					{ this.props.showDots === true && this.props.slides.length > 1 &&
					<Pagination
						slides={ this.state.slides }
						activeSlide={ this.state.activeSlide }
						onPaginationClick={ this.goToSlide }
						dots={ this.props.customDots }
					/>
					}
				</div>
        { this.props.showArrows === true && this.props.slides.length > 1 &&
          <div onClick={ this._handleNextClick } style={ arrowContainerStyle }>
            { nextArrow }
          </div>
        }
      </div>
    );
  }
}

export default ReactCarousel;
