// завдання 1
    function countUppercase(inputString) {
        const uppercaseRegex = /[A-Z]/g;
        const matches = inputString.match(uppercaseRegex);
        return matches ? matches.length : 0;
      }
      
      console.log(`Upper case:${countUppercase("hello")}`);      
      console.log(`Upper case:${countUppercase("helloWORD123")}`);

// завдання 2
    let delString = function(text,pattern){
        return text.replace(text.match(pattern),'');
    }
    
    console.log(delString('deletestring213',/[a-zA-Z]+/g));
    
// завдання 3

    function validate (userName) {
        return (/^[a-zA-Z0-9_-]{4,10}$/).test(userName);
    }

    let userName = prompt("Enter username");
    let validUsername = validate (userName);
    
    console.log(`User name is valid? ${validUsername}`);