// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xNum = 0;
  let oNum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xNum++;
      console.log(str[i]);
    } else if (str[i].toLowerCase() === "o") {
      oNum++;
      console.log(str[i]);
    }
  }
  if (oNum === xNum) {
    return true;
  } else {
    return false;
  }
}
