const accountId=12345 //lock the value
let accountEmail="aditi@12345"
var accountPassword="12345"
accountCity="Nashik"
let accountState //undefined

//don't use var..as it works with respect to scope to make code more best use let
//accountId = 2 not allowed
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity ,accountState])