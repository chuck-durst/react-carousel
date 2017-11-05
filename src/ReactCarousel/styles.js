/**-------------------------**\
 * Carousel
\**-------------------------**/

export const carouselStyle = {
  display         : 'flex',
  alignItems      : 'center',
  justifyContent  : 'space-between',
  width           : '100%',
  height          : '100%'
};


/**-------------------------**\
 * Slider
\**-------------------------**/

export const sliderStyle = {
  position  : 'relative',
  width     : '100%',
  height    : '100%',
  overflow  : 'hidden'
};


/**-------------------------**\
 * Slides
\**-------------------------**/

export const slideStyle = {
  position            : 'absolute',
  top                 : 0,
  left                : 0,
  display             : 'block',
  width               : '100%',
  height              : '100%',
  backgroundSize      : 'contain',
  backgroundPosition  : 'center',
  backgroundRepeat    : 'no-repeat',
  transition          : 'transform 0.4s ease-out',
};

export const activeSlideStyle = {
  transform : 'translate3D(0, 0, 0) scale(0.9)',
  opacity   : 1
};

export const prevSlideStyle = {
  transform : 'translate3D(-100%, 0, 0) scale(0.9)',
};

export const nextSlideStyle = {
  transform : 'translate3D(100%, 0, 0) scale(0.9)',
};


/**-------------------------**\
 * Arrows
\**-------------------------**/

export const arrowContainerStyle = {
  height: 'inherit',
  width : 'initial'
};

export const defaultPrevArrowStyle = {
  height          : '100%',
  width           : '50px',
  display         : 'flex',
  alignItems      : 'center',
  justifyContent  : 'center',
  cursor          : 'pointer',
  userSelect      : 'none'
};

export const defaultNextArrowStyle = defaultPrevArrowStyle;

export const lockedArrowStyle = {
  color: 'grey'
};


/**-------------------------**\
 * Dots
\**-------------------------**/

export const paginationStyle = {
  zIndex          : 200,
  position        : 'absolute',
  bottom          : 0,
  left            : 0,
  display         : 'flex',
  alignItems      : 'center',
  justifyContent  : 'center',
  width           : '100%',
};


export const dotStyle = {
  width           : '10px',
  height          : '10px',
  margin          : '5px',
  borderRadius    : '100%',
  backgroundColor : 'grey'
};

export const activeDotStyle = {
  backgroundColor: 'black'
};