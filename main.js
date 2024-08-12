let a = ''
let numA = Number(a)
let b = ''
let numB = Number(b)
let operator = ''
let number = ''
let result = '0'

const display = document.querySelector('.display')

const btns = document.querySelectorAll('.num')
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    number += e.target.innerText
    display.innerText = number
  })
})

const operators = document.querySelectorAll('.Operator')
operators.forEach((oper) => {
  oper.addEventListener('click', (e) => {
    operator = e.target.innerText
    display.innerText = operator
  })
})

const ac = document.querySelector('.AC')
ac.addEventListener('click', () => {
  a = b = operator = number = ''
  result = '0'
  display.innerText = result
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', (e) => {
  console.log('=')
  result = 'e'
  display.innerText = result
})
