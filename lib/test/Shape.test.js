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
    // Test to verify that render() returns the correct data.
    describe('render() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Shape('SVG', 'white', 'rect', 'green')
            expect(shape.render()).toBe(
`<svg version="1.1" width="300" height="200">
<rect x = "50" width="200" height="200" fill ="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`
            )
        })
    })
});