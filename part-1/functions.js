
var months = function(date){
  if(typeof data === 'number'){
    throw Error("Need a date object")
  }else if (date.getMonth() == 0){
    console.log("Janurary");
    return "Janurary"
  }else if (date.getMonth() == 1){
    console.log("Feburary");
    return "Feburary"
  }else if (date.getMonth() == 2){
    console.log("March");
    return "March"
  }else if (date.getMonth() == 3){
    console.log("April");
    return "April"
  }else if (date.getMonth() == 4){
    console.log("May");
    return "May"
  }else if (date.getMonth() == 5){
    console.log("June");
    return "June"
  }else if (date.getMonth() == 6){
    console.log("July");
    return "July"
  }else if (date.getMonth() == 7){
    console.log("August");
    return "August"
  }else if (date.getMonth() == 8){
    console.log("September");
    return "September"
  }else if (date.getMonth() == 9){
    console.log("October");
    return "October"
  }else if (date.getMonth() == 10){
    console.log("November");
    return "November"
  }else if (date.getMonth() == 11){
    console.log("December");
    return "December"
  }
};
module.exports = months;
