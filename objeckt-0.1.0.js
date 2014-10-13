/*!
 * Objeckt : An Object Creation and Management Library Using Inheritance and Other OOP Paradigms.
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : October 2014
 * Version : 0.1.0
 * Released: 2014
 *
 */

var objeckt = (function(w, undefined) {

  var objects = [];

  var getObject = function ( object ) {
    return objects[object];
  };

  var createObject = function ( alias ) {};

  var inheritObject = function (target, superObjects) {
   for (var counter = 0, len=superObjects.length; counter < len; counter++) {
      if (!isNull(superObjects[counter]) && !isUndefined(superObjects[counter])) {
        var propertyNames = Object.getOwnPropertyNames(superObjects[counter]);
        for (var counter2 = 0, len2 = Object.keys(superObjects[counter]).length; counter2 < len2; counter2++) {
          var propertyName = propertyNames[counter2];
          defineProp(target, propertyNames[counter2], superObjects[counter][propertyName]);
        }
      }
    }
  }

  var defineProp = function (obj, key, value){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, key, config);
  };

  var isNull = function (obj) {
    return (typeof obj === null ? true : false);
  };

  var isUndefined = function (obj) {
    return (typeof obj === 'undefined' ? true : false);
  };

  return {
    get : getObject,
    create : createObject,
    inherit : inheritObject
  }

})(window);