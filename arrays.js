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
    var candy = [array, element.unshift]
    return candy;
  }  
  
  function addElementToEndOfArray(array, element) {
    var sodaPop = [...element, array]
    return sodaPop;
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    var sodaPop = [element.push, array] 
    return sodaPop;
  }