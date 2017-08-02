const fs = require('fs');
var clients = fs.readFileSync("./clients.json".toString(),'utf8');
let parse = JSON.parse(clients);
var input = process.argv[2]

var arr2 = []
function searchByCity(){
  for(var i = 0; i < parse.length; i++){
      arr2.push(parse[i])
    }
    for(var j = 0; j < parse.length; j++){
      var spl = arr2[j].city.substring(0,input.length);
      if(spl === input){
        console.log(arr2[j].id);
        console.log(arr2[j].rep_name);
        console.log(arr2[j].phone);
        console.log(arr2[j].company);
        console.log(arr2[j].city);
        console.log(arr2[j].state + "\n");
      }
    }
}

searchByCity();
