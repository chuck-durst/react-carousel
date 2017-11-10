'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dot = require('../Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var slides = _ref.slides,
      activeSlide = _ref.activeSlide,
      onPaginationClick = _ref.onPaginationClick;

  return _react2.default.createElement(
    'div',
    { className: 'ce-carousel__pagination', style: _styles.paginationStyle },
    slides.map(function (slide, key) {
      return _react2.default.createElement(
        'div',
        { key: key, onClick: function onClick() {
            return onPaginationClick(key);
          } },
        _react2.default.createElement(_Dot2.default, { index: key, isActive: key === activeSlide })
      );
    })
  );
};