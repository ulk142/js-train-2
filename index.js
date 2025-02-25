//Задача 1: Напишіть функцію, яка буде виконувати js код який передали в функцію через аргумент в форматі тексту

// Створюємо функцію з назвою calculateExpression, яка приймає один аргумент expression
function calculateExpression(expression) {
  //Преревіряємо чи аргумент є рядком
  //Якщо так повертаємо виконананий код
  // Якщо ні повертаємо текст "Argument is not a string"
  if (eval(expression)) {
    return eval(expression);
  }
  return "Argument is not a string";
}

console.log("Завдання 1 ====================================");
console.log(
  'calculateExpression("3 + 5 * 2")',
  calculateExpression("3 + 5 * 2")
); // Виведе 13

// Задача 2: Напишіть функцію, яка приймає рядок та повертає число з цього рядка або повідомлення про помилку.

// Створюємо функцію з назвою getNumberFromString, яка приймає один аргумент s
function getNumberFromString(s) {
  // Використовуємо функцію parseFloat для того, щоб спробувати отримати число з рядка
  // Перевіряємо, чи є отримане значення числом за допомогою isNaN
  // Якщо значення не є числом, повертаємо текст "Couldn't extract a number from the provided string."
  // Якщо значення є числом, повертаємо його
  if (isNaN(parseFloat(s))) {
    return "Couldn't extract a number from the provided string."
  }
  return s;
}

// Виводимо результати виклику функції
console.log("Завдання 2 ====================================");
console.log(
  'getNumberFromString("100.5 apples")',
  getNumberFromString("100.5 apples")
); // Виведе 100.5
console.log(
  'getNumberFromString("No numbers here")',
  getNumberFromString("No numbers here")
); // Виведе повідомлення про помилку

// Задача 3: Напишіть функцію, яка приймає рядок та повертає ціле число з цього рядка або повідомлення про помилку.

// Створюємо функцію з назвою getIntegerFromString, яка приймає один аргумент s
function getIntegerFromString(s) {
  // Використовуємо функцію parseInt для того, щоб спробувати отримати ціле число з рядка
  // Перевіряємо, чи є отримане значення числом за допомогою isNaN
  // Якщо значення не є числом, повертаємо текст "Couldn't extract an integer from the provided string."
  // Якщо значення є числом, повертаємо його
  if (isNaN(parseInt(s))) {
    return "Couldn't extract an integer from the provided string."
  }
  return s;
}

// Виводимо результати виклику функції
console.log("Завдання 3 ====================================");
console.log(
  'getIntegerFromString("100")',
  getIntegerFromString("100")
); // Виведе 100
console.log(
  'getIntegerFromString("No integers here")',
  getIntegerFromString("No integers here")
); // Виведе повідомлення про помилку

// Задача 4: Напишіть функцію, яка перевіряє, чи є введене число скінченним.

// Створюємо функцію з назвою isNumberFinite, яка приймає один аргумент - num
function isNumberFinite(num) {
  // Використовуємо вбудовану функцію isFinite, щоб перевірити, чи є введене число скінченним.
  // Ця функція повертає true, якщо число є скінченним, і false, якщо число є нескінченним або не є числом.
  // За допомогою оператора if перевіряємо, чи є число скінченним.
  // Якщо число є скінченним, повертаємо текст "The number is finite.".
  // Якщо число не є скінченним, повертаємо текст "The number is not finite.".
  if (isFinite(num)) {
    return "The number is finite."
  }
  return "The number is not finite.";
}

// Виконуємо функцію з різними вхідними даними і виводимо результат.
console.log("Завдання 4 ====================================");
console.log("isNumberFinite(100)", isNumberFinite(100)); // Виведе "The number is finite."
console.log("isNumberFinite(Infinity)", isNumberFinite(Infinity)); // Виведе "The number is not finite."

// Задача 5: Напишіть функцію, яка перевіряє, чи є введене значення NaN.

// Створюємо функцію з назвою isValueNaN, яка приймає один аргумент - value
function isValueNaN(value) {
  // Використовуємо вбудовану функцію isNaN, щоб перевірити, чи є введене значення NaN.
  // Ця функція повертає true, якщо значення є NaN, і false, якщо значення не є NaN.
  // За допомогою оператора if перевіряємо, чи є значення NaN.
  // Якщо значення є NaN, повертаємо текст "The value is NaN.".
  // Якщо значення не є NaN, повертаємо текст  "The value is not NaN.".

  if (isNaN(value)) {
    return "The value is NaN."
  }
  return "The value is not NaN.";
}

// Виконуємо функцію з різними вхідними даними і виводимо результат.
console.log("Завдання 5 ====================================");
console.log("isValueNaN(NaN)", isValueNaN(NaN)); // Виведе "The value is NaN."
console.log("isValueNaN(100)", isValueNaN(100)); // Виведе "The value is not NaN."

// Задача 6: Напишіть функцію, яка створює об'єкт URL.

// Створюємо функцію з назвою createURLObject, яка приймає один аргумент - urlStr
function createURLObject(urlStr) {
  // Використовуємо вбудований конструктор URL, щоб створити новий об'єкт URL з введеного рядка.
  // Повертаємо створений об'єкт URL.
  return encodeURI(urlStr);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 6 ====================================");
console.log(
  'createURLObject("https://example.com")',
  createURLObject("https://example.com")
); // Виведе URL об'єкт

// Задача 7: Напишіть функцію, яка кодує компонент URL.

// Створюємо функцію з назвою encodeURLComponent, яка приймає один аргумент - urlComponent
function encodeURLComponent(urlComponent) {
  // Використовуємо вбудовану функцію encodeURIComponent, щоб закодувати введений компонент URL.
  // Ця функція повертає закодований компонент URL, замінивши небезпечні символи на їх процентне кодування.
  // Повертаємо закодований компонент URL.
  return encodeURIComponent(urlComponent);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 7 ====================================");
console.log(
  'encodeURLComponent("Hello World!")',
  encodeURLComponent("Hello World!")
); // Виведе "Hello%20World%21"

// Задача 8: Напишіть функцію, яка кодує URL.

// Створюємо функцію з назвою encodeURL, яка приймає один аргумент - url
function encodeURL(url) {
  // Використовуємо вбудовану функцію encodeURI, щоб закодувати введений URL.
  // Ця функція повертає закодований URL, замінивши небезпечні символи на їх процентне кодування.
  // Повертаємо закодований URL.
  return encodeURI(url);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 8 ====================================");
console.log(
  'encodeURL("https://ex ample.com")',
  encodeURL("https://ex ample.com")
); // Виведе "https://ex%20ample.com"

// Задача 9: Напишіть функцію, яка декодує закодований компонент URL.

// Створюємо функцію з назвою decodeURLComponent, яка приймає один аргумент - urlComponent
function decodeURLComponent(urlComponent) {
  // Використовуємо вбудовану функцію decodeURIComponent, щоб декодувати введений закодований компонент URL.
  // Ця функція повертає декодований компонент URL, замінивши процентне кодування символів на їх реальні значення.
  // Повертаємо декодований компонент URL.
  return decodeURIComponent(urlComponent);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 9 ====================================");
console.log(
  'decodeURLComponent("Hello%20World%21")',
  decodeURLComponent("Hello%20World%21")
); // Виведе "Hello World!"

// Задача 10: Напишіть функцію, яка декодує закодований URL.

// Створюємо функцію з назвою decodeURL, яка приймає один аргумент - url
function decodeURL(url) {
  // Використовуємо вбудовану функцію decodeURI, щоб декодувати введений закодований URL.
  // Ця функція повертає декодований URL, замінивши процентне кодування символів на їх реальні значення.
  // Повертаємо декодований URL.
  return decodeURI(url);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 10 ====================================");
console.log(
  'decodeURL("https://ex%20ample.com")',
  decodeURL("https://ex%20ample.com")
); // Виведе "https://ex ample.com"
