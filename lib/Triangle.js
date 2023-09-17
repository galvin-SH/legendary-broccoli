const Shape = require('./Shape')

class Triangle extends Shape {
    constructor(text, textColor, shapeType, shapeColor) {
        super(text, textColor, shapeType, shapeColor);
    }
}

module.exports = Triangle;