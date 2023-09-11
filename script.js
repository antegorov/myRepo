'use strict'

const rollback = 10

let title = prompt('Как называется проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')

let fullPrice, allServicePrices, servicePercentPrice

const showTypeOf = function (variable) {
	console.log(variable, typeof variable)
}

const getRollbackMessage = function (price) {
	if (price >= 30000) {
		rollback = 10
		return 'Даем скидку в 10%'
	} else if (price >= 15000 && price < 30000) {
		rollback = 5
		return 'Даем скидку в 5%'
	} else if (price < 15000 && price > 0) {
		rollback = 0
		return 'Скидка не предусмотрена'
	} else return 'Что-то пошло не так'
}

const getAllServicePrices = function (sPrice1, sPrice2) {
	allServicePrices = sPrice1 + sPrice2
	return allServicePrices
}

function getFullPrice(price, sPrice) {
	fullPrice = price + sPrice
	return fullPrice
}

function getTitle(str) {
	str = str.replace(/^ +/, '')
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const getServicePercentPrices = function (price) {
	servicePercentPrice = price - price * rollback * 0.01
	return servicePercentPrice
}

getTitle(' КаЛьКулятор Верстки')
getAllServicePrices(servicePrice1, servicePrice2)
getFullPrice(screenPrice, allServicePrices)
getRollbackMessage(fullPrice)
getServicePercentPrices(fullPrice)

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
console.log(screens.toLowerCase().split(', '))
console.log(getRollbackMessage(fullPrice))
console.log(servicePercentPrice)
console.log(
	'Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани'
)
console.log(getTitle(' КаЛьКулятор Верстки'))
