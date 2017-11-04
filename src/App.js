import React          from 'react'

import ReactCarousel  from './ReactCarousel'
import NextArrow      from './ReactCarousel/NextArrow'
import PrevArrow      from './ReactCarousel/PrevArrow'
import Dots           from './ReactCarousel/Dot'
import './App.scss'


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.settings = {
      className       : 'react-carousel',
      showArrows      : true,
      showDots        : true,
      autoPlay        : false,
      autoPlayDelay   : 5000,
      isInfinite      : true,
      isAnimated      : true,
      stopOnHover     : false,
      customNextArrow : NextArrow,
      customPrevArrow : PrevArrow,
      customDots      : Dots,
      beforeChange    : ()=>console.log('before change'),
      afterChange     : ()=>console.log('after change'),
      goToSlide       : null,
      backdropColor   : null,
    };
  }


  render() {
    const slides = [
      'http://fakeimg.pl/300x400',
      'http://fakeimg.pl/400',
      'http://fakeimg.pl/500x750',
      'http://fakeimg.pl/600',
    ];

    return (
      <div className="app">
        <div className="app__header">
          <h1>React Carousel</h1>
        </div>
        <div className="app__container">
          <ReactCarousel { ...this.settings } slides={ slides } />
        </div>
      </div>
    );
  }
}

export default App;
