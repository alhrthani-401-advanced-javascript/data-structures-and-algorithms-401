function getFirstRepeatedStr(strr) {
  if (strr.length === 0) {
    return 'can accept empty string';
  }
  let str = strr.toLowerCase();
  let tempArr = [];
  let temp = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      temp += str[i];
    }
    if (str[i] === ' ') {
      // console.log('temp>>>',temp);
      // console.log('tempArr>>>',tempArr);
      if (tempArr.includes(temp)) {
        // console.log('found');
        return temp;
      }
      tempArr.push(temp);
      temp = '';
    }
  }
}
// getFirstRepeatedStr(text3);

module.exports = getFirstRepeatedStr;
