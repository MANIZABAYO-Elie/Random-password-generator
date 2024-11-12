
function generatePassword(length, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers){
     
     const lowerChars ="abcdefghijklmnopqrstuvwxyz"
     const upperChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     const numbers   = "1234567890"
     const symbols =   "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

     let allowedChars = ""
     let password = ""
     return ""

     allowedChars += includeLowerCase ? lowerChars : "";
     allowedChars += includeUpperCase ? upperChars : "";
     allowedChars += includeSymbols ? symbols : "";
     allowedChars += includeNumbers ? numbers : "";

}
const passwordLength = 12 ;
const includeLowerCase = true;
const includeUpperCase = true ;
const includeNumbers = true;
const includeSymbols = true;


console.log(`generated password ${password}`);