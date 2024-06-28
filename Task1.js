var n = prompt("Enter a number to be reversed:");

function reverse(n){
    n = n + "";
    return n.split("").reverse().join("");
}

alert("The reversed form of the number is: " + reverse(n));
console.log("The reversed form of the number is: " + reverse(n));