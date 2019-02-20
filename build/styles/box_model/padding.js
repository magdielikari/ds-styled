"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _linear_checker = _interopRequireDefault(require("../../utils/5linear_checker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = 0;
var pad = (0, _styledComponents.css)(["padding:", ";"], function (props) {
  return (0, _linear_checker.default)(props.ptop, props.prow, props.pctr, props.pctl, props.pall, defaultValue, 'px ') + (0, _linear_checker.default)(props.prig, props.pcol, props.pctr, props.pcbr, props.pall, defaultValue, 'px ') + (0, _linear_checker.default)(props.pbot, props.prow, props.pcbl, props.pctl, props.pall, defaultValue, 'px ') + (0, _linear_checker.default)(props.plef, props.pcol, props.pcbl, props.pcbr, props.pall, defaultValue, 'px');
});
pad.propTypes = {
  pall: _propTypes.default.number,
  ptop: _propTypes.default.number,
  pbot: _propTypes.default.number,
  prig: _propTypes.default.number,
  plef: _propTypes.default.number,
  prow: _propTypes.default.number,
  pcol: _propTypes.default.number,
  pctl: _propTypes.default.number,
  pctr: _propTypes.default.number,
  pcbl: _propTypes.default.number,
  pcbr: _propTypes.default.number
};
var _default = pad;
exports.default = _default;