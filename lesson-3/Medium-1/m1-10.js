// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

/*
 "no"

 The call to 'foo' will return "yes". The 'param' parameter in the 'bar' 
 function is then assigned to "yes" when the function is invoked, which
 causes the function to return "no".
*/
