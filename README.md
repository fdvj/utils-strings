utils-strings
=============
[![Build Status](https://travis-ci.org/fdvj/utils-strings.svg?branch=master)](https://travis-ci.org/fdvj/utils-strings)

Library which provides additional methods for string types.  This is a work in progress, so additional methods will be added with time, including encryption methods. Right now I'm using it for personal projects, so once I create a new method, I'll add this to this library.

Usage
-----

To use the library, simply require the library. No need to assign it to a variable as it will prototype the String class.

```javascript
require('utils-strings');
```

General Methods
--------------

This library contains several string methods, which are shown below

### capitalize()

Returns the string with the first letter in uppercase.

```javascript
var text = "john";
text.capitalize(); // returns "John"
"doe".capitalize(); // returns "Doe"
```

### camelcase()

Returns the string on camelcase format, meaning the first letter will be uppercase, spaces and underscores will be trimmed and the first letter after them will be capitalized.

```javascript
var text = "john doe";
text.camelcase(); // returns "JohnDoe"
"john doe".camelcase(); // returns "JohnDoe"
"john_doe".camelcase(); // returns "JohnDoe"
```

Encryption and Hashing
----------------------

Along with utility string methods, this library extends strings by providing them with hashing and encryption methods, based on [CryptoJS](https://code.google.com/p/crypto-js/). The available methods are shown below.

### Hashing Methods

Hash are one-way coding of strings.  Once a string is hashed, technically its content cannot be reproduced back.  Hashes are using for storing passwords in a database, creating checksums, etc.

#### sha3( [length, encoding] )

The sha3 method provides a cryptographic algorithm that returns hashes in 4 different lenghts which you can specify by sending a *number* as the length. The available lengths are: **224**, **256**, **384**, and **512**.  If no arguments are given to the method, it will use 512-bit length as default. If no encoding argument is given, it will return a hexadecimal hash. You can specify one of three encoding types: **hex**, **latin1**, and **base64**.

```javascript
var text = "john doe";
// Without arguments
text.sha3(); // returns "50ad331798a9f12cfa74e52b3b496..."

// With bit length as argument
text.sha3(224); // returns "765f030f3ca2b243d52f6c3d891d..."
text.sha3(256); // returns "c02e103ac14f890092664e93fb2b9..."
text.sha3(384); // returns "199ea73dd4a7efc2731b98a528ef2..."
text.sha3(512); // returns "50ad331798a9f12cfa74e52b3b496..."

// With bit length and encoding as argument
text.sha3(256, 'latin1'); // returns "À.:ÁOfNû+¹¹X 4¨"·*ÜK0mê"
text.sha3(256, 'base64'); // returns  "wC4QOsFPiQCSZk6T+yufgbm5WAk0qCKYtyrcSzCIbeo="
text.sha3(256, 'hex'); // returns "c02e103ac14f890092664e93fb2b9..."
```