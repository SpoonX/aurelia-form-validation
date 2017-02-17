define(['exports', 'aurelia-logging', 'aurelia-config', 'aurelia-validation', './ValidationController'], function (exports, _aureliaLogging, _aureliaConfig, _aureliaValidation, _ValidationController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.config = exports.logger = undefined;
  exports.configure = configure;
  var logger = exports.logger = (0, _aureliaLogging.getLogger)('aurelia-form-validation');

  function configure(aurelia, config) {
    var formConfig = aurelia.container.get(_aureliaConfig.Configuration.of('aurelia-form'));

    if (formConfig.validation.controller) {
      return;
    }

    config.validation.controller = aurelia.container.get(_ValidationController.ValidationController);
  }

  var config = exports.config = {
    'aurelia-form': {
      validation: {
        trigger: _aureliaValidation.validateTrigger.change
      }
    }
  };
});