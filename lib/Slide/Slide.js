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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Slide, _React$Component);

  function Slide(props) {
    (0, _classCallCheck3.default)(this, Slide);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      style: null
    };

    _this.slideEl = null;
    _this.stay = false;
    _this.transition = null;
    return _this;
  }

  (0, _createClass3.default)(Slide, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ style: this._getStyle(this.props) });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slideEl = _reactDom2.default.findDOMNode(this.refs.slide);
      this.transition = this.slideEl.style.transition;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.activeSlide === this.props.index || nextProps.activeSlide === nextProps.index || nextState.style !== this.state.style;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var direction = nextProps.moveDirection;

      if (nextProps.activeSlide !== this.props.activeSlide && this.stay === false) {

        // Set the slide at the good place if necessary
        if (this.props.activeSlide === this.props.index || nextProps.activeSlide === nextProps.index) {
          if (nextProps.activeSlide === nextProps.index) {
            if (direction === 'right') {
              this.slide(100, false);
            } else if (direction === 'left') {
              this.slide(-100, false);
            }
          }

          // Move the slide
          this._moveSlide(nextProps, direction);
        } else {
          this.slideEl.style.transition = 'none';
        }
      }

      if (nextProps.slidesSpeed !== this.props.slidesSpeed) {
        var style = this._getStyle(nextProps);
        this.setState({ style: style }, function () {
          _this2.transition = style.transition;
        });
      }
      this.stay = false;
    }

    /**
     * Get the component computed style
     * depending on the current configuration
     * Adds the Slide background-image and enables
     * the transition animation if requested
     * @returns {*}
     * @private
     */


    /**
     * Move the slide at the good place depending on its current place
     * and on the slide direction
     * @param nextProps
     * @param direction
     * @private
     */


    /**
     * Slide the slide... haha...
     * @param x {int}               : the slide coordinates
     * @param isAnimated {boolean}  : defines if the move must be animated
     * @param unit {string}         : the distance unity that must be used
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        ref: 'slide',
        style: this.state.style,
        className: this.props.slidesClassName,
        onTouchMove: this._handleTouchMove,
        onTouchEnd: this.props.onTouchEnd
      });
    }
  }]);
  return Slide;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._getStyle = function (props) {
    var stateStyle = props.activeSlide === props.index ? _styles.activeSlideStyle : props.index > props.activeSlide ? _styles.nextSlideStyle : _styles.prevSlideStyle;
    return (0, _assign2.default)({}, _styles.slideStyle, stateStyle, {
      backgroundImage: 'url(' + props.slide + ')',
      transition: props.isAnimated === true ? 'transform ' + props.slidesSpeed + 'ms ease-out' : 'none'
    });
  };

  this._handleTouchMove = function (e) {
    return _this3.props.onTouchMove(e, _this3.props.index);
  };

  this._moveSlide = function (nextProps, direction) {
    if (_this3.props.activeSlide === nextProps.index) {
      setTimeout(function () {
        _this3.slide(direction === 'right' ? -100 : 100);
      }, 100);
    } else if (nextProps.activeSlide === nextProps.index) {
      setTimeout(function () {
        _this3.slide(0);
      }, 100);
    }
  };

  this.slide = function (x) {
    var isAnimated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '%';
    var stay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var slideEl = _this3.slideEl;

    slideEl.style.transition = isAnimated ? _this3.transition : 'none';
    slideEl.style.transform = 'translate3d(' + x + unit + ', 0, 0) scale(0.9)';

    /* If stay === true, the next move will be ignored */
    _this3.stay = stay;
  };
}, _temp);
exports.default = Slide;