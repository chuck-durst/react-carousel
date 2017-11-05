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


  componentWillReceiveProps(nextProps) {
    let direction = nextProps.moveDirection;

    // Set the slide at the good place
    if (nextProps.activeSlide !== this.props.activeSlide) {
      if (this.props.activeSlide !== nextProps.index && direction === 'right') {
        this.slide(100, false);
      } else if (this.props.activeSlide !== nextProps.index && direction === 'left') {
        this.slide(-100, false);
      }

      // Do animation
      this.moveSlide(nextProps, direction);
    }
  }


  /**
   * Move the slide at the good place depending on its current place
   * and on the slide direction
   * @param nextProps
   * @param direction
   */
  moveSlide = (nextProps, direction) => {
    if (this.props.activeSlide === nextProps.index && direction === 'right') {
      this.slide(-100);
    } else if (this.props.activeSlide === nextProps.index && direction === 'left') {
      this.slide(100);
    } else if (nextProps.activeSlide === nextProps.index) {
      this.slide(0);
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


  slide = (x, isAnimated = true) => {
    let slideEl = this.slideEl;
    slideEl.style.transition = isAnimated ? this.transition : 'none';

    slideEl.style.transform = `translate3d(${ x }%, 0, 0)`;
  };


  render() {

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