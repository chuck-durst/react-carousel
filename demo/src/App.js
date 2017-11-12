import React          from 'react'

import ReactCarousel  from '../../src/index'
import './app.scss'


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
      beforeChange    : ()=>console.log('before change'),
      afterChange     : ()=>console.log('after change'),
      goToSlide       : null,
      backdropColor   : 'rgba(0,0,0,0.6)',
      sliderClassName : 'slider',
      slidesClassName : 'slides'
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
          <a className="header__github-link" href="https://github.com/chuck-durst/react-carousel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77" fill="currentColor" width="30px">
              <g>
                <g>
                  <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"/>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="app__container">
          <ReactCarousel { ...settings } slides={ this.slides } />
        </div>
      </div>
    );
  }
}

export default App;
