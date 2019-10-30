let name = prompt("Твоё имя");
console.log("Привет " + name);

let birthYear = prompt("Твой год рождения");
const thisYear = 2019;
console.log("Вам " + (thisYear - birthYear) + " лет.");

let a = prompt("длина стороны квадрата");
console.log("Периметр квадрата: " + a * 4);

let r = prompt("радиус");
console.log("Площадь окружности: " + Math.PI * r ** 2);

let S = prompt("Растояние в км между двумя городами");
let t = prompt("За сколько часов хочешь добраться?");
console.log("Скорость, с которой необходимо двигаться: " + S / t + " км/час"); 

let $ = prompt("Сумма в долларах");
const exRates = 1.1;
console.log("Сумма в евро: " + $ / exRates);

let v = prompt("Объем флешки (в Гб)");
const file = 0.82;
console.log("Поместится: " + (Math.floor(v / file)) + " файлов размером в 820 Мб.");

let amount = prompt("Сумма");
let number = prompt("Цена одной шоколадки");
console.log("Можно купить " + Math.floor(amount / number) + " шоколадок. " + "Останется сдачи: " + amount % number);

let number = prompt("Введи трехзначное число");
let number1 = number % 10;
let number2 = Math.floor(number % 100 / 10);
let number3 = Math.floor(number % 1000 / 100);
console.log(number1);
console.log(number2);
console.log(number3);

let amount = prompt("Сумма вклада");
let month = 2;
console.log(amount * 0.05 / 12 * month);