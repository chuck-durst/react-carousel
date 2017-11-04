import React      from 'react'

import {
  slideStyle,
  activeSlideStyle,
  prevSlideStyle,
  nextSlideStyle    }  from '../styles'

export default ({ slide, activeSlide, index, totalSlides, isAnimated }) => {

  /**
   * Get the component computed style
   * depending on the current configuration
   * Adds the Slide background-image and enables
   * the transition animation if requested
   * @returns {*}
   * @private
   */
  this._getStyle = () => {
    let stateStyle = activeSlide === index
      ? activeSlideStyle
      : index > activeSlide
        ? nextSlideStyle
        : prevSlideStyle;

    return Object.assign({}, slideStyle, stateStyle, {
      backgroundImage : `url(${ slide })`,
      transition      : isAnimated === true
                          ? slideStyle.transition
                          : 'none'
    });
  };

  return (
    <div style={ this._getStyle() } />
  )
}
