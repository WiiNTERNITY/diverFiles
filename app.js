// function addOne(x) {
//   return console.log((result = x + 1));
// }
// addOne("5");
// addOne(9);
// addOne(1);

// function concat(a, b, c) {
//   return console.log(a + b + c);
// }

// concat("je", " ", "suis");

// var carName;
// console.log(carName);

// carName = 12354;
// console.log("%capp.js line:19 object", "color: #007acc;", b);
// console.log(carName);

function areaOfShape() {
  let side1 = 5;
  let side2 = 3;
  let side3 = 6;
  let s = side1 + side2 + side3;

  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  console.log("l'air de votre triangle est de ", area);
}

areaOfShape();
