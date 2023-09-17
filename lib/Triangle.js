const Shape = require('./Shape')

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, `polygon`, shapeColor);
    }
    render() {
        const string = 
`<svg version="1.1" width="300" height="200">
<polygon points="0,0 300,0 150,200" fill ="${this.shapeColor}" />
<text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return string;
    }
}

module.exports = Triangle;