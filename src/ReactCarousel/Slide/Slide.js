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
    this.stay       = false;
    this.transition = null;
  }


  componentWillMount() {
    this.setState({ style: this._getStyle(this.props) });
  }


  componentDidMount() {
    this.slideEl    = ReactDOM.findDOMNode(this.refs.slide);
    this.transition = this.slideEl.style.transition;
  }


  shouldComponentUpdate(nextProps, nextState) {
    return this.props.activeSlide === this.props.index
      || nextProps.activeSlide === nextProps.index
      || nextState.style !== this.state.style
  }


  componentWillReceiveProps(nextProps) {
    let direction = nextProps.moveDirection;

    if (nextProps.activeSlide !== this.props.activeSlide && this.stay === false) {

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
        this._moveSlide(nextProps, direction);
      } else {
        this.slideEl.style.transition = 'none';
      }
    }

    if (nextProps.slidesSpeed !== this.props.slidesSpeed) {
      const style =  this._getStyle(nextProps);
      this.setState({ style }, () => {
        this.transition = style.transition
      });
    }
    this.stay = false;
  }


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
        ? `transform ${ props.slidesSpeed }ms ease-out`
        : 'none'
    });
  };


  _handleTouchMove = (e) => {
    return this.props.onTouchMove(e, this.props.index);
  };


  /**
   * Move the slide at the good place depending on its current place
   * and on the slide direction
   * @param nextProps
   * @param direction
   * @private
   */
  _moveSlide = (nextProps, direction) => {
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
   * Slide the slide... haha...
   * @param x {int}               : the slide coordinates
   * @param isAnimated {boolean}  : defines if the move must be animated
   * @param unit {string}         : the distance unity that must be used
   */
  slide = (x, isAnimated = true, unit = '%', stay = false) => {
    let slideEl = this.slideEl;

    slideEl.style.transition  = isAnimated ? this.transition : 'none';
    slideEl.style.transform   = `translate3d(${ x }${ unit }, 0, 0) scale(0.9)`;

    /* If stay === true, the next move will be ignored */
    this.stay = stay;
  };


  render() {
    return (
      <div
        ref="slide"
        style={ this.state.style }
        className={ this.props.slidesClassName }
        onTouchMove={ this._handleTouchMove }
        onTouchEnd={ this.props.onTouchEnd }
      />
    )
  }
}

export default Slide;