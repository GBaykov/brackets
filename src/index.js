module.exports = function check(str, bracketsConfig) {
    let sum = '';
    let count = 0;
   while (str !== '') {
     count = 0;
      for (let sub of bracketsConfig ){
      sum = sub[0] + sub[1]
        if (str.includes(sum)) {
      str = str.replace(sum, '');
      count = count+1;
      }
    } if (count === 0) break;
   } if (str === '') return true;
   else return false;
}
