'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationRenderer = undefined;

var _aureliaFormValidation = require('./aurelia-form-validation');



var ValidationRenderer = exports.ValidationRenderer = function () {
  function ValidationRenderer(groups) {
    

    this.groups = {};

    this.groups = groups;
  }

  ValidationRenderer.prototype.add = function add(result) {
    var group = this.getGroup(result);

    if (!group) {
      return;
    }

    group.error = result.message;
    group.state = 'error';
  };

  ValidationRenderer.prototype.getGroup = function getGroup(_ref) {
    var propertyName = _ref.propertyName,
        valid = _ref.valid;

    if (valid) {
      return;
    }

    var group = this.groups[propertyName];

    if (!group) {
      _aureliaFormValidation.logger.warn('Group not found for validation error on \'' + propertyName + '\'.');

      return;
    }

    return group;
  };

  ValidationRenderer.prototype.remove = function remove(result) {
    var group = this.getGroup(result);

    if (!group) {
      return;
    }

    group.error = '';
    group.state = 'success';
  };

  ValidationRenderer.prototype.render = function render(instructions) {
    for (var _iterator = instructions.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var _ref6 = _ref3;
      var result = _ref6.result;

      this.remove(result);
    }

    for (var _iterator2 = instructions.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref5 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref5 = _i2.value;
      }

      var _ref7 = _ref5;
      var result = _ref7.result;

      this.add(result);
    }
  };

  return ValidationRenderer;
}();