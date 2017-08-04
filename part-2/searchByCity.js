const fs = require('fs');
var clients = fs.readFileSync("./clients.json".toString(),'utf8');
let parse = JSON.parse(clients);
var input = process.argv[2]
var ext = process.argv[3]



function searchByCity(){
  var arr2 = [];
  var san = [];
  for(var i = 0; i < parse.length; i++){
      arr2.push(parse[i])
    }
    for(var j = 0; j < parse.length; j++){
      var spl = arr2[j].city.substring(0,input.length);

      if(spl === input && spl !== "San"){
        console.log(arr2[j].id);
        console.log(arr2[j].rep_name);
        console.log(arr2[j].phone);
        console.log(arr2[j].company);
        console.log(arr2[j].city);
        console.log(arr2[j].state + "\n");
      }else if( spl === "San" ){
      san.push(arr2[j]);
      san.map(function(element) {
        if(element.city === "San " + ext){
          console.log(element.id);
          console.log(element.rep_name);
          console.log(element.phone);
          console.log(element.company);
          console.log(element.city);
          console.log(element.state + "\n");
        }else if(element.city === "San " + ext){
          console.log(element.id);
          console.log(element.rep_name);
          console.log(element.phone);
          console.log(element.company);
          console.log(element.city);
          console.log(element.state + "\n");
        }else if(element.city === "San " + ext){
          console.log(element.id);
          console.log(element.rep_name);
          console.log(element.phone);
          console.log(element.company);
          console.log(element.city);
          console.log(element.state + "\n");
          }
        });
      };
    }
}

searchByCity();
