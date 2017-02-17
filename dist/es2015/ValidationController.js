var _dec, _class;

import { inject } from 'aurelia-dependency-injection';
import { ValidationControllerFactory, validateTrigger } from 'aurelia-validation';
import { ValidationRenderer } from './ValidationRenderer';

export let ValidationController = (_dec = inject(ValidationControllerFactory), _dec(_class = class ValidationController {

  constructor(validationControllerFactory) {
    this.factory = null;

    this.factory = validationControllerFactory;
  }

  getController(groups, trigger = 0) {
    let controller = this.factory.createForCurrentScope();

    controller.validateTrigger = trigger;

    controller.addRenderer(new ValidationRenderer(groups));

    return controller;
  }

  getTriggers() {
    return validateTrigger;
  }
}) || _class);