var string1 = prompt("Enter a word of your choice: ");

function alpha(str){
    return str.split('').sort().join('');
}

alert("The alphabetical order of the string is: " + alpha(string1));
console.log("The alphabetical order of the string is: " + alpha(string1))