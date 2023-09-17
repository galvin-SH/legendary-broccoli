const Shape = require('./Shape')

class Circle extends Shape {
    constructor(text, textColor, shapeType, shapeColor) {
        super(text, textColor, shapeType, shapeColor);
    }
}

module.exports = Circle;