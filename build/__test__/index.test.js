"use strict";

var _index = require("../index");

test('says hello world', function () {
  return expect((0, _index.hi)()).toBe('Hello World');
});