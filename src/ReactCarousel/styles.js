export const carouselStyle = {
  display         : 'flex',
  alignItems      : 'center',
  justifyContent  : 'space-between',
  width           : '100%',
  height          : '100%'
};


export const sliderStyle = {
  position  : 'relative',
  width     : '100%',
  height    : '100%',
  overflow  : 'hidden'
};

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
  transition          : 'transform 0.3s ease-out, opacity 0.4s ease-out'
};

export const activeSlideStyle = {
  transform : 'translate3D(0, 0, 0)',
  opacity   : 1
};

export const prevSlideStyle = {
  transform : 'translate3D(-100%, 0, 0)',
  opacity   : 0
};

export const nextSlideStyle = {
  transform : 'translate3D(100%, 0, 0)',
  opacity   : 0
};

export const defaultPrevArrowStyle = {

};

export const defaultNextArrowStyle = {

};

export const lockedArrowStyle = {
  color: 'grey'
};