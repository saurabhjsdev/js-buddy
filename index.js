//Factorial
const factorial = number => number < 2 ? 1 : number * factorial(number - 1);



//Palindrome String
function isPalindrome(string) {
    let str1 = string

    let str2 = str1.split('').reverse().join('');

    if (str1 == str2) {
        return "Palindrome"
    } else {
        return "Not palindrome";
    }
}


//Anagram String
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');


// Arrow function for reversing the number
const reverseNumber = number => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)

module.exports = {
    factorial,
    isPalindrome,
    areAnagram,
    reverseNumber
}