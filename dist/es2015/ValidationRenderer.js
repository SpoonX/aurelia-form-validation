import { logger } from './aurelia-form-validation';

export let ValidationRenderer = class ValidationRenderer {

  constructor(groups) {
    this.groups = {};

    this.groups = groups;
  }

  add(result) {
    let group = this.getGroup(result);

    if (!group) {
      return;
    }

    group.error = result.message;
    group.state = 'error';
  }

  getGroup({ propertyName, valid }) {
    if (valid) {
      return;
    }

    let group = this.groups[propertyName];

    if (!group) {
      logger.warn(`Group not found for validation error on '${propertyName}'.`);

      return;
    }

    return group;
  }

  remove(result) {
    let group = this.getGroup(result);

    if (!group) {
      return;
    }

    group.error = '';
    group.state = 'success';
  }

  render(instructions) {
    for (let _ref of instructions.unrender) {
      let { result } = _ref;

      this.remove(result);
    }

    for (let _ref2 of instructions.render) {
      let { result } = _ref2;

      this.add(result);
    }
  }
};