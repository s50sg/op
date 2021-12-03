function loto() {
  var arr = [0];
  for (var a = 0; a <= 6; a++) {
    arr[a] = Math.floor(Math.random() * 39) + 1;
    for (i = a - 1; i >= 0; i-- ) {
      while (arr[a] == arr[i]) {
        arr[a] ++;
        i = a - 1
      }
    }
  }
  return arr;
}

function swap(arr, a, b) {
  var tmp = [0];
  tmp[a] = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp[a];
}

function sort(arr) {
  var i = 0, j = 0;
  while(j <= 36) {
    while (i < 7) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
      else j++;
      i++;
    }
    i = 0;
  }
}

function check(arr) {
  var i = 0;
  while(arr[i] != arr[i + 1] && i <= 5) {
    i++;
  }
  if (i == 6) return 1;
  else return 0;
}

z = 0;
do {
  a = loto();
  sort(a);
  b = check(a);
  console.log(a, b, z);
  z++;}
while(b == 1 && z < 1000);
