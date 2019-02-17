"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('says hello world', function () {
  return expect((0, _index.default)()).toBe('Hello World');
});