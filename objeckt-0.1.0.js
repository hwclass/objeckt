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

  var inheritObject = function ( subObject, superObject ) {
  	return Object.create(superObject, subObject);
  }

  var defineProp = function ( obj, key, value ){
    var config = {
  		value: value,
  		writable: true,
  		enumerable: true,
  		configurable: true
    };
    Object.defineProperty( obj, key, config );
  };

  return {
  	get : getObject,
  	create : createObject,
  	inherit : inheritObject
  }

})(window);