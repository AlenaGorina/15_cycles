// 1. Создайте пустой массив с именем numbers

const numbers = [];

// 2. Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.

for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

// 3. Используя циклы, выполните следующие операции над массивом numbers:
//  Удалите все отрицательные числа из массива

for (const number of numbers) {
    if (number > 0) {
        console.log(number);
    }
};

// Возведите каждое число в квадрат

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
};

//  Отсортируйте числа в порядке убывания


numbers.sort(function(a, b) {
    return b - a;
    });

// 7. Выведите полученный массив numbers в консоль
console.log(numbers);