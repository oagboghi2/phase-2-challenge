var expect = require("chai").expect;
var months = require("./functions.js")
let date = new Date(2017, 11, 25);
let number = 1;
//let date = new Date(2017, 5, 19); //will fail the test if this date is used



describe("months", function(){
  describe("month fo the year", function(){
      it("checks to see if the output is a string and the month matches", function(){
        expect(months(date)).to.equal("December");
        expect(months(date)).to.be.a('string');
        })
      });
    });
