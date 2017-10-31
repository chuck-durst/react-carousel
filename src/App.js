import React          from 'react'
import ReactCarousel  from './ReactCarousel'

import './App.scss'


class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1>React Carousel</h1>
        </div>
        <ReactCarousel />
      </div>
    );
  }
}

export default App;
