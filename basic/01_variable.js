const accountid = 00001
let account_mail ="Deepak@yopmail.com"
var company_name = "kotak mahindra bank"

account_city = "Mumbai"

// accountid = 2  // not allowed because accountid is a constant variable
account_mail = "deepak123@yopmail.com"
account_city = "Delhi"
company_name = "Sbi" 

let accountstatus;



console.table([accountid,account_mail,account_city,company_name,accountstatus])

/*
1. const - constant variable, cannot be reassigned, must be initialized at the time of declaration
2. let - block scope variable, can be reassigned, can be declared without initialization
3. var - function scope variable, can be reassigned, can be declared without initialization
4. implicit global variable - if a variable is assigned a value without declaring it with var, let or const, it becomes a global variable
*/