'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _debounce = require('./debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactCarousel = function (_React$PureComponent) {
  (0, _inherits3.default)(ReactCarousel, _React$PureComponent);

  function ReactCarousel(props) {
    (0, _classCallCheck3.default)(this, ReactCarousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReactCarousel.__proto__ || (0, _getPrototypeOf2.default)(ReactCarousel)).call(this, props));

    _this._initSlides = function () {
      var slides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _this.setState({ slides: slides });
    };

    _this._setAutoPlay = function () {
      _this.autoPlayInterval = setInterval(function () {
        if (_this.isHovered === false || _this.props.stopOnHover === false) {
          _this.goToSlide();
        }
      }, _this.props.autoPlayDelay);
    };

    _this._getPrevArrow = function () {
      return _this.props.customPrevArrow ? _this.props.customPrevArrow(_this.props.isInfinite === true || _this.state.activeSlide > 0) : null;
    };

    _this._getNextArrow = function () {
      return _this.props.customNextArrow ? _this.props.customNextArrow(_this.props.isInfinite === true || _this.state.activeSlide < _this.state.slides.length - 1) : null;
    };

    _this._getComponentStyle = function () {
      return (0, _assign2.default)({}, _styles.carouselStyle, {
        backgroundColor: _this.props.backdropColor
      });
    };

    _this.goToSlide = function () {
      var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.activeSlide + 1;

      _this.props.beforeChange(_this.state.activeSlide);
      if (slide < 0 && _this.props.isInfinite === true) {
        _this.setState({
          activeSlide: _this.state.slides.length - 1,
          moveDirection: 'left'
        }, function () {
          return _this.props.afterChange(_this.state.slides.length - 1, 'left');
        });
      } else if (slide > _this.state.slides.length - 1 && _this.props.isInfinite === true) {
        _this.setState({
          activeSlide: 0,
          moveDirection: 'right'
        }, function () {
          return _this.props.afterChange(0, 'right');
        });
      } else if (slide >= 0 && slide <= _this.state.slides.length - 1) {
        _this.setState({
          activeSlide: slide,
          moveDirection: slide > _this.state.activeSlide ? 'right' : 'left'
        }, function () {
          return _this.props.afterChange(slide, _this.state.moveDirection);
        });
      }
    };

    _this._handleMouseHover = function (isHover) {
      _this.isHovered = isHover;
    };

    _this._handlePrevClick = (0, _debounce2.default)(function () {
      _this.goToSlide(_this.state.activeSlide - 1);
    }, _this.props.isAnimated ? _this.props.slidesSpeed : 0, true);
    _this._handleNextClick = (0, _debounce2.default)(function () {
      _this.goToSlide(_this.state.activeSlide + 1);
    }, _this.props.isAnimated ? _this.props.slidesSpeed : 0, true);

    _this._handleKeyUp = function (e) {
      var which = e.which;

      if (_this.props.allowKeyboard === false || !which) return null;

      switch (which) {
        case 39:
          return _this._handleNextClick();
        case 37:
          return _this._handlePrevClick();
        default:
          return null;
      }
    };

    _this.state = {
      slides: [],
      activeSlide: 0,
      moveDirection: null
    };

    _this.autoPlayInterval = null;
    _this.isHovered = false;
    return _this;
  }

  (0, _createClass3.default)(ReactCarousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.slides) this._initSlides(this.props.slides);

      if (this.props.autoPlay === true) {
        this._setAutoPlay();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.slides !== nextProps.slides) {
        this._initSlides(nextProps.slides);
      }

      if (nextProps.goToSlide && nextProps.goToSlide !== this.props.goToSlide && this.state.slides[nextProps.goToSlide]) {
        this.goToSlide(nextProps.goToSlide);
      }
      if (nextProps.autoPlay !== this.props.autoPlay) {
        if (nextProps.autoPlay === false) {
          clearInterval(this.autoPlayInterval);
        } else {
          this._setAutoPlay();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.autoPlayInterval);
    }

    /**
     * Initialize the slides
     * @param slides
     * @private
     */


    /**
     * Launches the automatic play
     * @private
     */


    /**
     * Returns the PrevArrow component depending
     * on the current configuration
     * @returns {null}
     * @private
     */


    /**
     * Returns the NextArrow component depending
     * on the current configuration
     * @returns {null}
     * @private
     */


    /**
     * Returns the component computed style
     * Adds a background-color if defined
     * @returns {*}
     * @private
     */


    /**
     * Goes to a defined slide
     * Checks if the infinite mode is enabled
     * @param slide
     * @private
     */


    /**
     * Defines if the component is hovered
     * This will be useful to stop the auto play
     * @param isHover
     * @private
     */


    /**
     * Debounce if animated
     * @private
     */


    /**
     * Debounce if animated
     * the slideSpeed prop is used as the debounce value
     * @private
     */


    /**
     * Allow the user to use his keyboard arrow
     * keys to navigated through the slides
     * @param e
     * @returns {null}
     * @private
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var prevArrow = this.props.showArrows === true ? this._getPrevArrow() : null;

      var nextArrow = this.props.showArrows === true ? this._getNextArrow() : null;

      var componentStyle = this._getComponentStyle();

      return _react2.default.createElement(
        'div',
        {
          tabIndex: '0',
          onKeyUp: this._handleKeyUp,
          className: this.props.className,
          style: componentStyle,
          onMouseOver: function onMouseOver() {
            return _this2._handleMouseHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2._handleMouseHover(false);
          }
        },
        this.props.showArrows === true && this.props.slides.length > 1 && _react2.default.createElement(
          'div',
          { onClick: this._handlePrevClick, style: _styles.arrowContainerStyle },
          prevArrow
        ),
        _react2.default.createElement(
          'div',
          { style: _styles.carouselContentStyle },
          _react2.default.createElement(_Slider2.default, {
            slides: this.state.slides,
            activeSlide: this.state.activeSlide,
            isInfinite: this.props.isInfinite,
            isAnimated: this.props.isAnimated,
            slidesSpeed: this.props.slidesSpeed,
            slideNavigation: this.props.slideNavigation,
            slideOnDesktop: this.props.slideOnDesktop,
            showDots: this.props.showDots,
            moveDirection: this.state.moveDirection,
            goToSlide: this.goToSlide,
            sliderClassName: this.props.sliderClassName,
            slidesClassName: this.props.slidesClassName
          }),
          this.props.showDots === true && this.props.slides.length > 1 && _react2.default.createElement(_Pagination2.default, {
            slides: this.state.slides,
            activeSlide: this.state.activeSlide,
            onPaginationClick: this.goToSlide,
            dots: this.props.customDots
          })
        ),
        this.props.showArrows === true && this.props.slides.length > 1 && _react2.default.createElement(
          'div',
          { onClick: this._handleNextClick, style: _styles.arrowContainerStyle },
          nextArrow
        )
      );
    }
  }]);
  return ReactCarousel;
}(_react2.default.PureComponent);

exports.default = ReactCarousel;