let reverseNum = num => {
  if (typeof num !== "number") {
    return "please provide a integer";
  }
  let arrStr = num.toString().split("");
  if (arrStr[0] === "-") {
    arrStr.shift();
    let arrChar = ignoreZero(arrStr.reverse());
    arrChar.unshift("-");
    return Number(arrChar.join(""));
  }
  return Number(arrStr.reverse().join(""));
};

let ignoreZero = arr => {
  let count = 0;
  for (let x = 0; x < arr.length - 1; x++) {
    if (arr[x] === "0") {
      count++;
    }
  }
  return arr.slice(count);
};
