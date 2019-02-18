"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _linear_checker = _interopRequireDefault(require("../../utils/5linear_checker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mar = (0, _styledComponents.css)(["margin:", ";"], function (props) {
  return (0, _linear_checker.default)(props.mtop, props.mrow, props.mctr, props.mctl, props.mall, 0, 'px ') + (0, _linear_checker.default)(props.mrig, props.mcol, props.mctr, props.mcbr, props.mall, 0, 'px ') + (0, _linear_checker.default)(props.mbot, props.mrow, props.mcbl, props.mctl, props.mall, 0, 'px ') + (0, _linear_checker.default)(props.mlef, props.mcol, props.mcbl, props.mcbr, props.mall, 0, 'px');
});
mar.propTypes = {
  mall: _propTypes.default.number,
  mtop: _propTypes.default.number,
  mbot: _propTypes.default.number,
  mrig: _propTypes.default.number,
  mlef: _propTypes.default.number,
  mrow: _propTypes.default.number,
  mcol: _propTypes.default.number,
  mctl: _propTypes.default.number,
  mctr: _propTypes.default.number,
  mcbl: _propTypes.default.number,
  mcbr: _propTypes.default.number
};
var _default = mar;
exports.default = _default;