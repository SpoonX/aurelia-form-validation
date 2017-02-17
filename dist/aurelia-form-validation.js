import {getLogger} from 'aurelia-logging';
import {Configuration} from 'aurelia-config';
import {validateTrigger} from 'aurelia-validation';
import {ValidationController} from './ValidationController';

export const logger = getLogger('aurelia-form-validation');

export function configure(aurelia, config) {
  let formConfig = aurelia.container.get(Configuration.of('aurelia-form'));

  if (formConfig.validation.controller) {
    return;
  }

  formConfig.validation.controller = aurelia.container.get(ValidationController);
}

export const config = {
  'aurelia-form': {
    validation: {
      trigger: validateTrigger.change
    }
  }
};
