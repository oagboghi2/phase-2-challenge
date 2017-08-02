var months = function(date){
  if(typeof data === 'number'){
    throw Error("Need a date object")
  }else if (date.getMonth() == 0){
    return "Janurary"
  }else if (date.getMonth() == 1){
    return "Feburary"
  }else if (date.getMonth() == 2){
    return "March"
  }else if (date.getMonth() == 3){
    return "April"
  }else if (date.getMonth() == 4){
    return "May"
  }else if (date.getMonth() == 5){
    return "June"
  }else if (date.getMonth() == 6){
    return "July"
  }else if (date.getMonth() == 7){
    return "August"
  }else if (date.getMonth() == 8){
    return "September"
  }else if (date.getMonth() == 9){
    return "October"
  }else if (date.getMonth() == 10){
    return "November"
  }else if (date.getMonth() == 11){
    return "December"
  }
};

////////////////////////////////////////////////////

var reverseSentence = function(string){
let res = string.split(" ").reverse().join(" ");
return res;
};

reverseSentence("The cat jumped over the dog."); // => "dog. the over jumped cat The"
reverseSentence("Hello, world!"); // => "world! Hello,"

///////////////////////////////////////////////////

module.exports = months, reverseSentence;// nameProps, filterBetween;
