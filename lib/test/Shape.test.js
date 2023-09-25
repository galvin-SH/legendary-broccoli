const Shape = require('../Shape')

describe('Shape', () => {
    // Test to verify that the Shape class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
    })
    // Test to verify that text can be assigned
    describe('text', () => {
        it('should set text properly', () => {
            const text = 'example text';
            const shape = new Shape(text);
            expect(shape.text).toBe(text);
        })
    })
    // Test to verify that textColor can be assigned
    describe('textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'white';
            const shape = new Shape('example text', textColor);
            expect(shape.textColor).toBe(textColor);
        })
    })
    // Test to verify that shapeType can be assigned
    describe('shapeType', () => {
        it('should set shapeType properly', () => {
            const shapeType = 'circle';
            const shape = new Shape('example text', 'white', shapeType);
            expect(shape.shapeType).toBe(shapeType);
        })
    })
    // Test to verify that shapeColor can be assigned
    describe('shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'green';
            const shape = new Shape('example text', 'white', 'circle', shapeColor);
            expect(shape.shapeColor).toBe(shapeColor);
        })
    })
});