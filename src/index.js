module.exports = function check(str, bracketsConfig) {
  const openBr = bracketsConfig.map(item => item[0]);
  const closeBr = bracketsConfig.map(item => item[1]);
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBr.includes(str[i])) {
      stack.push(str[i]);
    }

    if (closeBr.includes(str[i])) {
      if (closeBr.indexOf(str[i]) !== openBr.indexOf(stack.pop())) {
        return false;
      }
    }
  }

  return !stack.length;
}