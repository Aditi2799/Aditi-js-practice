const user={
    username: "ADITI",
    price:200,
    welcomeMesage: function() {
    console.log(`${this.username} , welcome to website`);//'this' takes current context
    }
}
// user.welcomeMesage()//will print ADITI
// user.username= "Adi"
// user.welcomeMesage()//it will print Adi

//-------------------------------------
// function chai(){
//     let username="XYZ"
//     console.log(this)//global vaues
//     console.log(this.username)//undefined->'this' is only for object not in function
// }
// chai()

//-----------------------------------------
// const chai=function(){
//     let username="ABC"
//     console.log(this.username)
// }

//-----------------Arrow function------------

// const chai= () => {
//     let username="ABC"
//     console.log(this)//{}
// }
// chai()


// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))//7

//const addTwo=(num1,num2) => (num1 + num2)//7->implicit return



