const svgcode = require("./index.js");


const gcode = svgcode()
.loadFile('test.svg')
.generateGcode()
.getGcode();

console.log(gcode);