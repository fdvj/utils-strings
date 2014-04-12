
// Add SHA3 to strings
String.prototype.sha3 = function(length, encoding) {
  var CryptoJS = require('../vendor/cryptojs/crypto');
  
  length = length || 512;
  encoding = encoding || 'hex';

  var _validLengths = [224, 256, 384, 512],
      _validEncoding = ['latin1', 'hex', 'base64'];

  // Length of hash
  if (typeof length !== 'number') {
    throw Error('Please give the length as a number');
  }
  if (_validLengths.indexOf(length) == -1) {
    throw Error('Hash length can only be ' + _validLengths.join(', ') + ' bits long');
  }

  // Encoding of hash
  if (typeof encoding !== 'string') {
    throw Error('Encoding must be a string');
  }

  if (_validEncoding.indexOf(encoding.toLowerCase()) == -1) {
    throw Error('Can only encode in the following formats: ' + _validEncoding.join(', ').trim());
  }

  return CryptoJS.SHA3(this.toString(), {outputLength: length}).toString(CryptoJS.enc[encoding.capitalize()]);
};