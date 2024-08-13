let a = ''
let numA = Number(a)
let b = ''
let numB = Number(b)
let operator = ''
let number = ''
let result = '0'

//operator functions
function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply (a, b){
  return a * b
}

function divide (a, b) {
  if (b==0)
    return 'error'
  return Math.round ((a / b) * 100000000) / 100000000
}

function percent(a, b) {
  if (!b)
    return a / 100
  return a * b /100
  
}

const display = document.querySelector('.display')

const btns = document.querySelectorAll('.num')
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    number = e.target.innerText
    if (!operator) {
      a += number
      display.innerText = a
    } else {
      b += number
      display.innerText = b
    } 
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


