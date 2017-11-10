import React from 'react'

import { paginationStyle } from '../styles'


export default ({ slides, activeSlide, onPaginationClick, dots }) => {
  return (
    <div className="ce-carousel__pagination" style={ paginationStyle }>
      {
        slides.map((slide, key) => {
          return (
            <div key={ key } onClick={ () => onPaginationClick(key) }>
							{ dots(key === activeSlide, key) }
            </div>
            )
        })
      }
    </div>
  )
};
