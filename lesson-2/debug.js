/*

Commands:

node inspect <file-name> : Run node debugger
exec <variable-name> : access value of given variable
n : (next) run next line
c : (cont) run until the end, an error, or a `debugger` statement is reached
run/restart : run program from beginning (? - not sure on difference/details)

*/

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}
