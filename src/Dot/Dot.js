import React from 'react'

import { dotStyle, activeDotStyle } from '../styles'

export default (isActive, index) => {

  const getStyle = () => {
    return isActive === true
      ? Object.assign({}, dotStyle, activeDotStyle)
      : dotStyle;
  };

  return ( <div style={ getStyle() } className={ `ce-carousel__dot--${ index }` } /> );
}
