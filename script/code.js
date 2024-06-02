// Palindrome checker function
function isPalindrome(string) {
    let reverseString = string.split("").reverse().join("")
    if (reverseString == string) {
        return ("Is a Palindrome")
    }
    return ("Is not a Palindrome")
    
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



