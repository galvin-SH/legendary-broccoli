const Shape = require('./Shape')

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor);
    }
    render() {
        const string =
`<svg version="1.1" width="300" height="200">
<circle cx="150" cy="100" r="80" fill ="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return string;
    }
}

module.exports = Circle;