class Shape {
    constructor(text, textColor, shapeType, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
    render() {
        const string =
`<svg version="1.1" width="300" height="200">
<${this.shapeType} x = "50" width="200" height="200" fill ="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return string;
    }
}

module.exports = Shape;