# svgcode
A minimal SVG to GCODE converter for 2d operations

## Installation

  `npm install svgcode`

## Usage

    var svgcode = require("svgcode");

    const gcode = svgcode()
    .loadFile(__dirname + "test/test.svg")
    .generateGcode()
    .getGcode();
    
    console.log(gcode)
  
  
  Output should be `35,666`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.