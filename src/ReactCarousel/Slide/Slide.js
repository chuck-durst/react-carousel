import React      from 'react'

import {
  slideStyle,
  activeSlideStyle,
  prevSlideStyle,
  nextSlideStyle    }  from '../styles'

export default ({ slide, activeSlide, index, totalSlides, isAnimated }) => {

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
