const fs = require('fs');
var clients = fs.readFileSync("./clients.json".toString(),'utf8');
let parse = JSON.parse(clients);
var input = process.argv[2]

var arr2 = []

function searchByCompany(){
  for(var i = 0; i < parse.length; i++){
      arr2.push(parse[i])
    }
    for(var j = 0; j < parse.length; j++){
      var spl = arr2[j].company.substring(0,input.length);
      if(spl.toLowerCase() === input.toLowerCase()){
        console.log(arr2[j].id);
        console.log(arr2[j].phone);
        console.log(arr2[j].company + "\n");
      }
    }
}

searchByCompany()
