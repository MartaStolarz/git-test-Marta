function time(a) {
    var t = a / 60;
    t = parseInt(t);
    var m = a % 60;
    return t + "h" + m + "m";
}
console.log(time(155));

//zad 3.3
function double() {
    var array = [1, 3, -2, -7];
    var podwojenia = array.map(function (x) {
        if (x < 0) {
            return 0;
        } else {
            return x * 2;
        }
    });

    return podwojenia;
}

console.log(double());

//zad.3.4
function laczy() {
    var array1 = [4, 5];
    var array2 = [6, 7];
    return array1.concat(array2);
}
console.log(laczy());
//3.5

function usun() {
    var array = ["a", "b", 3, 6, 9];
    var array2 = array.filter(function (x) {
            if (typeof x=="number"){
                return true;
            }
    });
    return array2;
}
console.log(usun());


//3.6

// function porownanie(){
//     var array1=[1,2];
//     var array2=[1,-7];
// var array3
// }

class Animal{
    constructor(name, wiek) {
        this.name= name;
        this.wiek = wiek;
    }
    getFullAnimalInfo(){
        //return this.name +" jest w wieku: " + this.wiek;// to samo co na dole
        return `${this.name} jeest w wieku: ${this.wiek}`;
    }
}
var dog= new Animal('dog', 5);
var info = dog.getFullAnimalInfo();
console.log(info);