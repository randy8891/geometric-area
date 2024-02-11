/**
 * These functions contain the formulas for caculating the area of 2D geometric shapes.
 * Author: Randika Nonis
 * Description: This is a npm package for beginners for learning purposes.
 *  
 */

const pi = 3.14;

function circleArea(radius) {
    return pi * radius ** 2;
}

function triangleArea(base, height) {
    return 0.5 * base * height;
}

function squareArea(sideLength) {
    return sideLength ** 2;
}

function rectangleArea(base, height) {
    return base * height;
}

function trapeziumArea(a, b, height) {
    return 0.5 * (a + b) * height;
}

function parallelogramArea(base, perpendicularHeight) {
    return base * perpendicularHeight;
}

function rhombusArea(diagonal1, diagonal2) {
    return 0.5 * diagonal1 * diagonal2;
}

module.exports = { circleArea, triangleArea, squareArea, rectangleArea, trapeziumArea, parallelogramArea, rhombusArea };