import {inject} from 'aurelia-dependency-injection';
import {ValidationControllerFactory, validateTrigger} from 'aurelia-validation';
import {ValidationRenderer} from './ValidationRenderer';

@inject(ValidationControllerFactory)
export class ValidationController {
  factory = null;

  constructor(validationControllerFactory) {
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
}
