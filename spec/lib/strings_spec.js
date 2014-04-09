require('../../lib/strings');

describe('String extensions', function(){

  describe('#capitalize', function(){

    it("should make the first letter of the string uppercase", function(){
      var sampleText = 'test';
      expect(sampleText.capitalize()).toBe('Test');
      expect('test'.capitalize()).toBe('Test');
    });
  });

  describe('#camelcase', function(){

    it("should camelcase text separated by spaces", function(){
      var sampleText = 'camelcase text';
      expect(sampleText.camelcase()).toBe('CamelcaseText');
      expect("camelcase text".camelcase()).toBe('CamelcaseText');
    });

  });

});