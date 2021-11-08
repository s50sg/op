function loto() {
  var arr = [0];
  for (var i = 0; i <= 6; i++) {
    arr[i] = Math.floor(Math.random() * 39) + 1;
    console.log(i, arr[i]);
  }
  console.log(arr);
}

loto();
