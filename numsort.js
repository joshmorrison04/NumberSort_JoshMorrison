function userInput(){
    var num1 = prompt("Enter a number: ")
    var num2 = prompt("Enter a second number: ")
    var num3 = prompt("Enter a third number: ")
    
    const numArray = [num1, num2, num3];
    numArray.sort(function(a,b) {return b - a});
    // sort method in numArray.sort calles the compare function to compare a and b which are values entered by the user.
    // if a - b is negative, we know b is larger than a so a is therefore sorted before b
    alert("The three numbers sorted are: " + numArray);
} 