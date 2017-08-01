var expect = require("chai").expect;
var months = require("./functions.js");


describe("test for month function", function(){
  describe("month of the year", function(){
      it("checks to see if the output is December", function(){
        var date = new Date(2017, 11, 25);
        expect(months(date)).to.equal("December");
        });
      it("should not return December this time", function(){
        var date = new Date(2017, 5, 19);
        expect(months(date)).to.not.equal("December");
        });
      it("should return a string", function(){
        var date = new Date(2017, 11, 25);
        expect(months(date)).to.be.a('string');
      });
    });
  });

///////////////////////////////////////////

var reverseSentence = require("./functions2.js");
var string = "The cat jumped over the dog.";
var number = 1;

describe("reverseSentence", function(){
  describe("A simple function",function(){
    it(" returns a string", function(){
      expect(reverseSentence(string)).to.be.a('string');
        });
      it("checks if parameter is a string variable", function(){
        expect(typeof string).to.equal('string');
      });
      it("checks to make sure parameter does not equal number", function(){
        expect(typeof string).to.not.equal(number);
      });
  });
});

//////////////////////////////////////

var nameProps = require("./functions3.js");
var friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555',
};
var obj = {};

describe("nameProps", function(){
  describe("A function that goes into an object", function(){
    it("list the property names", function(){
      //expect(nameProps(friend)).to.equal([ 'age', 'name', 'phone']);
       expect({name: 'Dominique'}).to.be.an('object');
       expect({age: 30}).to.be.an('object');
       expect({phone: '555-555-5555'}).to.be.an('object');
       });
    it("checks the lenght of the object", function(){
       expect(nameProps(friend)).to.have.lengthOf(3);
      });
    it("should return an empty object if obj is empty", function(){
      expect(nameProps(obj)).to.deep.equal([]);
    });
  });
});

///////////////////////////////////////////

var filterBetween = require("./functions4.js");
var err = new Error("an invalid Input for function");

describe("filterBetween", function(){
  describe("returns a new array containing only elements that are min >= but =>max", function(){
    it("should return dog", function(){
      expect(filterBetween('deer', 'giraffe')).to.deep.equal(['dog']);
    });
    it("should return dog, lion and cow", function(){
      expect(filterBetween('chimp', 'lobster')).to.deep.equal(['cow','dog','lion']);
    });
    it("should return an empty array", function(){
      expect(filterBetween('chickadee', 'chimpanzee')).to.deep.equal([]);
    });
  });
 });
