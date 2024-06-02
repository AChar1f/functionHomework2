// Palindrome checker function
function isPalindrome(string) {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    if (reverseString == string) {
        return ("Is a Palindrome")
    } else {
        return ("Is Not a Palindrome")
    }
}
console.log(isPalindrome("racecar"))
console.log(isPalindrome("Bonjour"))

//Exponent function
function pow(base, exponent) {
    if(exponent == 0) {
        return 1
    } else {
        return base * pow(base, exponent -1)
    }
}
console.log(pow(5, 3))