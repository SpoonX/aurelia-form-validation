'use strict';

System.register(['aurelia-logging', 'aurelia-config', 'aurelia-validation', './ValidationController'], function (_export, _context) {
  "use strict";

  var getLogger, Configuration, validateTrigger, ValidationController, logger, config;
  function configure(aurelia, config) {
    var formConfig = aurelia.container.get(Configuration.of('aurelia-form'));

    if (formConfig.validation.controller) {
      return;
    }

    formConfig.validation.controller = aurelia.container.get(ValidationController);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_aureliaConfig) {
      Configuration = _aureliaConfig.Configuration;
    }, function (_aureliaValidation) {
      validateTrigger = _aureliaValidation.validateTrigger;
    }, function (_ValidationController) {
      ValidationController = _ValidationController.ValidationController;
    }],
    execute: function () {
      _export('logger', logger = getLogger('aurelia-form-validation'));

      _export('logger', logger);

      _export('config', config = {
        'aurelia-form': {
          validation: {
            trigger: validateTrigger.change
          }
        }
      });

      _export('config', config);
    }
  };
});