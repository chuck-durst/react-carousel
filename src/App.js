import React          from 'react'
import ReactCarousel  from './ReactCarousel'

import './App.scss'


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.settings = {
      className       : 'react-carousel',
      showArrows      : true,
      showDots        : true,
      autoPlay        : false,
      autoPlayDelay   : 2000,
      isInfinite      : true,
      stopOnHover     : false,
      customNextArrow : <div />,
      customPrevArrow : <div />,
      customDots      : i => <div key={ i } />,
      beforeChange    : null,
      afterChange     : null,
      goToSlide       : null
    }
  }


  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1>React Carousel</h1>
        </div>
        <ReactCarousel { ...this.settings } />
      </div>
    );
  }
}

export default App;
