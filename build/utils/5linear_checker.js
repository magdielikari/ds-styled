"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check values ​​by priority returned the highest priority value and add the independent term
 * @param {string} x_gradient  highest priority
 * @param {string} y_gradient  higher priority 
 * @param {string} z_gradient  medium priority
 * @param {string} w_gradient  lower priority
 * @param {string} t_gradient  lowest priority
 * @param {string} defultVal   default value
 * @param {string} independent value added at the end
 */
var fn = function fn(x_gradient, y_gradient, z_gradient, w_gradient, t_gradient, defultVal, independent) {
  return (x_gradient ? x_gradient : y_gradient ? y_gradient : z_gradient ? z_gradient : w_gradient ? w_gradient : t_gradient ? t_gradient : defultVal) + independent;
};

fn.propTypes = {
  x_gradient: _propTypes.default.string,
  y_gradient: _propTypes.default.string,
  z_gradient: _propTypes.default.string,
  w_gradient: _propTypes.default.string,
  t_gradient: _propTypes.default.string,
  defultVal: _propTypes.default.string.isRequired,
  independent: _propTypes.default.string.isRequired
};
var _default = fn;
exports.default = _default;