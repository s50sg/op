var CHARTABLE = [
  'a','b','c','č','d',
  'e','f','g','h','i',
  'j','k','l','m','n',
  'o','p','r','s','š',
  't','u','v','z','ž','_', 0];

var PLAIN_MESSAGE = [
  'p','r','e','m','i','k','_',
  'v','s','e','h','_',
  'e','n','o','t','_',
  'i','z','_',
  'b','r','e','t','a','n','i','j','e','_',
  'v','_',
  'g','a','l','i','j','o','_',
  't','a','k','o','j','_',
  'c','a','e','s','a','r',0];

IMPORTANT_MESSAGE = [
  'v','n','p','b','m','e',
  'g','n','u','l','m','e',
  'f','b','p','u','k','z',
  'b','h','e','g','n','u',
  'l','k','z','b','č','j',
  'e','h', 0];

function length(arr) {
  var i = 0;
  while (arr[i] != 0) i++;
  return i;
}

function getCharIndex(arr, char) {
  var i = 0;
  while (char != arr[i]) i++;
  return i;
}

function encryptCharCaesar(char, offset) {
  var e_char;
  var l = length(CHARTABLE);
  var a = getCharIndex(CHARTABLE, char) + offset;
  if (a >= l) a = a - l;
  e_char = CHARTABLE[a];
  return e_char;
}

function decryptCharCaesar(e_char, offset) {
  var a = getCharIndex(CHARTABLE, e_char) - offset;
  if (a < 0) a = a + length(CHARTABLE);
  var char = CHARTABLE[a];
  return char;
}

function decryptMesseage(arr, offset) {
  var i = 0, decryptArr = [0];
  while (arr[i] != 0) {
    decryptArr[i] = decryptCharCaesar(arr[i], offset);
    i++;
  }
  return decryptArr;
}

function extendGeslo(arr, geslo) {
  var DOLZINA_GESLA = length(geslo);
  var i = 0;
  while(DOLZINA_GESLA + i < length(arr)) {
    geslo[i + DOLZINA_GESLA] = geslo[i];
    i++;
  }
  geslo[i + DOLZINA_GESLA] = 0;
  return 0;
}

function vigener(arr, geslo) {
  extendGeslo(arr, geslo);
  for(var i = 0; i < length(arr); i++) {
    arr[i] = encryptCharCaesar(arr[i], getCharIndex(CHARTABLE, geslo[i]));
  }
  return 0;
}

function deVigener(arr, geslo) {
  extendGeslo(arr, geslo);
  for(var i = 0; i < length(arr); i++) {
    arr[i] = decryptCharCaesar(arr[i], getCharIndex(CHARTABLE, geslo[i]));
  }
  return 0;
}

bu = ['a','b','c', 'g', 'a', 0];
vigener(PLAIN_MESSAGE, bu);
console.log(PLAIN_MESSAGE);
deVigener(PLAIN_MESSAGE, bu);
console.log(PLAIN_MESSAGE);
