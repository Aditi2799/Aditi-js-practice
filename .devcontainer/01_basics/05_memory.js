let myName= "Aditi Paikrao"
let anotherName= "Adiii"
anotherName= "practicejs"

//stack=>primitive dt and heap=>non-primitive dt

console.log(myName)
console.log(anotherName)

let userName={
    email:"username@google.com",
    upi:"user@ybl"
}
let userName1=userName
userName1.email="username1@gmail.com"
//username's emil will be change for both users because memory allocated in the heap as it is non-primitive dt.
console.log(userName.email)
console.log(userName1.email)