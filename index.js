/* define an object called square ( = {object}), hold methods that have 
to do w/the geometry of squares. it chould contain 2 methods
area & perimeter
-area should accept the length of a side same in square, return the side squared
-perimeter should accept the length of a side and return side * 4 */

var square = {
  area: (side) => Math.pow(side, 2),
  perimeter: (side) => side * 4,
};
console.log(square.area(4));
console.log(square.perimeter(4));
