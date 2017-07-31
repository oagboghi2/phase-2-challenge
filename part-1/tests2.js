var expect = require("chai").expect;
var reverseSentence = require("./functions2.js");
let string = "The cat jumped over the dog.";
let number = 1;

describe("reverseSentence", function(){
  describe("A simple function",function(){
    it(" takes the string, reverses it and returns it back", function(){
      expect(reverseSentence(string)).to.be.a('string');
      expect(typeof string).to.equal('string');
      expect(typeof string).to.not.equal(number);

    });
  });
});
