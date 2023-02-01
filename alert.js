function inpInfo() {
  info = document.getElementById("inone").value;

  console.log(info);
  alert(info);
  // alert("aaa")
}
function hello() {
  document.querySelector("h1").innerHTML = "GoodBye";
}
function condi() {
  if (document.querySelector("h1").innerHTML === "Hello") {
    document.querySelector("h1").innerHTML = "GoodBye";
  } else {
    document.querySelector("h1").innerHTML = "Hello";
  }
}
function ternaire() {
  handling = document.querySelector("h1");
  handling.innerHTML === "Hello"
    ? (handling.innerHTML = "goodbye")
    : (handling.innerHTML = "Hello");
}

// var counter = 0;
function count() {
  counter++;
  document.querySelector("h2").innerHTML = counter;
  console.log(counter);
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
  setInterval(() => {
    count();
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("#name").value;

    console.log(`nom:${name}`);
    alert(`nom:${name}`);
  };
});
