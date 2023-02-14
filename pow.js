let a = +prompt("Ваше число");
let b = +prompt("Степінь");
function pow(a, n) {
  if (b == 1) {
    return a;
  } else {
    return a * pow(a, b - 1);
  }
}
console.log(pow(a,b));
