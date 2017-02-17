import {configure} from '../src/aurelia-form-validation';
//import {Container} from 'aurelia-dependency-injection';

describe('aurelia-form-validation', function() {
  describe('configure()', function() {
    it('Should call configure with a function', function() {
      configure(()=>{
        expect(true).toBe(true);
      });
    });
  });
});
