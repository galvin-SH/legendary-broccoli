const Shape = require('../Shape')
const Circle = require('../Circle')

describe('Circle', () => {
    // Test to verify that the Circle class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });
    // Test to verify that text can be assigned
    describe('text', () => {
        it('should set text properly', () => {
            const text = 'example text';
            const circle = new Circle(text);
            expect(circle.text).toBe(text);
        })
    })
    // Test to verify that textColor can be assigned
    describe('textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'white';
            const circle = new Circle('example text',textColor);
            expect(circle.textColor).toBe(textColor);
        })
    })
    // Test to verify that shapeType can be assigned
    describe('shapeType', () => {
        it('should set shapeType properly', () => {
            const shapeType = 'circle';
            const circle = new Circle('example text','white',shapeType);
            expect(circle.shapeType).toBe(shapeType);
        })
    })
    // Test to verify that shapeColor can be assigned
    describe('shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'green';
            const circle = new Circle('example text','white','circle',shapeColor);
            expect(circle.shapeColor).toBe(shapeColor);
        })
    })
    // Test to verify that render() returns the correct data.
    describe('render() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
        })
    })
});