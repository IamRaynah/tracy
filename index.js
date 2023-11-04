let exp = '0'

let a = ''
let b = ''
let operator = ''

let special = ['%', '/', 'x', '-', '+', '=', 'C', '.']

let buttons = document.querySelectorAll('.input-col')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let input = buttons[i].innerHTML

        if (special.includes(input)) {
            if (input === 'C') {
                a = ''
                b = ''
                operator = ''

                exp = '0'
            } else if (input === '=') {
                let x = parseFloat(a)
                let y = parseFloat(b)
                
                if (operator === '+') {
                    exp = x + y
                } else if (operator === '-') {
                    exp = x - y
                } else if (operator === 'x') {
                    exp = x * y
                } else if (operator === '/') {
                    exp = x / y
                } else if (operator === '%') {
                    exp = x % y
                }

                a = exp
                b = ''
                operator = ''
            } else if (input === '.') {
                if (operator === '') {
                    if (!a.includes('.')) {
                        a = a + input
                    }
                } else {
                    if (!b.includes('.')) {
                        b = b + input
                    }
                }

                exp = a + operator + b
            } else {
                operator = input
                exp = a + operator + b
            }
        } else {
            if (operator === '') {
                a = a + input
            } else {
                b = b + input
            }

            exp = a + operator + b
        }
        
        document.querySelector('.display-text').innerHTML = exp
    })
}