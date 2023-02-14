let a = +prompt("Ваше число");
let n = +prompt("Степінь");
function pow(a, n) {
  if (n == 1) {
    return a;
  } else {
    return a * pow(a, n - 1);
  }
}
console.log(pow(a, n));