/*
  Consecutive Substrings Generator

  This function takes a string as input and returns
  all consecutive substrings in the order they appear.
*/

function consecutiveSubstrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let currentSubstring = "";

    for (let j = i; j < str.length; j++) {
      currentSubstring += str[j];
      result.push(currentSubstring);
    }
  }

  return result;
}

// Test cases
console.log(consecutiveSubstrings("abc"));
// Expected: ['a', 'ab', 'abc', 'b', 'bc', 'c']

console.log(consecutiveSubstrings("a"));
// Expected: ['a']

console.log(consecutiveSubstrings(""));
// Expected: []


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


