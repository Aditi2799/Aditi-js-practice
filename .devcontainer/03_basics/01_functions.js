
function HI(){
console.log("HI")
console.log("HI")
console.log("HI")
console.log("HI")
console.log("HI")
}

//HI() //execute function call it

function addTwoNos(num1,num2){
    //console.log(num1+num2)
    let result = num1+ num2
    return result

}
console.log(addTwoNos(2,3))
//addTwoNos(2,3)
// addTwoNos(2,"4")
// addTwoNos(3,"a")

function userLoggedIn(username){
    if(username== undefined){ //if(!username)
        console.log("enter username")
        return
    }
    return `${username} is logged in`
}
console.log(userLoggedIn())