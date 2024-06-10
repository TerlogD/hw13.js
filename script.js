// Створення об'єктів для автопарку
const vehicle1 = {
  model: "Toyota Camry",
  type: "Легковий автомобіль",
  year: 2019,
  isOperational: true,
};

const vehicle2 = {
  model: "Ford Transit",
  type: "Вантажівка",
  year: 2015,
  isOperational: false,
};

const vehicle3 = {
  model: "Honda CR-V",
  type: "Кросовер",
  year: 2021,
  isOperational: true,
};

const vehicle4 = {
  model: "Volkswagen Golf",
  type: "Хетчбек",
  year: 2018,
  isOperational: true,
};

const vehicle5 = {
  model: "Mercedes-Benz Sprinter",
  type: "Мікроавтобус",
  year: 2020,
  isOperational: true,
};

// Створення масиву vehicles
const vehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];

// Виведення інформації про всі транспортні засоби
console.log("Інформація про всі транспортні засоби:");
for (let i = 0; i < vehicles.length; i++) {
  const vehicle = vehicles[i];
  console.log(`Модель: ${vehicle.model}, Тип: ${vehicle.type}, Рік випуску: ${vehicle.year}, Робочий стан: ${vehicle.isOperational}`);
}

// Виведення інформації про транспортні засоби, які є у робочому стані
console.log("\nІнформація про транспортні засоби, які є у робочому стані:");
for (let i = 0; i < vehicles.length; i++) {
  const vehicle = vehicles[i];
  if (vehicle.isOperational) {
    console.log(`Модель: ${vehicle.model}, Тип: ${vehicle.type}, Рік випуску: ${vehicle.year}`);
  }
}
