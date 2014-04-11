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

### capitalize

Returns the string with the first letter in uppercase.

```javascript
var text = "john";
text.capitalize(); // returns "John"
"doe".capitalize(); // returns "Doe"
```

### camelcase

Returns the string on camelcase format, meaning the first letter will be uppercase, spaces and underscores will be trimmed and the first letter after them will be capitalized.

```javascript
var text = "john doe";
text.camelcase(); // returns "JohnDoe"
"john doe".camelcase(); // returns "JohnDoe"
"john_doe".camelcase(); // returns "JohnDoe"
```

Encryption and Hashing
----------------------