function sumDeviders(a){
  var t = 0;
  for (var i = 1; i <= a/2; i++){
    if (a % i == 0){
      t += i;
    }
  }
  return t;
}

function mkArr(x, y){
  var arr = []; 
  for (var i = x; i <= y; i++){
    sum = sumDeviders(i);
    arr[i] = sum;
  }
  return arr;
}
function prntNum(x, y){
  seznam = mkArr(x, y);
  for (i = x; i <= y; i++){
    if (seznam[seznam[i]] == i && seznam[i] < i){
      console.log(seznam[i], i);
    }
  }
}
prntNum(0, 100000);
