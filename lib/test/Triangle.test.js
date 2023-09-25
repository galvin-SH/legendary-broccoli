const Triangle = require('../Triangle')

describe('Triangle', () => {
    // Test to verify that the Triangle class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });
    // Test to verify that text can be assigned
    describe('text', () => {
        it('should set text properly', () => {
            const text = 'example text';
            const triangle = new Triangle(text);
            expect(triangle.text).toBe(text);
        })
    })
    // Test to verify that textColor can be assigned
    describe('textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'white';
            const triangle = new Triangle('example text',textColor);
            expect(triangle.textColor).toBe(textColor);
        })
    })
    // Test to verify that shapeType can be assigned
    describe('shapeType', () => {
        it('should set shapeType properly', () => {
            const triangle = new Triangle('example text','white');
            expect(triangle.shapeType).toBe('polygon');
        })
    })
    // Test to verify that shapeColor can be assigned
    describe('shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'green';
            const triangle = new Triangle('example text','white',shapeColor);
            expect(triangle.shapeColor).toBe(shapeColor);
        })
    })
    // Test to verify that render() returns the correct data.
    describe('render() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const triangle = new Triangle('SVG', 'white', 'green')
            expect(triangle.render()).toBe(
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<polygon points="0,0 300,0 150,200" fill ="green" />
<text x="150" y="100" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`
            )
        })
    })
});