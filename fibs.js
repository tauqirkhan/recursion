function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];

  let output = [0, 1];
  for (let i = 2; i < num; i++) {
    output.push(output[i - 1] + output[i - 2]);
  }
  return output;
}

function fibsRec(num, suquence = [0, 1]) {
  if (num <= 0) return [];
  if (num === 1) return [0];

  //Adding .slice(0, num) isn't necessary but good pratice to do
  if (suquence.length === num) return suquence.slice(0, num);
  return fibsRec(
    num,
    suquence.concat(
      suquence[suquence.length - 1] + suquence[suquence.length - 2]
    )
  );
}

console.log(fibs(8));
console.log(fibsRec(8));
