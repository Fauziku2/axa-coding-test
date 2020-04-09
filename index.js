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

