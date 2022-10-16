/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом: */

let car = {
  producer: "BMW",
  model: "M3",
  productionDate: 2022,
  averageSpeed: 100,
  fuelCapacity: 65,
  fuelConsumption: 20,
  drivers: ['Alex'],
};

//Метод, який виводить на екран інформацію про автомобіль.

car.showInfo = showInfo;

function showInfo() {
  for (const key in this) {
    console.log(this[key]);
  };
};

// Додавання ім’я водія у список

car.addDriver = addDriver;

function addDriver(name) {
  this.drivers.push(name);
};

//Перевірка водія на наявність його ім’я у списку

car.checkDriver = checkDriver;

function checkDriver(name) {
  return this.drivers.includes(name); 
};

//Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

car.calcTrip = calcTrip;

function calcTrip(distance) {
  let time = (distance / this.averageSpeed + Math.floor(distance / this.averageSpeed / 4));
  console.log(Math.floor(time) + " hours, " + Math.round((time - Math.floor(time)) * 60) + "minutes");
  let fuelAmount = distance / this.fuelConsumption;
  console.log(fuelAmount + "liters of fuel");
  return {"time": time, "fuelAmount": fuelAmount};
};

car.showInfo();
