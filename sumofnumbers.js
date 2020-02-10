function sumFor(input) {
  let element = 0;
  for (let i = 0; i < input.length; i++) {
    element += input[i];
  }
  return element;
}

function sumWhile(input) {
  let element = 0;
  let i = 0;
  while (i < input.length) {
    element += input[i];
    i++;
  }
  return element;
}

function sumRecursion(input) {
  if (input.length !== 0) {
    return input[0] + sumRecursion(input.slice(1));
  }
  return 0;
}

function sumTheSimpleWay(input) {
  if (input.length !== 0) {
    return _.reduce(input, (memo, num) => memo + num);
  }
  return 0;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));

const empty = [];
console.log(sumFor(empty));
console.log(sumWhile(empty));
console.log(sumRecursion(empty));
console.log(sumTheSimpleWay(empty));
