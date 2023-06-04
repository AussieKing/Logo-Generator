// Defining the class "Shape" as per instructions, which contains a Constructor function that sets the color to an empty string, and a method "setColor" that sets the color to the value passed in as an argument.
class Shape{
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
}

// Defining the class "Circle" which renders an SVG file with position, size, and color filling.
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="82" fill="${this.color}" />`
    }
};

class Triangle extends Shape{
    render(){
        return `<polygon points="150,18 75,180 225,180" fill="${this.color}" />`
    }
};

class Square extends Shape{
    render(){
        return `<rect x="18" y="18" width="264" height="164" fill="${this.color}" />`
    }
};

class Diamond extends Shape{
    render(){
        return `<polygon points="150,18 75,100 150,180 225,100" fill="${this.color}" />`
    }
};

module.exports = {Circle, Triangle, Square, Diamond}

