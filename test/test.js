#!/usr/bin/env node

"use strict";

var expect = require("chai").expect;
var svgcode = require("../index");

describe("#conversion test", function() {
    const result = svgcode()
    .loadFile(__dirname + "/test.svg")
    .generateGcode()
    .getGcode();

    it("Try to convert an svg to gcode", function() {
    expect(result).to.be.a('array');
  });
  it("Check that the gcode contains values", function() {
    expect(result).to.have.lengthOf.at.least(100);
  });
  
});
