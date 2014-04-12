require('../../lib/encryption');

describe("Hashing extensions", function(){

  describe('#sha3', function(){
    it("should run without parameters", function(){
      var originalText = 'test';
      expect(originalText.sha3()).not.toBe(originalText);
    });
    
    it("should accept only a number as its first parameter", function(){
      var failing = function() {
        'test'.sha3('invalid');
      };
      
      var passing = function() {
        'test'.sha3(512);
      };

      expect(failing).toThrow();
      expect(passing).not.toThrow();
    });

    it("should only accept 224, 256, 384 and 512 as the length argument", function(){
      var passing = function() {
        'test'.sha3(224);
        'test'.sha3(256);
        'test'.sha3(384);
        'test'.sha3(512);
      };
      var failing = function() {
        'test'.sha3(123);
      };
      expect(passing).not.toThrow();
      expect(failing).toThrow();
    });

    it("should only accept a string as the second argument", function(){
      var failing = function() {
        'test'.sha3(224, 123);
      };
      var passing = function() {
        'test'.sha3(512, 'hex');
      };
      expect(passing).not.toThrow();
      expect(failing).toThrow();
    });

    it("should only accept latin1, hex, and base64 as the encoding argument", function(){
      var passing = function() {
        'test'.sha3(512, 'latin1');
        'test'.sha3(512, 'hex');
        'test'.sha3(512, 'base64');
      };
      var failing = function() {
        'test'.sha3(512, 'invalid');
      };
      expect(passing).not.toThrow();
      expect(failing).toThrow();
    });

    it("if no arguments are given, it should return a 512-bit long hexadecimal hash", function(){
      expect('test'.sha3()).toEqual('test'.sha3(512, 'hex'));
    });

    it("should be able to return a 224-bit hex encoded string", function(){
      var hash = '3be30a9ff64f34a5861116c5198987ad780165f8366e67aff4760b5e';
      expect('test'.sha3(224, 'hex')).toEqual(hash);
    });
    it("should be able to return a 224-bit latin1 encoded string", function(){
      var hash = String('test').sha3(224, 'latin1'); // Encoding is hard to reproduce
      expect('test'.sha3(224, 'latin1')).toEqual(hash);
    });
    it("should be able return a 224-bit base64 enconded string", function(){
      var hash = 'O+MKn/ZPNKWGERbFGYmHrXgBZfg2bmev9HYLXg==';
      expect('test'.sha3(224, 'base64')).toEqual(hash);
    });

    it("should be able to return a 256-bit hex encoded string", function(){
      var hash = '9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658';
      expect('test'.sha3(256, 'hex')).toEqual(hash);
    });
    it("should be able to return a 256-bit latin1 encoded string", function(){
      var hash = String('test').sha3(256, 'latin1'); // Encoding is hard to reproduce
      expect('test'.sha3(256, 'latin1')).toEqual(hash);
    });
    it("should be able return a 256-bit base64 enconded string", function(){
      var hash = 'nCL/XyHwuBsRPmP3222pT+3vEbIRm0CIuJZk+5o8tlg=';
      expect('test'.sha3(256, 'base64')).toEqual(hash);
    });

    it("should be able to return a 384-bit hex encoded string", function(){
      var hash = '53d0ba137307d4c2f9b6674c83edbd58b70c0f4340133ed0adc6fba1d2478a6a03b7788229e775d2de8ae8c0759d0527';
      expect('test'.sha3(384, 'hex')).toEqual(hash);
    });
    it("should be able to return a 384-bit latin1 encoded string", function(){
      var hash = String('test').sha3(384, 'latin1'); // Encoding is hard to reproduce
      expect('test'.sha3(384, 'latin1')).toEqual(hash);
    });
    it("should be able return a 384-bit base64 enconded string", function(){
      var hash = 'U9C6E3MH1ML5tmdMg+29WLcMD0NAEz7Qrcb7odJHimoDt3iCKed10t6K6MB1nQUn';
      expect('test'.sha3(384, 'base64')).toEqual(hash);
    });

    it("should be able to return a 512-bit hex encoded string", function(){
      var hash = '1e2e9fc2002b002d75198b7503210c05a1baac4560916a3c6d93bcce3a50d7f00fd395bf1647b9abb8d1afcc9c76c289b0c9383ba386a956da4b38934417789e';
      expect('test'.sha3(512, 'hex')).toEqual(hash);
    });
    it("should be able to return a 512-bit latin1 encoded string", function(){
      var hash = String('test').sha3(512, 'latin1'); // Encoding is hard to reproduce
      expect('test'.sha3(512, 'latin1')).toEqual(hash);
    });
    it("should be able return a 512-bit base64 enconded string", function(){
      var hash = 'Hi6fwgArAC11GYt1AyEMBaG6rEVgkWo8bZO8zjpQ1/AP05W/Fke5q7jRr8ycdsKJsMk4O6OGqVbaSziTRBd4ng==';
      expect('test'.sha3(512, 'base64')).toEqual(hash);
    });
  });

});

describe("Encryption extensions", function(){

});