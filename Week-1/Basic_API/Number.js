// Number Functions

// 1.parseInt - convert string into the Integer
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}
explainParseInt("42");
explainParseInt("42px");
// explainParseInt("aa42px"); // Error
explainParseInt("3.14");

// 2.parseFloat - conver string into the floating Point
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}
explainParseFloat("42");
explainParseFloat("42px");
// explainParseInt("aa42px"); // Error
explainParseFloat("3.14");
