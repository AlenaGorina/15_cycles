// Массив городов
const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Краснодар", "Токио"];

// Пустой массив для хранения температур
const temperatures = [];

// Цикл по массиву городов
for (let i = 0; i < cities.length; i++) {
    const temperature = prompt(`Введите температуру для города ${cities[i]}:`);
    temperatures.push(Number(temperature)); // Преобразуем введённое значение в число
}

// Создаём список для отображения информации о городах
const townList = document.createElement('ul');

// Переменные для нахождения максимальной и минимальной температуры
let maxTemperature = -Infinity;
let minTemperature = Infinity;

// Цикл по массивам городов и температур
for (let i = 0; i < cities.length; i++) {
    // Создаём элемент списка
    const listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    
    // Добавляем элемент в список
    townList.appendChild(listItem);
    
    // Проверяем на максимальную и минимальную температуру
    if (temperatures[i] > maxTemperature) {
        maxTemperature = temperatures[i];
    }
    if (temperatures[i] < minTemperature) {
        minTemperature = temperatures[i];
    }
}

// Добавляем список в документ
document.body.appendChild(townList);

// Выводим максимальную и минимальную температуру
const maxTempItem = document.createElement('p');
maxTempItem.textContent = `Максимальная температура: ${maxTemperature}°C`;
document.body.appendChild(maxTempItem);

const minTempItem = document.createElement('p');
minTempItem.textContent = `Минимальная температура: ${minTemperature}°C`;
document.body.appendChild(minTempItem);
