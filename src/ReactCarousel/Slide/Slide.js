import React      from 'react'

import {
  slideStyle,
  activeSlideStyle,
  prevSlideStyle,
  nextSlideStyle    }  from '../styles'

export default ({ slide, activeSlide, index, totalSlides }) => {

  this._getStyle = () => {
    let stateStyle = activeSlide === index
      ? activeSlideStyle
      : index > activeSlide
        ? nextSlideStyle
        : prevSlideStyle;

    let ret = Object.assign({}, slideStyle, stateStyle, {
      backgroundImage : `url(${ slide })`,

    });
    console.log(ret)
    return ret;
  };

  return (
    <div style={ this._getStyle() } />
  )
}
