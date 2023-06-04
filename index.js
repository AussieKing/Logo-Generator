const inquirer = require('inquirer'); // as per instructions, importing inquirer
const fs = require('fs');
const {Square, Circle, Diamond, Triangle} = require('./lib/shapes');

// defiing the questions for the user to answer
const CreateQuestions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo:',
        validate: function (value) {
            return value.length <= 3 || 'Please enter up to 3 characters';
            // validating the user inputs 3 charachters for the logo or returns a prompt
        }
    },
    {
      type: 'input',
      name: 'logoTextColour',
      message: 'What colour would you like the text to be (color or hexadecimal)?',
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'What shape would you like your logo to be?',
      choices: ['circle', 'triangle', 'square', 'diamond'],
    },
    {
      type: 'input',
      name: 'logoShapeColour',
      message: 'What colour would you like the shape to be (color or hexadecimal)?',
    }
]

// class SVG contain the 3 methods for text, shape and color to be rendered in the SVG file
class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape, color){
        this.shapeElement = shape.render()
    }
}

// we have to write the data into the file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    FileSystem.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your SVG Logo is generated. Open the logo.svg file in browser to view your new logo.");
    });
}

async function init() {
    console.log("Starting")
    let SVGString = '';
    let SVG_file = 'logo.svg';

    const answers = await inquirer.prompt(CreateQuestions); // await the answers from the user
    let textFromUser = "";
    if (answers.text.length > 4 && answers.text.length < 1) {
        console.log("Please enter up to 3 characters"); // not valid inoput for greater than 4 char or smaller than 1.
    } else {
        textFromUser = answers.text;
    return;
    }

    console.log("Your text: ["+ textFromUser + "]"); // our user's text
    let textColour = answers.logoTextColour; // our user's color for the text
    console.log("Your text colour: ["+ textColour + "]"); 
    let shape = answers.logoShape; // our user's shape
    console.log("Your shape: ["+ shape + "]");
    let logoShapeColour = answers.logoShapeColour; // our user's color for the shape
    console.log("Your shape colour: ["+ logoShapeColour + "]");

    let newShape;
    if (shape === 'circle' || shape === 'Circle') {
        newShape = new Circle();
        console.log("Your shape is a circle");
    } 
    else if (shape === 'triangle' || shape === 'Triangle') {
        newShape = new Triangle();
        console.log("Your shape is a triangle");
    }
    else if 
    (shape === 'square' || shape === 'Square') {
        newShape = new Square();
        console.log("Your shape is a square");
    }
    else if
    (shape === 'diamond' || shape === 'Diamond') {
        newShape = new Diamond();
        console.log("Your shape is a diamond");
    }
    else {
        console.log("Please enter a valid shape");
    }
    shape.setColor(logoShapeColour);

    // adding the text and shape to the SVG file
    let newSVG = new SVG();
    newSVG.setTextElement(textFromUser, textColour);
    newSVG.setShapeElement(newShape);
    SVGString = newSVG.render();

    console.log("Shape:\n\n" + SVGString);
    writeToFile(SVG_file, SVGString);
}

init();