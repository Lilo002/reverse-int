module.exports = function reverse (n) {
  n = Math.abs(n);
    let str = n.toString();
    let arr = str.split('');
    let arr1 = [];
    while (arr.length) {
        arr1.unshift(arr.splice(0,1));
    }
    if (arr1[0] == 0) {
        arr1.shift()
    }    
    return +(arr1.join(''));
}
