'use strict';

var cat = {
  name: 'myCat',
  color: 'white'
};

cat.age = 3; // dynamically edit object

cat.speak = function () {
  console.log('meeeow');
};

// create constructor
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

// 'new' keyword will return an object
var newCat = new Cat('myKitty', 'white');


// use Object.create
var objectCat = Object.create(Object.prototype,
  {
    name: {
      configurable: true,
      enumerable: true
    },
    color: {}
  }
);

// use class in ES5
class Kitty {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log('meeeow');
  }
}
