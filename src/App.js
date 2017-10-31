import React          from 'react'
import ReactCarousel  from './ReactCarousel'

import './App.scss'


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.settings = {
      isInfinite: false
    }
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
