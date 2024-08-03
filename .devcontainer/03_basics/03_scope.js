let a=10 //global scope
const b=20
if(true){
    let a=10
    const b=20
    //var c=30 //scope is not assign for 'var' don't use it

    //block scope
}

console.log(a)
console.log(b)
//console.log(c)

//nested scope
function one(){
    const username= "Aditi"

    function two(){
        const website = "youtube"
        console.log(website)
        console.log(username);
    }
    //console.log(website); not scope
    //two()
}
//one()

if(true){
    const username="ADITI"
    if (username==="ADITI"){
        const website=" Utube"
        console.log(username+website)
    }
    //console.log(website) scope is not there
}
//console.log(username) scope is not there


//++++++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++

addOne(5)
function addOne(value)
{
    return console.log( value+1)
}

//addTwo(5) no scope
const addTwo=function(value){
    return console.log( value+2)
}
addTwo(5)

