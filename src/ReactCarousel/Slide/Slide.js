import React      from 'react'

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
    }
  }


  componentWillMount() {
    this.setState({ style: this._getStyle(this.props) });
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ style: this._getStyle(nextProps) })
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
        ? slideStyle.transition
        : 'none'
    });
  };


  render() {

    return (
      <div
        style={ this.state.style }
        className="ce-carousel__slide"
        onTouchMove={ this.props.onTouchMove }
        onTouchEnd={ this.props.onTouchEnd }
      />
    )
  }
}

export default Slide;