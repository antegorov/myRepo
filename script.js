"use strict";

let title = prompt("Как называется проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа");
let rollback = 64;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - fullPrice * 0.03);
console.log(servicePercentPrice);

fullPrice > 30000
	? console.log("Даем скидку в 10%")
	: fullPrice >= 15000 && fullPrice < 30000
	? console.log("Даем скидку в 5%")
	: fullPrice < 15000 && fullPrice > 0
	? console.log("Скидка не предусмотрена")
	: console.log("Что-то пошло не так");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
	"Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани"
);

console.log(screens.toLowerCase().split(", "));
