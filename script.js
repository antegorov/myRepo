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
		appData.getFullPrice()
		appData.getServicePercentPrices()
		appData.getTitle()
		appData.logger()
	},

	asking: function () {
		do {
			appData.title = prompt('Как называется проект?', 'Калькулятор верстки')
		} while (!isNaN(appData.title))

		for (let i = 0; i < 2; i++) {
			do {
				name = prompt('Какие типы экранов нужно разработать?')
			} while (!isNaN(name))
			let price = 0
			do {
				price = prompt('Сколько будет стоить данная работа')
			} while (!appData.isNumber(price))

			appData.screens.push({ id: i, name: name, price: price })
		}

		let nameServices = []
		for (let i = 0; i < 2; i++) {
			nameServices.push(i + 1 + '_')
			do {
				nameServices[i] = prompt('Какой дополнительный тип услуги нужен?')
			} while (!isNaN(nameServices[i]))
			let price = 0

			while (!appData.isNumber(price)) {
				price = prompt('Сколько это будет стоить?')
			}

			appData.services[nameServices[i]] = +price
		}

		appData.adaptive = confirm('Нужен ли адаптив на сайте?')
	},

	addPrices: function () {
		appData.screenPrice += appData.screens.reduce(function (sum, screen) {
			return sum + Number(screen.price)
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

	getFullPrice: function () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices
	},
	getTitle: function () {
		appData.title = appData.title.replace(/^ +/, '')
		return (
			appData.title.charAt(0).toUpperCase() +
			appData.title.slice(1).toLowerCase()
		)
	},
	getServicePercentPrices: function () {
		appData.servicePercentPrice =
			appData.fullPrice - appData.fullPrice * appData.rollback * 0.01
	},

	logger: function () {
		console.log(appData.fullPrice)
		console.log(appData.servicePercentPrice)
		console.log(appData.screens)
	}
}

appData.start()
