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
            const square = new Square('example text', textColor);
            expect(square.textColor).toBe(textColor);
        })
    })
    // Test to verify that shapeType can be assigned
    describe('shapeType', () => {
        it('should set shapeType properly', () => {
            const square = new Square('example text','white');
            expect(square.shapeType).toBe('rect');
        })
    })
    // Test to verify that shapeColor can be assigned
    describe('shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'green';
            const square = new Square('example text', 'white', shapeColor);
            expect(square.shapeColor).toBe(shapeColor);
        })
    })
    // Test to verify that render() returns the correct data.
    describe('render() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const square = new Square('SVG', 'white', 'green')
            expect(square.render()).toBe(
`<svg version="1.1" width="300" height="200">
<rect x = "50" width="200" height="200" fill ="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`
            )
        })
    })
});