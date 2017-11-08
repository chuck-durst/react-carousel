import React          from 'react'

import ReactCarousel  from './ReactCarousel'
import NextArrow      from './ReactCarousel/NextArrow'
import PrevArrow      from './ReactCarousel/PrevArrow'
import Dots           from './ReactCarousel/Dot'
import './App.scss'


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false
    };

    /** Default settings **/
    this.settings = {
      className       : 'react-carousel',
      showArrows      : true,
      showDots        : true,
      autoPlay        : true,
      autoPlayDelay   : 7000,
      slidesSpeed     : 150,
      isInfinite      : true,
      isAnimated      : true,
      stopOnHover     : true,
      allowKeyboard   : true,
      customNextArrow : NextArrow,
      customPrevArrow : PrevArrow,
      customDots      : Dots,
      beforeChange    : ()=>console.log('before change'),
      afterChange     : ()=>console.log('after change'),
      goToSlide       : null,
      backdropColor   : 'rgba(0,0,0,0.6)',
      sliderClassName : 'slider',
      slidesClassName : 'slides',
    };

    /** Mobile settings **/
    this.mobileSettings = {
      className       : 'react-carousel',
      showArrows      : false,
      showDots        : true,
      autoPlay        : false,
      slidesSpeed     : 150,
      isInfinite      : true,
      backdropColor   : 'rgba(0,0,0,0.6)',
    };

    /** Slides **/
    this.slides  = [
      'http://fakeimg.pl/350x200/?text=React-carousel',
      'http://fakeimg.pl/300/',
      'http://fakeimg.pl/350x200/eeeeee/000',
      'http://fakeimg.pl/250x100/333333/',
      'http://fakeimg.pl/200x750/',
      'http://fakeimg.pl/300/999999/',
    ];
  }


  componentDidMount() {
    window.addEventListener('resize', this._updateSettings);
    this._updateSettings();
  }


  _updateSettings = () => {
    this.setState({ isMobile: window.innerWidth < 600 });
  };


  render() {
    const settings = this.state.isMobile ? this.mobileSettings : this.settings;

    return (
      <div className="app">
        <div className="app__header">
          <h1>React Carousel</h1>
        </div>
        <div className="app__container">
          <ReactCarousel { ...settings } slides={ this.slides } />
        </div>
      </div>
    );
  }
}

export default App;
