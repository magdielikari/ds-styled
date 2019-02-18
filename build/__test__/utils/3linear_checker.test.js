"use strict";

var _linear_checker = _interopRequireDefault(require("../../utils/3linear_checker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('3linear_checker', function () {
  it('Without checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', '', '', '0', '');
    expect(sol).toBe('0');
  });
  it('With last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', '', 'a', '0', '');
    expect(sol).toBe('a');
  });
  it('With penultimate checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', 'a', '', '0', '');
    expect(sol).toBe('a');
  });
  it('With penultimate and last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', 'a', 'b', '0', '');
    expect(sol).toBe('a');
  });
  it('With antepenultimate checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', '', '', '0', '');
    expect(sol).toBe('a');
  });
  it('With antepenultimate and penultimate checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', 'b', '', '0', '');
    expect(sol).toBe('a');
  });
  it('With antepenultimate and last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', '', 'b', '0', '');
    expect(sol).toBe('a');
  });
  it('With antepenultimate, penultimate and last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', 'b', 'c', '0', '');
    expect(sol).toBe('a');
  });
  it('Without checked values but with independent', function () {
    var sol = (0, _linear_checker.default)('', '', '', '0', 'px');
    expect(sol).toBe('0px');
  });
  it('With last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', '', 'a', '0', 'px');
    expect(sol).toBe('apx');
  });
  it('With penultimate checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', 'a', '', '0', 'px');
    expect(sol).toBe('apx');
  });
  it('With penultimate and last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('', 'a', 'b', '0', 'px');
    expect(sol).toBe('apx');
  });
  it('With antepenultimate checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', '', '', '0', 'px');
    expect(sol).toBe('apx');
  });
  it('With antepenultimate and last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', '', 'c', '0', 'px');
    expect(sol).toBe('apx');
  });
  it('With antepenultimate and penultimate checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', 'b', '', '0', 'px');
    expect(sol).toBe('apx');
  });
  it('With antepenultimate, penultimate and last checked values and independent', function () {
    var sol = (0, _linear_checker.default)('a', 'b', 'c', '0', 'px');
    expect(sol).toBe('apx');
  });
});