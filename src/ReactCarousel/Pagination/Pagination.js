import React from 'react'

import Dot from '../Dot'

import { paginationStyle } from '../styles'


export default ({ slides, activeSlide }) => {
  return (
    <div className="ce-carousel__pagination" style={ paginationStyle }>
      {
        slides.map((slide, key) => {
          return <Dot key={ key } index={ key } isActive={ key === activeSlide }/>
        })
      }
    </div>
  )
};