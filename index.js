var a= 10
var b=2
var n=4

function add(a, b){
return (a+b)
}

function subtract(a, b){
return (a-b)
}

function multiply(a, b){
return (a*b)
}

function divide(a, b){
return (a/b)
}

function increment(n){
  n++
  return (n)
}

function decrement(n){
  n--
  return (n)
}

function makeInt(n){
  var n ="1.2"+"nonsense"
  parseInt("1,2", n)
  return(n)
}

function preserveDecimal(n){
  var n= 1.567
  parseFloat(n, "4.5", "nonsense")
  return(n, "nonsense")
}
