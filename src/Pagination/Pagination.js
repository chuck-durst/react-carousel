import React from 'react'

import Dot from '../Dot'

import { paginationStyle } from '../styles'


export default ({ slides, activeSlide, onPaginationClick }) => {
  return (
    <div className="ce-carousel__pagination" style={ paginationStyle }>
      {
        slides.map((slide, key) => {
          return (
            <div key={ key } onClick={ () => onPaginationClick(key) }>
              <Dot index={ key } isActive={ key === activeSlide }/>
            </div>
            )
        })
      }
    </div>
  )
};