'use strict'

const appData = {
	rollback: 10,
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},

	start: function () {
		appData.asking()
		appData.addPrices()
		//appData.getAllServicePrices()
		appData.getFullPrice()
		appData.getServicePercentPrices()
		appData.getTitle()

		appData.logger()
	},
	logger: function () {
		console.log(appData.fullPrice)
		console.log(appData.servicePercentPrice)
		console.log(appData.screens)
	},

	asking: function () {
		appData.title = prompt('Как называется проект?', 'Калькулятор верстки')

		for (let i = 0; i < 2; i++) {
			let name = prompt('Какие типы экранов нужно разработать?')
			let price = 0

			do {
				price = prompt('Сколько будет стоить данная работа')
			} while (!appData.isNumber(price))

			appData.screens.push({ id: i, name: name, price: price })
		}

		for (let i = 0; i < 2; i++) {
			let name = prompt('Какой дополнительный тип услуги нужен?')
			let price

			while (!appData.isNumber(price)) {
				price = prompt('Сколько это будет стоить?')
			}

			let str = i + '_' + name
			appData.services[str] = +price
		}

		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},

	addPrices: function () {
		appData.screenPrice = appData.screens.reduce(function (summary, item) {
			return +item.price + summary
		}, 0)

		for (let key in appData.services) {
			appData.allServicePrices += appData.services[key]
		}
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
	// getAllServicePrices: function () {
	// 	for (let key in appData.services) {
	// 		appData.allServicePrices += appData.services[key]
	// 	}
	// },
	getFullPrice: function () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices
	},
	getTitle: function () {
		appData.title = appData.title.replace(/^ +/, '')
		appData.title =
			appData.title.charAt(0).toUpperCase() +
			appData.title.slice(1).toLowerCase()
	},
	getServicePercentPrices: function () {
		appData.servicePercentPrice =
			appData.fullPrice - appData.fullPrice * appData.rollback * 0.01
	}
}

appData.start()
