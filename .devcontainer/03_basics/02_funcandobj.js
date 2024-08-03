
function calculateCartPrice(...num1){//rest operator-...
return num1
}
console.log(calculateCartPrice(200,400,600))

const user ={
    username: "aditi",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)