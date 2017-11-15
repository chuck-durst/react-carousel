# react-carousel (1.1.3)

A simple and powerful carousel for React.

## Installation

`yarn add @chuck-durst/react-carousel` or `npm i -s @chuck-durst/react-carousel`

## Introduction

`react-carousel` has been designed to work on both mobile and desktop. It comes with a lot of configurations to make it feet to any type of design. 

`react-carousel` works with the background-image property which makes it fully responsive!

## Usage

All you have to do is importing the component to your project and specifying your slides!.

``` js
import React from 'react'

import ReactCarousel from '@chuck-durst/react-carousel'

const App = (props) => {
	return (
		<ReactCarousel slides={ props.slides } />
	)
};

```


###[checkout the demo](https://chuck-durst.github.io/react-carousel/) for a better example of how to use it!


## Props


|    Property      | Type |          Description                                                                                                    | Default value |
| -------------    | ---- |          -----------                                                                                                    | ------------- |
|  slides          | array | Contains yours slides urls. (required)                                                                                 | -             |
|  className       | String | The class name of the main component                                                                                  | ce-carousel   |
|  showArrows      | bool | Defines if the navigation arrows must be showed                                                                         | true          |
|  showDots        | bool | Defines if the pagination dots must be showed                                                                           | true          |
|  autoPlay        | bool | Enables the automatic play                                                                                              | false         |
|  autoPlayDelay   | int  | The delay between each slide in autoPlay in ms                                                                          | 5000          |
|  slidesSpeed     | int  | The slides movement speed in ms                                                                                         | 150           |
|  isInfinite      | bool | Defines if the slider is infinite                                                                                       | true          |
|  isAnimated      | bool | Defines if the slides should be animated                                                                                | true          |
|  stopOnHover     | bool | Allows you to stop the autoPlay when the component is hovered                                                           | false         |
|  slideNavigation | bool | Allows sliding on mobile and desktop                                                                                    | true          |
|  allowKeyboard   | bool | Allows you to navigate using your keyboard arrows                                                                       | true          |
|  customNextArrow | React Element | A custom arrow element (if you need inspiration you can take a look at the original element: src/NextArrow)    | -             | 
|  customPrevArrow | React Element | A custom arrow element (if you need inspiration you can take a look at the original element: src/PrevArrow)    | -             | 
|  customDots      | function | A function used to map the pagination dots which takes two parameters (index, isActive) to let you fully customize the pagination (take a look at the original element: src/Dot) | - |
|  beforeChange    | function | A callback called before each slides changes (the first parameter corresponds to the index of the current active slide)                                                                      | -             |
|  afterChange     | function | A callback called after each slides changes (the first parameter corresponds to the index of the new active slide. The second parameter contains the slide direction)                                                                      | -             |
|  goToSlide       | int  | Allows you to go to a defined slide                                                                                     | null          |
|  backdropColor   | string | The component background-color. Can be any css color property                                                         | null          |
|  sliderClassName | string | The className of the slider element                                                                                   | ce-carousel__slider |
|  slidesClassName | string | The className of the slides element                                                                                   | ce-carousel__slide  |

Take a look at the demo folder if you are stuck! :)


## License

`react-carousel` is released under the MIT license.


## Contribute

Feel free to contribute to this project if you know how to make it be better.
