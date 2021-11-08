//vhod: kvadratna tabela prenos velikosti 4 x 8 elementov
//izhod: sporocilo o tem ali tabela vsebuje napako

var prenos = [[0,0,1,1,0,1,0,1],
	      [1,0,1,1,0,1,0,0],
	      [1,1,0,1,0,0,1,1],
	      [1,1,0,1,0,0,1,0]]

var n = 4, m = 8, sum = 0;

for (var i = 0; i < n; i++) {
  for (var j = 0; j < m; j++) {
    sum = sum + prenos[i][j];
  }
  if (sum % 2 == 0) {
    sum = 0;
    console.log("ni napake");
  }
  else {
    console.log("napaka");
  }
}
for (var j = 0; j < m; j++) {
  for (var i = 0; i < n; i++) {
    sum = sum + prenos[i][j];
  }
  if (sum % 2 == 0) {
    sum = 0;
    console.log("ni napake");
  }
  else {
    console.log("napaka");
  }
}
