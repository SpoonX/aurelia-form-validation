'use strict';

exports.__esModule = true;
exports.ValidationController = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaValidation = require('aurelia-validation');

var _ValidationRenderer = require('./ValidationRenderer');



var ValidationController = exports.ValidationController = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaValidation.ValidationControllerFactory), _dec(_class = function () {
  function ValidationController(validationControllerFactory) {
    

    this.factory = null;

    this.factory = validationControllerFactory;
  }

  ValidationController.prototype.getController = function getController(groups) {
    var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var controller = this.factory.createForCurrentScope();

    controller.validateTrigger = trigger;

    controller.addRenderer(new _ValidationRenderer.ValidationRenderer(groups));

    return controller;
  };

  ValidationController.prototype.getTriggers = function getTriggers() {
    return _aureliaValidation.validateTrigger;
  };

  return ValidationController;
}()) || _class);