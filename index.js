let a, b, operator

let buttons = document.querySelectorAll('.input-col')
let operators = ['/', '%', 'x', '-', '+']   

function appendNumber(input) {
    if (!operator) {
        a = a ? a + input : input
    } else {
        b = b ? b + input : input
    }
}

function expression(eval = false) {
    if (eval) {
        let ans
        a = Number(a)
        b = Number(b)

        switch (operator) {
            case '/':
                ans = a / b
                break

            case '%':
                ans = a % b
                break
                
            case 'x':
                ans = a * b
                break
                
            case '-':
                ans = a - b
                break
                
            case '+':
                ans = a + b
                break
                
            default:
                ans = '0'
                break
        }

        a = ans
        b = null
        operator = null

        return ans
    }

    if (!a)
        return "0"

    return `${a ? Number(a) : ''}${operator ?? ''}${b ? Number(b) : ''}`
}

function calculate (input, e) {
    let eval = false
        
    if (isNaN(input)) {
        if (operators.includes(input)) {
            operator = input
        } else if (input === '=') {
            eval = true
        } else if (input === 'C') {
            a = null
            b = null
            operator = null
        } else if (input === '.') {
            appendNumber(input)
        } else if (e) {
            let attr = e.attributes.getNamedItem('data-btn')?.value                
            if (attr === 'backspace') {
                if (b?.length === 1 && b !== null) {
                    b = null
                } else if (b?.length > 1) {
                    b = b.substring(0, b.length - 1)
                } else if (operator) {
                    operator = null
                } else if (a?.length > 1) {
                    a = a.substring(0, a.length - 1)
                } else {
                    a = null
                }
            }
        }
    } else {
        appendNumber(input)
    }
    
    document.querySelector('.display-text').innerHTML = expression(eval)
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let input = buttons[i].innerHTML
        calculate(input, buttons[i])
    })
}

document.addEventListener('keyup', function (e) {
    calculate(e.key)
})