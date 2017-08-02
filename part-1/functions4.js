let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'];
var err = new Error("an invalid Input for function");
function filterBetween(min,max){
  let arr2 = [];
  try{
    if(typeof min === 'string' && typeof max === 'string'){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > min && arr[i] < max){
        arr2.push(arr[i]);
        }
      }
      let result = arr2.sort();
      console.log(result);
      return (result);
    }else{
      throw err;
    }
  }catch(err){
    //console.log("test", arguments);
    console.log("The error is " + err.message);
    return Error;
  };
};


filterBetween('deer', "giraffe")
filterBetween('chimp', 'lobster')
 filterBetween('chickadee', 'chimpanzee')
filterBetween('deer', 2)



module.exports = filterBetween;
