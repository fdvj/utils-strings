require('../../lib/strings');

describe('String extensions', function(){

  describe('#capitalize', function(){

    it("should make the first letter of the string uppercase", function(){
      var sampleText = 'test';
      expect(sampleText.capitalize()).toBe('Test');
    });
  });

  describe('#camelize', function(){

    it("should camelcase text separated by spaces", function(){
      var sampleText = 'camelcase text';
      expect(sampleText.camelize()).toBe('CamelcaseText');
    });

  });

});