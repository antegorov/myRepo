const btn = document.getElementById('btn')
const input = document.getElementById('text')
const range = document.getElementById('range')
const btnCircle = document.getElementById('e_btn')
const square = document.getElementById('square')

let color = ''

const getColor = function (e) {
	color = e.target.value
}

input.addEventListener('change', getColor)

btn.addEventListener('click', function () {
	square.style.backgroundColor = color
})

range.addEventListener('input', function (e) {
	circle.style.width = e.target.value + '%'
	circle.style.height = e.target.value + '%'
})

btnCircle.style.display = 'none'
