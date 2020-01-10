var checkbox = document.querySelectorAll('input[type=checkbox]')
var radio = document.querySelectorAll('input[type=radio]')
var total = document.getElementById('total')

for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function() {
        if (this.checked) {
            setTotal(this.value, '+')
        } else {
            setTotal(this.value, '-')
        }
    })
}

var sizeTotal = 0
for (var i = 0; i < radio.length; i++) {
    radio[i].addEventListener('change', function() {        
        setTotal(sizeTotal-Number(this.value), '-')
        setTotal(this.value, '+')        
    })
    sizeTotal += Number(radio[i].value)
    if(radio[i].checked) setTotal(radio[i].value, '+')    
}

function setTotal(value, type) {
    switch(type) {
        case '+':
            total.innerText = Number(total.innerText) + Number(value)
            break
        case '-':
            total.innerText = Number(total.innerText) - Number(value)
            break
    }    
}