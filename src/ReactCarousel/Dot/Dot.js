import React from 'react'

import { dotStyle, activeDotStyle } from '../styles'

export default ({ isActive, index }) => {

  this.getStyle = () => {
    return isActive === true
      ? Object.assign({}, dotStyle, activeDotStyle)
      : dotStyle;
  };

  return ( <div style={ this.getStyle() } className={ `ce-carousel__dot--${ index }` } /> );
}