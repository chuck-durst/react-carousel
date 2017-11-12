import React from 'react'

import { dotStyle, activeDotStyle } from '../styles'

export default (index, isActive) => {

  const getStyle = () => {
    return isActive === true
      ? Object.assign({}, dotStyle, activeDotStyle)
      : dotStyle;
  };

  return ( <div style={ getStyle() } className={ `ce-carousel__dot--${ index }` } /> );
}
