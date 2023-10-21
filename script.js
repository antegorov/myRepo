'use strict'

const book = document.querySelectorAll('.book')
const body = document.querySelector('body')

let arrayName = []
let arrayValue = []
for (let i = 0; i < book.length; i++) {
	let str = book[i].children[0].textContent
	arrayName = str.split(' ')
	let value = arrayName[1].replace('.', '')
	arrayValue.push(Number(value))
}

let arrayValueSort = arrayValue
arrayValueSort = arrayValueSort.slice().sort(function (a, b) {
	return a - b
})

for (let i = 0; i < arrayValueSort.length; i++) {
	for (let j = 0; j < arrayValueSort.length; j++) {
		let str = book[j].children[0].textContent
		arrayName = str.split(' ')
		let value = arrayName[1].replace('.', '')
		value = Number(value)

		if (value == arrayValueSort[i]) {
			// debugger
			book[i].parentNode.insertAdjacentElement('beforeend', book[j])
			break
		}
	}
}

// 2
body.style.backgroundImage = "url('image/you-dont-know-js.jpg')"

// 3
for (let i = 0; i < arrayValueSort.length; i++) {
	let str = book[i].children[0].textContent
	arrayName = str.split(' ')
	let value = arrayName[1].replace('.', '')
	value = Number(value)
	if (value == 3) {
		book[i].querySelector('a').innerHTML = 'Книга 3. this и Прототипы Объектов'
		break
	}
}

const adv = document.querySelector('.adv')
adv.remove()

for (let i = 0; i < arrayValueSort.length; i++) {
	let str = book[i].children[0].textContent
	arrayName = str.split(' ')
	let value = arrayName[1].replace('.', '')
	value = Number(value)
	if (value == 2) {
		let list = book[i].querySelectorAll('li')
		list[2].before(list[3])
		list[3].after(list[6])
		list[2].after(list[8])
		list[9].after(list[2])
	}

	if (value == 5) {
		let list = book[i].querySelectorAll('li')
		list[1].after(list[9])
		list[2].before(list[3])
		list[3].after(list[4])
		list[8].before(list[5])
		break
	}
	//Глава 8: За пределами ES6
	if (value == 6) {
		let list = book[i].querySelectorAll('li')
		const newElem = document.createElement('li')
		newElem.textContent = 'Глава 8: За пределами ES6'
		list[0].parentNode.append(newElem)
		// console.log(list[9].textContent)
		list[9].parentNode.append(list[9])
	}
}
