[![Build Status](https://travis-ci.org/piLeoni/svgcode.svg?branch=master)](https://travis-ci.org/piLeoni/svgcode)
[![Coverage Status](https://coveralls.io/repos/github/piLeoni/svgcode/badge.svg?branch=master)](https://coveralls.io/github/piLeoni/svgcode?branch=master)
# svgcode
A minimal SVG to GCODE converter for 2d operations

## Installation

  `npm install svgcode`

## Usage

    const svgcode = require("svgcode");

    const gcode = svgcode()
    .loadFile(__dirname + "test/helloworld.svg")
    .generateGcode()
    .getGcode();
    
    console.log(gcode)
  


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.