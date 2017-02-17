import {inject} from 'aurelia-dependency-injection';
import {ValidationControllerFactory,validateTrigger} from 'aurelia-validation';
import {getLogger} from 'aurelia-logging';
import {Configuration} from 'aurelia-config';

export declare class ValidationController {
  factory: any;
  constructor(validationControllerFactory?: any);
  getController(groups?: any, trigger?: any): any;
  getTriggers(): any;
}
export declare class ValidationRenderer {
  groups: any;
  constructor(groups?: any);
  
  /**
     * Add errors for valid elements.
     *
     * @param {{message: string, propertyName: string}} result
     */
  add(result?: any): any;
  
  /**
     * Get form group.
     *
     * @param {string}  propertyName
     * @param {boolean} [valid]
     *
     * @returns {*}
     */
  getGroup({
    propertyName,
    valid
  }?: {
    propertyName?: any,
    valid?: any
  }): any;
  
  /**
     * Remove errors for valid elements.
     *
     * @param {{message: string, propertyName: string}} result
     */
  remove(result?: any): any;
  
  /**
     * Render (or un-render) errors.
     *
     * @param {{render: {}, unrender: {}}} instructions
     */
  render(instructions?: any): any;
}
export declare const logger: any;
export declare function configure(aurelia?: any, config?: any): any;
export declare const config: any;