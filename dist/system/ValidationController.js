'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-validation', './ValidationRenderer'], function (_export, _context) {
  "use strict";

  var inject, ValidationControllerFactory, validateTrigger, ValidationRenderer, _dec, _class, ValidationController;

  

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaValidation) {
      ValidationControllerFactory = _aureliaValidation.ValidationControllerFactory;
      validateTrigger = _aureliaValidation.validateTrigger;
    }, function (_ValidationRenderer) {
      ValidationRenderer = _ValidationRenderer.ValidationRenderer;
    }],
    execute: function () {
      _export('ValidationController', ValidationController = (_dec = inject(ValidationControllerFactory), _dec(_class = function () {
        function ValidationController(validationControllerFactory) {
          

          this.factory = null;

          this.factory = validationControllerFactory;
        }

        ValidationController.prototype.getController = function getController(groups) {
          var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          var controller = this.factory.createForCurrentScope();

          controller.validateTrigger = trigger;

          controller.addRenderer(new ValidationRenderer(groups));

          return controller;
        };

        ValidationController.prototype.getTriggers = function getTriggers() {
          return validateTrigger;
        };

        return ValidationController;
      }()) || _class));

      _export('ValidationController', ValidationController);
    }
  };
});