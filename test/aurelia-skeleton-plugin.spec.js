import {configure} from '../src/aurelia-form-validation';

describe('aurelia-form-validation', function() {
  describe('configure()', function() {
    it('Should call configure with a function', function() {
      expect(typeof configure).toBe('function');
    });
  });
});
