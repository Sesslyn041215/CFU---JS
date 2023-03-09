
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

let generate_password = document.getElementById('password__result');

// function genPassword() {
    
// let character = "A-Z";
// let passwordLength = 10;
// let password = "";
//     for (let i = 0; i <= passwordLength; i++) {
//         let randomNumber = Math.floor(Math.random() *  character.length);
//         // password +=  character.substring(randomNumber, randomNumber + 1);
//         password += character.charAt(randomNumber)
//     }
//     console.log(randomNumber);
// }

// function genRun() {
//     generate_password.innerHTML = genPassword();
// }

// console.log(password)



// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

// function password_generator( len ) {
//     var length = (len)?(len):(10);
//     var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//     var password = "";
//     var character = "";
   
//     while( password.length<length ) {
//         entity1 = Math.ceil(string.length * Math.random()*Math.random());
       
//         hold = string.charAt( entity1 );
//         hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
//         character += hold;
      
//         password = character;
//     }
//     password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
//     return password.substr(0,len);
// }

// console.log( password_generator() );



// const keys = {
//     upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     lowerCase: "abcdefghijklmnopqrstuvwxyz",
//     number: "0123456789",
//     symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
//   }
//   const getKey = [
//     function upperCase() {
//       return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
//     },
//     function lowerCase() {
//       return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
//     },
//     function number() {
//       return keys.number[Math.floor(Math.random() * keys.number.length)];
//     },
//     function symbol() {
//       return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
//     }
//   ];
// console.log(getKey)

// function createPassword() {
//     const upper = document.getElementById("uppercase").checked;
//     const lower = document.getElementById("lowercase").checked;
//     const number = document.getElementById("numbers").checked;
//     const symbol = document.getElementById("symbols").checked;
//     if (upper + lower + number + symbol === 0) {
//       alert("Please check atleast one box!");
//       return;
//     }
//     const passwordBox = document.getElementById("password__result");
//     const length = document.getElementById("length");
//     let password = "";
//     while (length.value > password.length) {
//       let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
//       let isChecked = document.getElementById(keyToAdd.name).checked;
//       if (isChecked) {
//         password += keyToAdd();
//       }
//     }
//     passwordBox.innerHTML = password;
    
//   }

  
  // To generate uppercase letters //
// const gen_uppercase = document.querySelector("#uppercase:checked") == true;
// // console.log(gen_uppercase);
// const btn = document.querySelector("#btn");
// // btn.addEventListener("click", low);
// function upp() {
//     const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let length = document.getElementById('result').innerHTML
//     let password = "";
//     for (let i = 0; i <= length; i++) {
//         const gen_password = Math.floor(Math.random() * upper_case.length);
//         password += upper_case.substring(gen_password, gen_password + 1)
//     }
//     document.querySelector("#password__result").value = password
// }



// const gen_uppercase = document.querySelector("#uppercase:checked") == true;
// const gen_lowercase = document.querySelector("#lowercase:checked") == true;
// console.log(gen_uppercase);

// btn.addEventListener("click", low);


// const keys = {
//         upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//         lowerCase: "abcdefghijklmnopqrstuvwxyz",
//         number: "0123456789",
//         symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
//       }
//       const getKey = [
//         function upperCase() {
//           return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
//         },
//         function lowerCase() {
//           return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
//         },
//         function number() {
//           return keys.number[Math.floor(Math.random() * keys.number.length)];
//         },
//         function symbol() {
//           return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
//         }
//       ];
    
// function upp() {
//     const upper = document.getElementById("uppercase").checked;
//         const lower = document.getElementById("lowercase").checked;
//         const number = document.getElementById("numbers").checked;
//         const symbol = document.getElementById("symbols").checked;
//         if (upper + lower + number + symbol === 0) {
//           alert("Please check atleast one box!");
//           return;
//         }
//         const passwordBox = document.getElementById("btn");
//         const length = document.getElementById('result').innerHTML
//         let password = "";
//         for (let i = 0; i <= length; i++) {
//             let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
//             let isChecked = document.getElementById(keyToAdd.name);
//           if (isChecked) {
//              password += upper_case.substring(gen_password, gen_password + 1)
//           }
//         }
//         document.querySelector("#password__result").value = password
// }

function genPassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    // Create a string containing all possible characters based on user inputs
    let characters = "";
    if (uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
        characters += "0123456789";
    }
    if (symbols) {
        characters += "!@#$%^&*()_+[]{}?";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("password__result").value = password;
  }
  document.getElementById("btn").addEventListener("click", genPassword);