import React from 'react'

import { defaultNextArrowStyle, lockedArrowStyle } from '../styles'


export default (isActive) => {
  this.style = isActive
    ? defaultNextArrowStyle
    : Object.assign({}, defaultNextArrowStyle, lockedArrowStyle);

  return (
    <div style={ this.style }>&#x25ba;</div>
  )
}