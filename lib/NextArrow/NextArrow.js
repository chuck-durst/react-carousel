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

exports.default = function (isActive) {
  var style = isActive ? _styles.defaultNextArrowStyle : (0, _assign2.default)({}, _styles.defaultNextArrowStyle, _styles.lockedArrowStyle);

  return _react2.default.createElement(
    'div',
    { style: style, className: 'ce-carousel__next-arrow' },
    _react2.default.createElement(
      'svg',
      { fill: '#fff', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }),
      _react2.default.createElement('path', { d: 'M0-.25h24v24H0z', fill: 'none' })
    )
  );
};