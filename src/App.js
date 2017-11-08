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

    this.mobileSettings = {
      className       : 'react-carousel',
      showArrows      : false,
      showDots        : true,
      autoPlay        : false,
      slidesSpeed     : 150,
      isInfinite      : true,
      backdropColor   : 'rgba(0,0,0,0.6)',
    };

  this.slides  = [
      'http://s3-us-west-2.amazonaws.com/files.geekgirlauthority.com/wp-content/uploads/2015/09/zero.jpg',
      'https://www.marchcomms.com/wp-content/uploads/2013/06/Number-One.jpg',
      'http://www.clker.com/cliparts/E/x/J/x/m/z/blue-number-two-hi.png',
      'http://media.gizmodo.co.uk/wp-content/uploads/2013/02/Three-4G.jpg',
      'http://www.clker.com/cliparts/1/9/5/d/13455846051729363694Animal%20Number%20Four.svg',
    ];
  }


  componentDidMount() {
    window.addEventListener('resize', this._updateSettings);
    this._updateSettings();
  }


  _updateSettings = () => {
    if (window.innerWidth < 600) {
      this.setState({ isMobile: true });
    }
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
