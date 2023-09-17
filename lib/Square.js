const Shape = require('./Shape')

class Square extends Shape{
    constructor(text, textColor, shapeType, shapeColor) {
        super(text, textColor, shapeType, shapeColor);
    }
}

module.exports = Square;