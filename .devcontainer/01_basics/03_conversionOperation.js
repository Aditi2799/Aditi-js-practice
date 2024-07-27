let score=33

console.log(typeof score);//number
console.log(typeof(score));//number
score="33"
console.log(typeof score);//string

score="33abc"
let valueInNumber= Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN


//"33" => 33
//"33abc"=>NaN
//true => 1 false=0

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn);
//1=>true 2=>false
//""=>fasle
//"Aditi"=>true

let name= "33"
let stringName= String(name);
console.log(typeof name);

//===========================operation==============================

let value=3
let negValue= -value
console.log(negValue)


