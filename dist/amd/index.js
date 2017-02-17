define(['exports', './aurelia-form-validation'], function (exports, _aureliaFormValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaFormValidation).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaFormValidation[key];
      }
    });
  });
});