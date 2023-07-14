'use strict'

const rollback = 10
let title
let screens
let screenPrice
let adaptive
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num) && num !== null && num != ''
}

const asking = function () {
	title = prompt('Как называется проект?', 'Калькулятор верстки')
	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные')

	do {
		screenPrice = prompt('Сколько будет стоить данная работа')
	} while (!isNumber(screenPrice))

	screenPrice = screenPrice.trim()
	adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getRollbackMessage = function (price) {
	if (price >= 30000) return 'Даем скидку в 10%'
	else if (price >= 15000 && price < 30000) return 'Даем скидку в 5%'
	else if (price < 15000 && price > 0) return 'Скидка не предусмотрена'
	else return 'Что-то пошло не так'
}

const getAllServicePrices = function () {
	let sum = 0

	for (let i = 0; i < 2; i++) {
		let tmp
		if (i === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?')
		} else if (i === 1) {
			service2 = prompt('Какой дополнительный тип услуги нужен?')
		}
		while (!isNumber(tmp)) {
			tmp = +prompt('Сколько это будет стоить?')
		}
		sum += tmp
	}
	return sum
}

function getFullPrice(price, allServicePrices) {
	return price + allServicePrices
}

function getTitle(str) {
	str = str.replace(/^ +/, '')
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const getServicePercentPrices = function (price) {
	return price - price * rollback * 0.01
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice(screenPrice, allServicePrices)
servicePercentPrice = getServicePercentPrices(fullPrice)
title = getTitle(title)

console.log('allServicePrices: ', allServicePrices)

console.log(screens.toLowerCase().split(', '))
console.log(getRollbackMessage(fullPrice))

console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)

console.log(screens.length)
console.log(title)
console.log(servicePercentPrice)
console.log(
	'Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани'
)
