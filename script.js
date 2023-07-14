'use strict'

const appData = {
	rollback: 10,
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',
	asking: function () {
		appData.title = prompt('Как называется проект?', 'Калькулятор верстки')
		appData.screens = prompt(
			'Какие типы экранов нужно разработать?',
			'Простые, сложные'
		)

		do {
			appData.screenPrice = prompt('Сколько будет стоить данная работа')
		} while (!appData.isNumber(appData.screenPrice))

		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},

	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num) && num !== null && num != ''
	},
	getRollbackMessage: function (price) {
		if (price >= 30000) return 'Даем скидку в 10%'
		else if (price >= 15000 && price < 30000) return 'Даем скидку в 5%'
		else if (price < 15000 && price >= 0) return 'Скидка не предусмотрена'
		else return 'Что-то пошло не так'
	},
	getAllServicePrices: function () {
		let sum = 0

		for (let i = 0; i < 2; i++) {
			let tmp
			if (i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
			} else if (i === 1) {
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
			}
			while (!appData.isNumber(tmp)) {
				tmp = prompt('Сколько это будет стоить?')
			}
			sum += +tmp
		}
		return sum
	},
	getFullPrice: function () {
		return +appData.screenPrice + appData.allServicePrices
	},
	getTitle: function () {
		appData.title = appData.title.replace(/^ +/, '')
		return (
			appData.title.charAt(0).toUpperCase() +
			appData.title.slice(1).toLowerCase()
		)
	},
	getServicePercentPrices: function () {
		return appData.fullPrice - appData.fullPrice * appData.rollback * 0.01
	},

	start: function () {
		appData.asking()
		appData.allServicePrices = appData.getAllServicePrices()
		appData.fullPrice = appData.getFullPrice()
		appData.servicePercentPrice = appData.getServicePercentPrices()
		appData.title = appData.getTitle()
		appData.logger()
	},
	logger: function () {
		console.log(appData.fullPrice)
		console.log(appData.servicePercentPrice)

		for (const item in appData) {
			console.log(item)
		}
	}
}

appData.start()
