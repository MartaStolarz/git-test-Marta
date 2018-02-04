var moment = window.moment;

class Car {
  constructor(model, brand, speed, productionDate) {
    this.model = model;
    this.brand = brand;
    this.speed = speed;
    this.productionDate = productionDate;
  }

  drive(distance) {
    this.startDriving();
    let travelTime = this.getTravelTime(distance);
    // setTimeout(this.finishDriving.bind(this), travelTime); // drugi sposób
    setTimeout(() => {
      this.finishDriving();
    }, travelTime);
  }

  getTravelTime(distance) {
    // 1second = 1000milisecond
    return (distance * this.speed) / 1000;
  }

  startDriving() {
    console.log('🚘 start driving');
  }

  finishDriving() {
    console.log('🏁 🚗 finish driving wih speed: ' + this.speed);
  }
  getCarAge() {
    let currentDate = moment(new Date());
    let productionDate = moment(this.productionDate);
    let differenceInYears = currentDate.diff(productionDate, 'years');
    return differenceInYears;
  }
}

let audi = new Car('Q8', 'audi', '100', new Date('2000-12-01'))

audi.drive(50000);

// model, brand, speed
// pobierz pelne informacje o samochodzie (model, marka, maksymalna predkosc(m/s), rocznik)
// productionDate, oblicz ile ma lat

/* czas podrozy - (distance * this.speed) / 1000;
  10 m / s = 5000m / t

  t = 5000 m / 100 m / s
  t = 50s
*/
