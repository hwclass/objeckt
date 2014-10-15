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

  /**
   * objects <Array> contains the objects that are initialized by inheritObject method
   *
   */
  var objects = [];

  /**
   * getObject() returns an object with given parameter
   *
   * @return <Object>
   */
  var getObject = function (object) {
    return objects[object];
  };

  /**
   * createObject() creates object
   *
   */
  var createObject = function (alias) {};

  /**
   * addMixin() adds mixin into the current object
   *
   */
  var addMixin = function (target, mixin) {
    if (!isUndefined(target) && !isNull(target) && isObject(target)) {
      var propertyNames = Object.getOwnPropertyNames(mixin);
      for (var counter = 0, len=Object.keys(mixin).length; counter < len; counter++) {
        defineProp(target, propertyNames[counter], mixin[propertyName]['value']);
      }
    }
  };

  /**
   * inheritObject() extends object(s) into given target object
   *
   */
  var inheritObject = function (target, superObjects) {
    if (!isUndefined(target) && !isNull(target) && isObject(target)) {
      for (var counter = 0, len=superObjects.length; counter < len; counter++) {
        if (!isNull(superObjects[counter]) && !isUndefined(superObjects[counter])) {
          var propertyNames = Object.getOwnPropertyNames(superObjects[counter]);
          for (var counter2 = 0, len2 = Object.keys(superObjects[counter]).length; counter2 < len2; counter2++) {
            var propertyName = propertyNames[counter2];
            defineProp(target, propertyName, superObjects[counter][propertyName]);
          }
        }
      }
      objects.push(target);
    }
  }

  /**
   * defineProp() sets a property for the given object with key and value
   *
   */
  var defineProp = function (obj, key, value){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, key, config);
  };

  /**
   * isNull() returns true or false if the given object is null or not
   *
   * @return <boolean>
   */
  var isNull = function (obj) {
    return (typeof obj === null ? true : false);
  };

  /**
   * isUndefined() returns true or false if the given object is undefined or not
   *
   * @return <boolean>
   */
  var isUndefined = function (obj) {
    return (typeof obj === 'undefined' ? true : false);
  };

  /**
   * isObject() returns true or false if the given object is an object or not
   *
   * @return <boolean>
   */
  var isObject = function (obj) {
    return (typeof obj === 'object' ? true : false);
  }

  return {
    get : getObject,
    create : createObject,
    inherit : inheritObject,
    mixin : addMixin
  }

})(window);