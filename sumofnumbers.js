const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumFor(input) {
  let element = 0;
  for (let i = 0; i < input.length; i++) {
    element += input[i];
  }
  return element;
}

console.log(sumFor(nums));

function sumWhile(input) {
  let element = 0;
  let i = 0;
  while (i < input.length) {
    element += input[i];
    i++;
  }
  return element;
}

console.log(sumWhile(nums));

function sumRecursion(input) {
  if (input.length !== 0) {
    return input[0] + sumRecursion(input.slice(1));
  }
  return 0;
}

console.log(sumRecursion(nums));

function sumTheSimpleWay(input) {
  return _.reduce(input, (memo, num) => memo + num);
}

console.log(sumTheSimpleWay(nums));
