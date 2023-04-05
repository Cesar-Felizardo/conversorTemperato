
setInterval(function converterTempCelcius() {
    const select = document.getElementById("select")
    const spanOpt = document.getElementById("spanOpt")
    const input = document.getElementById("celcius").value
    const ansower = document.getElementById("ansower")

     if(select.value == 'Graus Celcius') {
        celcius()
        spanOpt.innerHTML = 'Graus Fahrenheit'
        input.readOnly = false
    }
    else if (select.value == 'Graus Fahrenheit') {
        fahrenheit()
        spanOpt.innerHTML = 'Graus Celcius'
        input.readOnly = false
    } 

    //FUNCTION CELSIUS 

    function celcius() {
        const tempCurrent = input
        if(!tempCurrent) {
            ansower.classList.add("fontMedium")
            ansower.classList.add("readOnly")
            ansower.value = 'Aguardando...'
        }
        else {
            ansower.classList.remove("fontMedium")
            ansower.classList.remove("readOnly")
            let tempUpdate = (tempCurrent * 9/5) + 32
            ansower.value = tempUpdate.toFixed(2)
        }
    }

    //FUNCTION FAHRENEIHT

    function fahrenheit() {
        const tempCurrent = input
        if(!tempCurrent) {
            ansower.classList.add("fontMedium")
            ansower.classList.add("readOnly")
            ansower.value = 'Aguardando...'
        }
        else {
            ansower.classList.remove("fontMedium")
            ansower.classList.remove("readOnly")
            let tempUpdate = (tempCurrent - 32)/1.8
            ansower.value = tempUpdate.toFixed(0)
        }
    }
},100)







































