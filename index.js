const inquirer = require('inquirer'); // as per instructions, importing inquirer
const fs = require('fs');
const { Square, Circle, Diamond, Triangle} = require('./lib/shapes');

// fixed function using inquirer correct syntax
let prompts = []
function CreateQuestions () {
    prompts = [
        {
            type: 'input',
            name: 'logoText',
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
    inquirer
  .prompt(prompts)
  .then((answers) => {
    console.log(answers.logoText);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}


CreateQuestions();

    
// GENERATE LOGO FUNCTION
function createLogo(prompts) {
    const { logoText, logoTextColour, logoShape, logoShapeColour} = prompts;
    const window = createWindowSVG();
    const document = window.document;
    registerWindow(window, document);
    const canvas = SVG(document.documentEl).size(400, 200);
    const context = createCanvas(400, 200).getContext('2d');
    let objectShape = ''
    switch (prompts.logoShape) {
        case 'Triangle':
            objectShape = new Triangle();
            break
        case 'Circle':
            objectShape = new Circle();
            break
        case 'Square':
            objectShape = new Square();
            break
        case 'Diamond':
            objectShape = new Diamond();
            break
        default:
            throw new Error('unknwown shape!')
    }
        
    // objectShape.setColor(logoShapeColour);
    // objectShape.draw(canvas);
    
    const text = canvas.text(logoText).fill(logoTextColour);
    
    const textWidth = text.bbox().width;
    const textHeight = text.bbox().height;
    // const textX = 100 - textWidth / 2;
    // const textY = 100 - textHeight / 2;
    // text.move(textX, textY);
    
    const SVGLogo = canvas.svg();
    
    fs.write('logo.svg', SVGLogo, (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log('Your SVG Logo is generated. Open the logo.svg file in browser to view your new logo.');
        }
    });

    //SAVING LOGO BY USING THE 3 LETTERS INPUT AS FILE TITLE AND RETURNS MESSAGE.
    const saveLogo = 'examples';
    const saveLogoPath = path.join(saveLogo, `${logoText}.svg`)
    
    fs.writeFile(saveLogoPath, SVGLogo, (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log(`Your ${saveLogoPath} is generated. Open the ${saveLogoPath} file in browser to view your new logo.`);
        }
    });
}


function createREADME(){
    // build
}


function writeToFile(){
    // build
}



function generateLogoAndREADME (){
    // build
}


generateLogoAndREADME();