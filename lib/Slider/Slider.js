'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Slide = require('../Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SLIDE_MARGIN = 30;
var MAX_SLIDE_SPEED = 3;

var Slider = function (_React$PureComponent) {
  (0, _inherits3.default)(Slider, _React$PureComponent);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this._setInitialState = function () {
      _this.pageX = 0;
      _this.dragDistance = 0;
      _this.dragSpeed = 0;
      _this.draggedSlide = null;
      _this.activeSlideWidth = 0;
      _this.prevDragSlide = null;
      _this.nextDragSlide = null;
    };

    _this._slideAll = function (direction) {
      if (direction === 'middle') {
        if (_this.props.slides.length > 2) {
          _this.prevDragSlide.slide(-100, true, '%', true);
          _this.nextDragSlide.slide(100, true, '%', true);
        } else {

          // Special support when there is only 2 slides
          _this.prevDragSlide.slide(_this.dragDistance > 0 ? -100 : 100, true, '%', true);
        }
        _this.draggedSlide.slide(0, true, '%', true);
        return null;
      }

      // Special support when there is only 2 slides
      if (_this.props.slides.length > 2) {
        _this.prevDragSlide.slide(direction === 'right' ? -100 : 0, true, '%', true);
        _this.draggedSlide.slide(direction === 'right' ? -100 : 100, true, '%', true);
        _this.nextDragSlide.slide(direction === 'right' ? 0 : 100, true, '%', true);
      } else {
        _this.draggedSlide.slide(direction === 'right' ? -100 : 100, true, '%', true);
        _this.prevDragSlide.slide(0, true, '%', true);
      }
      _this.props.goToSlide(direction === 'right' ? _this.nextDragSlide.props.index : _this.prevDragSlide.props.index);
    };

    _this.handleSlideMove = function (pageX, slideIndex) {
      if (_this.props.slideNavigation === true && _this.props.slides.length > 1) {

        // Check if there is already a dragged slide stored and add it the opposite case
        if (!_this.draggedSlide) {
          var prevSlideIndex = slideIndex - 1 >= 0 ? slideIndex - 1 : _this.props.slides.length - 1;
          var nextSlideIndex = slideIndex + 1 <= _this.props.slides.length - 1 ? slideIndex + 1 : 0;

          _this.prevDragSlide = _this.refs['slide--' + prevSlideIndex] || null;
          _this.nextDragSlide = _this.refs['slide--' + nextSlideIndex] || null;
          _this.draggedSlide = _this.refs['slide--' + slideIndex] || null;
          _this.dragDistance = 0;
          _this.pageX = pageX;
          _this.activeSlideWidth = _reactDom2.default.findDOMNode(_this.draggedSlide).getBoundingClientRect().width;
        }

        // Check if all the slides exist
        if (_this.prevDragSlide && _this.nextDragSlide && _this.draggedSlide) {

          // The following value must never be equal to zero or the slider won't be able to
          // move when the infinite mode is disabled
          var dragDistance = pageX - _this.pageX || (slideIndex === 0 ? -1 : 1);
          var direction = dragDistance > 0 ? 'left' : 'right';

          // Check if the slides moves are not restricted
          if (_this.props.isInfinite === true || direction === 'left' && slideIndex !== 0 || direction === 'right' && slideIndex !== _this.props.slides.length - 1) {

            // Move the slides to their next position
            _this.draggedSlide.slide(_this.dragDistance, false, 'px');

            if (_this.props.slides.length > 2 || direction === 'right') {
              _this.nextDragSlide.slide(_this.dragDistance + _this.activeSlideWidth + SLIDE_MARGIN, false, 'px');
            }
            if (_this.props.slides.length > 2 || direction === 'left') {
              _this.prevDragSlide.slide(_this.dragDistance - _this.activeSlideWidth - SLIDE_MARGIN, false, 'px');
            }
          } else {

            return _this._setInitialState();
          }
          // Store the movement speed
          _this.dragSpeed = Math.round(dragDistance > _this.dragDistance ? dragDistance - _this.dragDistance : _this.dragDistance - dragDistance);

          // Store the new traveled distance
          _this.dragDistance = dragDistance;
        }
      }
    };

    _this.handleSlideMoveEnd = function () {

      // Check if all the required stuff exists
      if (_this.prevDragSlide && _this.draggedSlide && _this.nextDragSlide && _this.dragDistance && _this.props.slideNavigation) {
        var direction = _this.dragDistance >= 0 ? 'left' : 'right';

        /**
         * Upper a defined speed, we are considering that the slides must be
         * swiped to the next position, whatever the traveled distance is
         */
        if (_this.dragSpeed > MAX_SLIDE_SPEED) {
          _this._slideAll(direction);
        } else {
          var dragLimit = _reactDom2.default.findDOMNode(_this.refs.slider).getBoundingClientRect().width / 2.2;
          var dragDistance = _this.dragDistance >= 0 ? _this.dragDistance : _this.dragDistance * -1;

          // Check if enough distance has been traveled
          if (dragDistance > dragLimit) {
            _this._slideAll(direction);
          } else {
            _this._slideAll('middle');
          }
        }
      }
      _this._setInitialState();
    };

    _this._setInitialState();
    return _this;
  }

  /**
   * Slide the three handled slides to a defined
   * direction
   * @param direction
   * @returns {null}
   * @private
   */


  /**
   * Move the targeted slide and its neighbors
   * depending on the move direction
   * @param slideIndex
   * @param pageX
   * @private
   */


  /**
   * On touch end, get the slides next position
   */


  (0, _createClass3.default)(Slider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.slides || this.props.slides.length === 0) return null;

      return _react2.default.createElement(
        'div',
        { style: _styles.sliderStyle, className: this.props.sliderClassName, ref: 'slider' },
        this.props.slides.map(function (slide, key) {
          return _react2.default.createElement(_Slide2.default, {
            key: key,
            ref: 'slide--' + key,
            index: key,
            slide: slide,
            isAnimated: _this2.props.isAnimated,
            slidesSpeed: _this2.props.slidesSpeed,
            totalSlides: _this2.props.slides.length,
            activeSlide: _this2.props.activeSlide,
            onSlideMove: _this2.handleSlideMove,
            onSlideMoveEnd: _this2.handleSlideMoveEnd,
            moveDirection: _this2.props.moveDirection,
            slidesClassName: _this2.props.slidesClassName
          });
        })
      );
    }
  }]);
  return Slider;
}(_react2.default.PureComponent);

exports.default = Slider;