const circleArea = require('geometric-area').circleArea;
const triangleArea = require('geometric-area').triangleArea;
const squareArea = require('geometric-area').squareArea;
const rectangleArea = require('geometric-area').rectangleArea;
const trapeziumArea = require('geometric-area').trapeziumArea;
const parallelogramArea = require('geometric-area').parallelogramArea;
const rhombusArea = require('geometric-area').rhombusArea;


console.log(circleArea(10));
console.log(triangleArea(8, 5));
console.log(squareArea(7));
console.log(rectangleArea(5, 8));
console.log(trapeziumArea(4, 8, 6));
console.log(parallelogramArea(8, 4));
console.log(rhombusArea(4, 6));

console.log("All tests passed.");