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
 
  function destructivelyAddElementToBeginningofArray(array, element) {
    var candyBars = [element.unshift, array]
    return candyBars;
  }  
  
  function addElementToEndOfArray(array, element) {
    var candyBars =[...array, element]
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    var candyBars = [element.push, array] 
    return candyBars;
  }