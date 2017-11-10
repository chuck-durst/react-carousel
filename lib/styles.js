'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**-------------------------**\
 * Carousel
\**-------------------------**/

var carouselStyle = exports.carouselStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  outline: 0
};

/**-------------------------**\
 * Slider
\**-------------------------**/

var sliderStyle = exports.sliderStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

/**-------------------------**\
 * Slides
\**-------------------------**/

var slideStyle = exports.slideStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'transform 0.2s ease-out'
};

var activeSlideStyle = exports.activeSlideStyle = {
  transform: 'translate3D(0, 0, 0) scale(0.9)',
  opacity: 1
};

var prevSlideStyle = exports.prevSlideStyle = {
  transform: 'translate3D(-100%, 0, 0) scale(0.9)'
};

var nextSlideStyle = exports.nextSlideStyle = {
  transform: 'translate3D(100%, 0, 0) scale(0.9)'
};

/**-------------------------**\
 * Arrows
\**-------------------------**/

var arrowContainerStyle = exports.arrowContainerStyle = {
  height: 'inherit',
  width: 'initial'
};

var defaultPrevArrowStyle = exports.defaultPrevArrowStyle = {
  height: '100%',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none'
};

var defaultNextArrowStyle = exports.defaultNextArrowStyle = defaultPrevArrowStyle;

var lockedArrowStyle = exports.lockedArrowStyle = {
  color: 'grey'
};

/**-------------------------**\
 * Dots
\**-------------------------**/

var paginationStyle = exports.paginationStyle = {
  zIndex: 200,
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%'
};

var dotStyle = exports.dotStyle = {
  width: '10px',
  height: '10px',
  margin: '5px',
  borderRadius: '100%',
  backgroundColor: 'grey',
  cursor: 'pointer'
};

var activeDotStyle = exports.activeDotStyle = {
  backgroundColor: 'black'
};