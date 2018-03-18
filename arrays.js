var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  
  function addElementToBeginningOfArray(array, element) {
    var candyBars = [element, ...array]  
    return candyBars;
  }
 
 function addElementToBeginningOfArray(chocolateBars, candy){
  return [candy, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
  chocolateBars.unshift(candy);
  return chocolateBars;
}

function addElementToEndOfArray(choclateBars, candy) {
  chocolateBars.push(candy);
  return chocolateBars;
}