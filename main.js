let a = ''
let b = ''
let operator = ''
let number = ''
let result = '0'

//operator functions
function add(a, b){
  return Number(a) + Number(b)
}

function subtract(a, b){
  return Number(a) - Number(b)
}

function multiply (a, b){
  return Number(a) * Number(b)
}

function divide (a, b) {
  if (Number(b)==0)
    return 'error'
  return Math.round ((Number(a) / Number(b)) * 100000000) / 100000000
}

function percent(a, b=1) {
      console.log('a=', a, 'b=', b, '!b=', !!(!b))
      return Number(a) * Number(b) /100 
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
    console.log('a=', a, 'b=', b, 'o=', operator)
  })
})

const operators = document.querySelectorAll('.Operator')
operators.forEach((oper) => {
  oper.addEventListener('click', (e) => {
    operator = e.target.innerText
    display.innerText = operator
    console.log('a=', a, 'b=', b, 'o=', operator)
  })
})

const ac = document.querySelector('.AC')
ac.addEventListener('click', () => {
  a = b = operator = number = ''
  result = '0'
  display.innerText = result
  console.log('a=', a, 'b=', b, 'o=', operator)
})

const dot = document.querySelector('.dot')
dot.addEventListener('click', ()=>{
  
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', () => {
  switch (operator) {
    case '+':
      b != ''
      ? (result = String(add(a, b)), console.log(result))
      : (result = String(add (a, a)), console.log(result))
      break
    case '-':
      b != ''
      ? (result = String(subtract(a, b)), console.log(result))
      : (result = String(subtract (a, a)), console.log(result))
      break
    case '*':
      b != ''
      ? (result = String(multiply(a, b)), console.log(result))
      : (result = String(multiply (a, a)), console.log(result))
      break
    case '/':
      b != ''
      ? (result = String(divide(a, b)), console.log(result))
      : (result = String(divide (a, a)), console.log(result))
      break
    case '%':
      b != ''
      ? (result = String(percent(a, b)), console.log(result))
      : (result = String(percent (a)), console.log(result))
      break
  }
  display.innerText = result
  a = result
  console.log('a=', a, 'b=', b, 'o=', operator)
})


