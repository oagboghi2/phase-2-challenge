let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555',
};

let obj = {};
var nameProps = function(obj){
  if(obj === undefined){
    console.log({});
    return {};
  }else{
    let result = Object.getOwnPropertyNames(obj).sort();
    console.log(result);
    return result;
  };
};



module.exports = nameProps;
