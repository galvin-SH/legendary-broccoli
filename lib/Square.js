const Shape = require('./Shape')

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'rect', shapeColor);
    }
    render() {
        const string =
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<rect x = "50" width="200" height="200" fill ="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return string;
    }
}

module.exports = Square;