function power(a, b) {
var result = a;
    for (var i = 1; i < b ; i++) {
        result = result * a;
    }
    return result;
}

console.log(power(2, 4));

function idealnumber (x){
    var result = 0;
    for (var i=1; i<x; i++){
    if(x%i==0) {
    result=result+i;};
}
return result === x;
}
console.log(idealnumber(28));

function najwiekszy(array){
    
    var max=0;
    for (i=0; i<array.length; i++){
        if (array[i]>max){
            max=array[i];
        }
    }
    return max;
}
console.log(najwiekszy([2,5,7,8,7,8,9]));

function getCoins(value) {
    var fives = parseInt(value / 5);
    var fivesRest = value % 5;

    var twos = parseInt(fivesRest / 2);
    var twosRest = fivesRest % 2;

    var ones = parseInt(twosRest / 1);

    return {
        5: fives,
        2: twos,
        1: ones,
    }
}

function getCoinsLoop(value) {
    var notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    var result = {};
    var rest = value;

    for (var i = 0; i < notes.length; i++) {
        var currentNote = notes[i]; // 5
        var countOfNote = parseInt(rest / currentNote); // 2
        rest = rest % currentNote; // 3
        result[currentNote] = countOfNote;
    }

    return result;
}

var coinResult = getCoins(16);
console.log("Wynik standardowe: ", coinResult);

var coinLoopResult = getCoinsLoop(543452);
console.log("Wynik z pętli: ", coinLoopResult)


var str = "ala ma kota";
console.log(str.split(" "));

var str ="a.kowalski@onet.pl"
console.log(str.replace("@", "(at)"));



   var value=["a","e","o","u"];
    var word = "ala ma kota";
    value.forEach(function(element)){
word = word.replace(new RegExp(element, 'g'), ' ');
    }
   
}
console.log(word)