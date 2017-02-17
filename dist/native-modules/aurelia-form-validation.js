'use strict';

exports.__esModule = true;
exports.config = exports.logger = undefined;
exports.configure = configure;

var _aureliaLogging = require('aurelia-logging');

var _aureliaConfig = require('aurelia-config');

var _aureliaValidation = require('aurelia-validation');

var _ValidationController = require('./ValidationController');

var logger = exports.logger = (0, _aureliaLogging.getLogger)('aurelia-form-validation');

function configure(aurelia, config) {
  var formConfig = aurelia.container.get(_aureliaConfig.Configuration.of('aurelia-form'));

  if (formConfig.validation.controller) {
    return;
  }

  formConfig.validation.controller = aurelia.container.get(_ValidationController.ValidationController);
}

var config = exports.config = {
  'aurelia-form': {
    validation: {
      trigger: _aureliaValidation.validateTrigger.change
    }
  }
};