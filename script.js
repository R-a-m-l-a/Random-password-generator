const passwordBox=document.getElementById("password");
let length=16;

const upperCase="ASDFGHJKLPOIUYTREWQZXCVBNM";
const lowerCase="asdfghjklmnbvcxzrqewtyuiop";
const digits="0123456789";
const symbols="!@#$%^&*()<>?/{}\|~[]";
const allChars=upperCase+lowerCase+digits+symbols;

function generatePassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password +=symbols[Math.floor(Math.random() * symbols.length)];

    while(length>password.length){
       password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value=password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}




