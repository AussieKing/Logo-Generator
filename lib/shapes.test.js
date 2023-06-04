// Importing the shapes classes from shapes.js
const { Circle, Triangle, Square, Diamond } = require('./shapes');

// Checking if the Circle class returns a circle with a color
describe('Circle', () => {
  test('should return a circle with a color', () => {
    const shape = new Circle();
    const color = 'red';
    shape.setColor(color);
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="82" fill="red" />');
  });
});

// Checking if the Triangle class returns a triangle with a color
describe('Triangle', () => {
  test('should return a triangle with a color', () => {
    const shape = new Triangle();
    const color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual('<polygon points="150,18 75,180 225,180" fill="blue" />');
  });
});

// Checking if the Square class returns a square with a color
describe('Square', () => {
  test('should return a square with a color', () => {
    const shape = new Square();
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual('<rect x="18" y="18" width="264" height="164" fill="green" />');
  });
});

// Checking if the Diamond class returns a diamond with a color
describe('Diamond', () => {
  test('should return a diamond with a color', () => {
    const shape = new Diamond();
    const color = 'yellow';
    shape.setColor(color);
    expect(shape.render()).toEqual('<polygon points="150,18 75,100 150,180 225,100" fill="yellow" />');
  });
});
