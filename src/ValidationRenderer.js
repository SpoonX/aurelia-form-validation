import {logger} from './aurelia-form-validation';

export class ValidationRenderer {
  groups = {};

  constructor(groups) {
    this.groups = groups;
  }

  /**
   * Add errors for valid elements.
   *
   * @param {{message: string, propertyName: string}} result
   */
  add(result) {
    let group = this.getGroup(result);

    if (!group) {
      return;
    }

    group.error = result.message;
    group.state = 'error';
  }

  /**
   * Get form group.
   *
   * @param {string}  propertyName
   * @param {boolean} [valid]
   *
   * @returns {*}
   */
  getGroup({propertyName, valid}) {
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

  /**
   * Remove errors for valid elements.
   *
   * @param {{message: string, propertyName: string}} result
   */
  remove(result) {
    let group = this.getGroup(result);

    if (!group) {
      return;
    }

    group.error = '';
    group.state = 'success';
  }

  /**
   * Render (or un-render) errors.
   *
   * @param {{render: {}, unrender: {}}} instructions
   */
  render(instructions) {
    for (let {result} of instructions.unrender) {
      this.remove(result);
    }

    for (let {result} of instructions.render) {
      this.add(result);
    }
  }
}
