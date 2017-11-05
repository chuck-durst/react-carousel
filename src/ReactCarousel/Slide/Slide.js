import React      from 'react'
import ReactDOM   from 'react-dom'

import {
  slideStyle,
  activeSlideStyle,
  prevSlideStyle,
  nextSlideStyle    }  from '../styles'


class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: null
    };

    this.slideEl    = null;
    this.transition = null;
  }


  componentWillMount() {
    this.setState({ style: this._getStyle(this.props) });
  }


  componentDidMount() {
    this.slideEl    = ReactDOM.findDOMNode(this.refs.slide);
    this.transition = this.slideEl.style.transition;
  }


  shouldComponentUpdate(nextProps) {
    return this.props.activeSlide === this.props.index || nextProps.activeSlide === nextProps.index;
  }


  componentWillReceiveProps(nextProps) {
    let direction = nextProps.moveDirection;

    if (nextProps.activeSlide !== this.props.activeSlide) {

      // Set the slide at the good place if necessary
      if (this.props.activeSlide === this.props.index || nextProps.activeSlide === nextProps.index) {
        if (nextProps.activeSlide === nextProps.index) {
          if (direction === 'right') {
            this.slide(100, false);
          } else if (direction === 'left') {
            this.slide(-100, false);
          }
        }

        // Move the slide
        this.moveSlide(nextProps, direction);
      } else {
        this.slideEl.style.transition = 'none';
      }
    }
  }


  /**
   * Move the slide at the good place depending on its current place
   * and on the slide direction
   * @param nextProps
   * @param direction
   */
  moveSlide = (nextProps, direction) => {
    if (this.props.activeSlide === nextProps.index) {
      setTimeout(() => {
        this.slide(direction === 'right' ? -100 : 100);
      }, 100);
    } else if (nextProps.activeSlide === nextProps.index) {
      setTimeout(() => {
        this.slide(0);
      }, 100);
    }
  };


  /**
   * Get the component computed style
   * depending on the current configuration
   * Adds the Slide background-image and enables
   * the transition animation if requested
   * @returns {*}
   * @private
   */
  _getStyle = (props) => {
    let stateStyle = props.activeSlide === props.index
      ? activeSlideStyle
      : props.index > props.activeSlide
        ? nextSlideStyle
        : prevSlideStyle;

    return Object.assign({}, slideStyle, stateStyle, {
      backgroundImage : `url(${ props.slide })`,
      transition      : props.isAnimated === true
        ? slideStyle.transition
        : 'none'
    });
  };


  /**
   * Slide the current slide
   * @param x {int}               : the slide coordinates
   * @param isAnimated {boolean}  : defines if the move must be animated
   */
  slide = (x, isAnimated = true) => {
    let slideEl = this.slideEl;

    slideEl.style.transition  = isAnimated ? this.transition : 'none';
    slideEl.style.transform   = `translate3d(${ x }%, 0, 0) scale(0.9)`;
  };


  render() {
    console.log(this.props.index);

    return (
      <div
        ref="slide"
        style={ this.state.style }
        className="ce-carousel__slide"
        onTouchMove={ this.props.onTouchMove }
        onTouchEnd={ this.props.onTouchEnd }
      />
    )
  }
}

export default Slide;