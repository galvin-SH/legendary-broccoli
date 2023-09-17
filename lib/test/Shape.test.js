const Shape = require('../Shape')
describe('Shape', () => {
    //Test to verify the constructor function of the Shape class successfully created a new instance of itself
    describe('Instantiate'), () => {
        it('should be an instance of the Shape class')
        const shape = new Shape();
        expect(shape).toBeInstanceOf(Shape)
    };
});

