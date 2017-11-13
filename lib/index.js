'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReactCarousel = require('./ReactCarousel');

var _ReactCarousel2 = _interopRequireDefault(_ReactCarousel);

var _PrevArrow = require('./PrevArrow');

var _PrevArrow2 = _interopRequireDefault(_PrevArrow);

var _NextArrow = require('./NextArrow');

var _NextArrow2 = _interopRequireDefault(_NextArrow);

var _Dot = require('./Dot');

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ReactCarousel2.default.propTypes = { // TODO add default classes overwritting
  slides: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  className: _propTypes2.default.string,
  showArrows: _propTypes2.default.bool,
  showDots: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool,
  autoPlayDelay: _propTypes2.default.number,
  slidesSpeed: _propTypes2.default.number,
  isInfinite: _propTypes2.default.bool,
  isAnimated: _propTypes2.default.bool,
  stopOnHover: _propTypes2.default.bool,
  slideNavigation: _propTypes2.default.bool,
  allowKeyboard: _propTypes2.default.bool,
  customNextArrow: _propTypes2.default.func,
  customPrevArrow: _propTypes2.default.func,
  customDots: _propTypes2.default.func,
  beforeChange: _propTypes2.default.func,
  afterChange: _propTypes2.default.func,
  goToSlide: _propTypes2.default.number,
  backdropColor: _propTypes2.default.string,
  sliderClassName: _propTypes2.default.string,
  slidesClassName: _propTypes2.default.string
};

_ReactCarousel2.default.defaultProps = {
  slides: [],
  className: 'ce-carousel',
  showArrows: true,
  showDots: true,
  autoPlay: false,
  autoPlayDelay: 5000,
  slidesSpeed: 150,
  isInfinite: true,
  isAnimated: true,
  stopOnHover: false,
  slideNavigation: true,
  allowKeyboard: true,
  customNextArrow: _NextArrow2.default,
  customPrevArrow: _PrevArrow2.default,
  customDots: _Dot2.default,
  beforeChange: function beforeChange() {},
  afterChange: function afterChange() {},
  goToSlide: null,
  backdropColor: null,
  sliderClassName: 'ce-carousel__slider',
  slidesClassName: 'ce-carousel__slide'
};

exports.default = _ReactCarousel2.default;