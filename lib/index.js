"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = constantMirror;

function constantMirror() {
  for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
    constants[_key] = arguments[_key];
  }

  return constants.reduce(function (obj, constant) {
    var _extends2;

    return constant ? _extends({}, obj, (_extends2 = {}, _extends2[constant] = constant, _extends2)) : obj;
  }, {});
}

module.exports = exports["default"];