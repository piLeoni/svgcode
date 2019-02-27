const Gcanvas = require("gcanvas");
const canvg = require("canvg");
const fs = require("fs");

const SvGcoder = function() {
  const output2Array = function(target) {
    return {
      write: function(cmd) {
        target.push(cmd);
      }
    };
  };

  const defaultOptions = {
    toolDiameter: 1,
    depth: 10,
    ramping: false,
    precision: 0.1
  };

  const obj = {
    svgFile: null,
    gCode: [],
    gctx: {},
    loadFile(input) {
      this.svgFile = fs.readFileSync(input, "utf8");
      return this;
    },
    setDriver(input) {
      this.gctx = new Gcanvas(new Gcanvas.GcodeDriver(input));
      return this;
    },
    setOptions(input) {
      Object.keys(input).forEach(opt => {
        this.gctx[opt] = input[opt];
      });
      return this;
    },
    generateGcode() {
      canvg(this.gctx.canvas, this.svgFile);
      return this;
    },
    printGcode() {
      console.log(this.gCode);
    },
    getGcode() {
      return this.gCode;
    }
  };
  obj.setDriver(output2Array(obj.gCode));
  obj.setOptions(defaultOptions);
  return obj;
};

// const test = gcoder()
//   .loadFile("test.svg")
//   .generateGcode()
//   .getGcode();

// console.log(test);

module.exports = SvGcoder;
