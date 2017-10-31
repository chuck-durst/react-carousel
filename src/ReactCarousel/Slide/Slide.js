import React      from 'react'

import { slideStyle, activeSlideStyle }  from '../styles'

export default ({ slide, isActive }) => {
  this.activeSlideStyle = Object.assign({}, slideStyle, activeSlideStyle);


  this._getStyle = (slide, isActive) => {
    const defaultStyle =  isActive ? this.activeSlideStyle : slideStyle;

    return Object.assign({}, defaultStyle, {
      backgroundImage: `url(${ slide })`
    });
  };

  return (
    <div style={ this._getStyle(slide, isActive) } />
  )
}
