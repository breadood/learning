'use strict';

var colors = ['red', 'blue', 'green'];
// if adding method in colors, other array does not have it
Array.prototype.last = function () {
  return this[this.length - 1];
};
