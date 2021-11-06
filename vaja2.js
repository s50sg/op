function sumDeviders(a){
  var t = 0;
  for(var i = 0; i <= a/2; i++){
    if (a % i == 0){
      t = t + i;
    }
  }
  return t;
}
function fndNum(a, b){
  a_sum = sumDeviders(a);
  b_sum = sumDeviders(b);

  if (a == b_sum && b == a_sum){
    console.log(a)
    console.log(b)
  }
}
function  main(){
  for(i = 200; i <= 10000; i++){
    for(j = 200; j <= 10000; j++){
      fndNum(i, j);
    }
  }
}
main();
