var moment = window.moment;

class Person {
    constructor(name, surname, dateOfBirth, gender) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
    hallo() {
        return `Hello, I'm ${this.name} ${this.surname}`
    }

    // var osoba = new Person ("Marta", "Stolarz", "02-11-1992", "woman");

    // alert(osoba.hallo());
    getTime(time) {
        let currentDate = moment(new Date());
        let dateOfBirth = moment(this.dateOfBirth);
        let differenceInYears = currentDate.diff(dateOfBirth,time);
        return differenceInYears;
    }
    getAge() {
        var age = this.getTime("years");
        return age;
    }
    getLifeDays() { 
       return this.getTime("days");
        
    }
}
var osoba = new Person ("Marta", "Stolarz", "02-11-1992", "woman");
console.log(osoba.getAge());