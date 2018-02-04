//kwadrat
function kwadrat(a) {
    return a *= a;
}
var x = kwadrat(4);
console.log(x);

//zlozenie
function zlozenie(a, b, c) {
    return a + b + c;
}
var a = "marta";
var b = "ma";
var c = "kota";
var y = zlozenie(a, b, c);
console.log(y);

//wiek

function age(x) {
    if (x < 18) {
        return "masz " + x + " lat, wiec jestes niepelnoletni";
    }
}
var x = 12;
console.log(age(x));
//parametry

function dwaparametry(a, b) {
    if ((a == 7) || (b == 7) || ((a + b) == 7) || ((a - b) == 7)) {
        return true;
    } else {
        return false;
    }
}
var a = 7;
var b = 6;
console.log(dwaparametry(a, b));

//celsius
function CF(f) {
    return (f - 32) * 5 / 9;
}
var x = 32;
console.log(x + " stopni C to " + CF(x) + " stopni F");

//przestepny

function rok(x) {
    return (x==(x % 4));
    if (x==0);
}