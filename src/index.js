import './scss/app.scss'
const elem1 = document.getElementById('elem1')
function func1 () {
  alert(this.value)
}
func1.call(elem1)

const elem2 = document.getElementById('elem2')

function func2 (surname, name) {
  alert(this.value + ', ' + surname + ' ' + name)
}
func2.apply(elem2, ['иван', 'иван'])

function func3 (surname, name) {
  alert(this.value + ', ' + surname + ' ' + name)
}

func3.bind(elem2)('Иванов', 'Иван')
func3.bind(elem2)('Петров', 'Петр')
