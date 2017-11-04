import React from 'react'

import { defaultPrevArrowStyle, lockedArrowStyle } from '../styles'


export default (isActive) => {
  this.style = isActive
    ? defaultPrevArrowStyle
    : Object.assign({}, defaultPrevArrowStyle, lockedArrowStyle);

  return (
    <div style={ this.style } className="ce-carousel__prev-arrow">&#x25c0;</div>
  )
}