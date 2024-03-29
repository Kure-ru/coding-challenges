// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//parameter : string of char
//return boolean
//"The quick brown fox jumps over the lazy dog." -> true
// "This is not a pangram." -> false
function isPangram(string) {
  //filter ponctuation
  const letters = string
    .toLowerCase()
    .split("")
    .filter((letter) => letter >= "a" && letter <= "z");
  //filter duplicates
  const uniqueLetters = [...new Set(letters)];
  //if length is 26, is a pangram
  return uniqueLetters.length === 26;
}
