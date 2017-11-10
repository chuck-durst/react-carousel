import React      from 'react'
import ReactDOM   from 'react-dom'

import Slide      from '../Slide'
import Pagination from '../Pagination'

import { sliderStyle}  from '../styles'

const SLIDE_MARGIN    = 30;
const MAX_SLIDE_SPEED = 3;

class Slider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.slideOnMobile    = false;

    this._setInitialState();
  }


  componentDidMount() {
    // Store a variable that defines if the slides can be dragged on mobile/tablet
    this.slideOnMobile = (this.props.slideOnMobile === true && this._isMobile() === true);
  }

  _setInitialState = () => {
    this.pageX            = 0;
    this.dragDistance     = 0;
    this.dragSpeed        = 0;
    this.draggedSlide     = null;
    this.activeSlideWidth = 0;
    this.prevDragSlide    = null;
    this.nextDragSlide    = null;
  };


  _isMobile = () => {
    return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  };


  /**
   * Slide the three handled slides to a defined
   * direction
   * @param direction
   * @returns {null}
   * @private
   */
  _slideAll = (direction) => {
    if (direction === 'middle') {
      this.prevDragSlide.slide(-100, true, '%', true);
      this.draggedSlide.slide(0, true, '%', true);
      this.nextDragSlide.slide(100, true, '%', true);
      return null;
    }

    this.prevDragSlide.slide(direction === 'right' ? -100 : 0, true, '%', true);
    this.draggedSlide.slide(direction === 'right' ? -100 : 100, true, '%', true);
    this.nextDragSlide.slide(direction === 'right' ? 0 : 100, true, '%', true);
    this.props.goToSlide(direction === 'right' ? this.nextDragSlide.props.index : this.prevDragSlide.props.index);
  };


  /**
   * Triggered when a slide is swiped on a mobile device.
   * @param e
   * @param slideIndex
   */
  handleSlideTouchMove = (e, slideIndex) => {
    if (this.slideOnMobile === true) {

      // Check if there is already a dragged slide stored and add it the opposite case
      if (!this.draggedSlide) {
        const prevSlideIndex = slideIndex - 1 >= 0 ? slideIndex - 1 : this.props.slides.length - 1;
        const nextSlideIndex = slideIndex + 1 <= this.props.slides.length - 1 ? slideIndex + 1 : 0;


        this.prevDragSlide    = this.refs[`slide--${ prevSlideIndex }`] || null;
        this.nextDragSlide    = this.refs[`slide--${ nextSlideIndex }`] || null;
        this.draggedSlide     = this.refs[`slide--${ slideIndex }`] || null;
        this.dragDistance     = 0;
        this.pageX            = e.targetTouches[0].pageX;
        this.activeSlideWidth = ReactDOM.findDOMNode(this.draggedSlide).getBoundingClientRect().width
      }

      // Check if all the slides exist
      if (this.prevDragSlide && this.nextDragSlide && this.draggedSlide) {

        // The following value must never be equal to zero or the slider won't be able to
        // move when the infinite mode is disabled
        const dragDistance  = e.targetTouches[0].pageX - this.pageX || (slideIndex === 0 ? -1 : 1);
        const direction     = dragDistance > 0 ? 'left' : 'right';

        // Check if the slides moves are not restricted
        if (this.props.isInfinite === true
          || (direction === 'left' && slideIndex !== 0)
          || (direction === 'right' && slideIndex !== this.props.slides.length - 1)) {

          // Move the slides to their next position
          this.draggedSlide.slide(this.dragDistance, false, 'px');
          this.nextDragSlide.slide(this.dragDistance + this.activeSlideWidth + SLIDE_MARGIN, false, 'px');
          this.prevDragSlide.slide(this.dragDistance - this.activeSlideWidth - SLIDE_MARGIN, false, 'px');
        } else {

          return this._setInitialState();
        }
        // Store the movement speed
        this.dragSpeed = Math.round((dragDistance > this.dragDistance)
          ? dragDistance - this.dragDistance
          : this.dragDistance - dragDistance);

        // Store the new traveled distance
        this.dragDistance = dragDistance;
      }
    }
  };


  /**
   * On touch end, get the slides next position
   * @param e
   */
  handleSlideTouchEnd = () => {

    // Check if all the required stuff exists
    if (this.prevDragSlide && this.draggedSlide
      && this.nextDragSlide && this.dragDistance && this.slideOnMobile) {
      const direction = this.dragDistance >= 0 ? 'left' : 'right';

      /**
       * Upper a defined speed, we are considering that the slides must be
       * swiped to the next position, whatever the traveled distance is
       */
      if (this.dragSpeed > MAX_SLIDE_SPEED) {
        this._slideAll(direction);
      } else {
        const dragLimit     = ReactDOM.findDOMNode(this.refs.slider).getBoundingClientRect().width / 2.2;
        const dragDistance  = this.dragDistance >= 0 ? this.dragDistance : this.dragDistance * -1;

        // Check if enough distance has been traveled
        if (dragDistance > dragLimit) {
          this._slideAll(direction)
        } else {
          this._slideAll('middle');
        }
      }
    }
    this._setInitialState();
  };


  render() {

    if (!this.props.slides || this.props.slides.length === 0)
      return null;

    return (
      <div style={ sliderStyle } className={ this.props.sliderClassName } ref="slider">
        { this.props.showDots === true &&
          <Pagination
            slides={ this.props.slides }
            activeSlide={ this.props.activeSlide }
            onPaginationClick={ this.props.goToSlide }
						dots={ this.props.dots }
          />
        }
        {
          this.props.slides.map((slide, key) => (
            <Slide
              key={ key }
              ref={ `slide--${ key }` }
              index={ key }
              slide={ slide }
              isAnimated={ this.props.isAnimated }
              slidesSpeed={ this.props.slidesSpeed }
              totalSlides={ this.props.slides.length }
              activeSlide={ this.props.activeSlide }
              onTouchMove={ this.handleSlideTouchMove }
              onTouchEnd={ this.handleSlideTouchEnd }
              moveDirection={ this.props.moveDirection }
              slidesClassName={ this.props.slidesClassName }
            />
          ))
        }
      </div>
    );
  }
}

export default Slider;
