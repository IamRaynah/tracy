let exp = '0'

let buttons = document.querySelectorAll('.input-col')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let input = buttons[i].innerHTML

        if (exp === '0') {
            exp = input
        } else if (input === "C") {
            exp = "0"
        } else {
            exp = exp + input
        }
        
        document.querySelector('.display-text').innerHTML = exp
    })
}