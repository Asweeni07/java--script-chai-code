const accountId = 12345       //cannot be changed
let accountEmail = "asweeni@gmail.com"
var accountPassword = "12345"     //not use var
accountCity = "Gaya"
let accountState       //if the value is not assigned it says undefined  //investigation 



// accountId = 2       //not allowed to change



accountEmail = "faa@gmail.com"   // allowed to changed



accountCity = "bhopal"
accountPassword = "asdfgh"

// console.log(accountEmail);
// console.log(accountCity);
// console.log(accountPassword);

/*
   prefer not to use var because of issue
   in block scope and functional scope
*/   


console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);



