const Shape = require('../Shape')
const Square = require('../Square')

describe('Square', () => {
    // Test to verify that the Square class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });
    // Test to verify that text can be assigned
    describe('text', () => {
        it('should set text properly', () => {
            const text = 'example text';
            const square = new Square(text);
            expect(square.text).toBe(text);
        })
    })
    // Test to verify that textColor can be assigned
    describe('textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'white';
            const square = new Square('example text',textColor);
            expect(square.textColor).toBe(textColor);
        })
    })
    // Test to verify that shapeType can be assigned
    describe('shapeType', () => {
        it('should set shapeType properly', () => {
            const shapeType = 'square';
            const square = new Square('example text','white',shapeType);
            expect(square.shapeType).toBe(shapeType);
        })
    })
    // Test to verify that shapeColor can be assigned
    describe('shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'green';
            const square = new Square('example text','white','square',shapeColor);
            expect(square.shapeColor).toBe(shapeColor);
        })
    })
    // Test to verify that render() returns the correct data.
    describe('render() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
        })
    })
});