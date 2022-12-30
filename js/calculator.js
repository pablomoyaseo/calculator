    const calculatorKeyContainer = document.querySelector(".father-btn")
    const screen = document.querySelector(".result-solution")
    let buffer = "0" // es el valor que tiene el screen
    let runningTotal = 0
    let previousOperator = null;
   
   
   window.addEventListener('DOMContentLoaded', () => {
       
        init()
    });
    

    function init() {
         eventsListener()
     }

    function  eventsListener () {
        calculatorKeyContainer.addEventListener("click", e => {
            const calculatorKey = e.target.textContent
            buttonClick(calculatorKey)
        })
    }
    
    function buttonClick(calculatorKey) {
        if(isNaN(parseInt(calculatorKey))) {
            handleSymbol(calculatorKey)
        } else {
            handleNumber(calculatorKey)
        }

        printPant();
    } 

    function handleNumber(number) {
        if(buffer === "0") {
            buffer = number;
            
        } else {
            buffer += number;
            // buffer = buffer + number
            
        }
       
    }

    function handleSymbol(symbol) {
        
        switch(symbol) {
            case "C": 
                buffer = "0";
                runningTotal = 0;
            break;
            case "=":
                if(previousOperator ===  null) {
                    return
                }
                makeOperation(parseInt(buffer))
                previousOperator = null
                buffer = "" + runningTotal
                // convierte a string el buffer para poder borrar con la tecla
                runningTotal = 0
                /* Mostrar en pantalla resultado */
            break;
            case "⇐":
                if(buffer.length === 1 ) {
                    buffer = "0"
                } else {
                    buffer = buffer.substring(0, buffer.length-1)
                    /* extrae desde el primero al penultimo, cortando el ultimo */
                }
            break;
            case "+":
            case "-":
            case "*":
            case "÷":
                handleMath(symbol);
            break;
        } 
    }

    function handleMath(operator) {
        if(buffer === 0) {
            return 
            // do nothing
        }
        const intBuffer = parseInt(buffer)
        if(runningTotal === 0 ) {
            runningTotal = intBuffer
            // almacenamos el valor de buffer
        } else {
            makeOperation(intBuffer)
        }

        previousOperator = operator
        // guardamos la operacion
        buffer = "0"
        //reinicializamos en 0 el buffer
       
    }

    function makeOperation(intBuffer) {
        switch(previousOperator) {
            case "+":
                runningTotal += intBuffer;
            break
            case "-":
                runningTotal -= intBuffer;
            break
            case "*":
                runningTotal *= intBuffer;
            break
            case "÷":
                runningTotal /= intBuffer;
            break
        }
        
    }



    function printPant() {
        screen.textContent = buffer
    }








