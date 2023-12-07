// String Methods

//1. length()
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello world");

// 2. indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello world", "world");
findIndexOf("Hello world world", "world");

//3. lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Last Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello world", "world");
findLastIndexOf("Hello world world", "world");

//4. slice - slice between string
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After Slice:", str.slice(start, end));
}
// starting index is 0 and ending index is 8
getSlice("Hellooooooo world", 0, 8);

// 5. substr - deprecated
function getSubStr(str, start, length) {
  console.log("Original String:", str);
  console.log("Sub String:", str.substr(start, length));
}
// starting index is 2 and the length should be only 5 characters
getSubStr("Hellooooooo world", 2, 5);

//6. replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After Replace:", str.replace(target, replacement));
}
replaceString("Hello world", "world", "Javascript");

// 7. split -- op is Array -- split string into an array in given delimeter
function splitString(str, seperator) {
  console.log("Original String:", str);
  console.log("After Split:", str.split(seperator));
}
splitString("Hello world", " ");

// 8. trim -- remove the extra spaces
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
//only remove the spaces from starting and ending
trimString("      Hello        world     ");

// 9. toUpperCase
function toUpper(str, seperator) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase(seperator));
}
toUpper("Hello world", " ");

// 10. toLowerCase
function toLowerCase(str, seperator) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase(seperator));
}
toLowerCase("Hello world", " ");
