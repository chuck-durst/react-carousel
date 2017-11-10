'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var isActive = _ref.isActive,
      index = _ref.index;


  var getStyle = function getStyle() {
    return isActive === true ? (0, _assign2.default)({}, _styles.dotStyle, _styles.activeDotStyle) : _styles.dotStyle;
  };

  return _react2.default.createElement('div', { style: getStyle(), className: 'ce-carousel__dot--' + index });
};