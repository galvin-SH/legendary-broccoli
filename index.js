// Import necessary modules and class declarations
const inquirer = require('inquirer')
const fs = require('fs')

const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle")

// Questions array for inquirer prompt
const questions = [
    {
        name: 'text',
        type: 'input',
        message: ''
    },
    {
        name: 'textColor',
        type: 'input',
        message: ''
    },
    {
        name: 'shapeType',
        type: 'list',
        message: '',
        choices: ['circle', 'square', 'triangle']
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: ''
    },
];

// Initiate inquirer prompt using provided questions array
inquirer.prompt(questions)
    .then((answers) => {
        // Select appropriate class constructor based on shape type chosen
        let output;
        switch (answers.shapeType) {
            case 'circle':
                output = new Circle(answers.text.substring(0,3), answers.textColor, answers.shapeColor);
                break;
            case 'square':
                output = new Square(answers.text.substring(0,3), answers.textColor, answers.shapeColor);
                break;
            case 'triangle':
                output = new Triangle(answers.text.substring(0,3), answers.textColor, answers.shapeColor);
                break;
        }
        // Write svg data using the shape's render method
        fs.writeFile('./examples/logo.svg', output.render(), () => {
            console.log('Generated logo.svg')
        });
    }).catch((err) => {
        console.log(err)
    });