var a = 3, b = 4, c = 5, kot = -1, pi = 3.14, ploščina, kot1;

if (kot < 0 &&  c > 0) {
  kot1 = Math.acos((a * a + b * b - c * c) / (2 * a * b));
  ploščina = a * b * Math.sin(kot1) / 2;
} else {
  ploščina = a * b * Math.sin(kot * pi / 180) / 2; 
}

if (ploščina > 0) {
  console.log("ploščina = ", ploščina);
} else {
  console.log("ni trikotnik");
}
