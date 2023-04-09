
  function receivesAFunction(callback)
  {
    console.log("This is a example of call back function");
    callback()
  }

  calback();

  function returnsANamedFunction() {
    function namedFunction() {
    
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
    
    };
  }