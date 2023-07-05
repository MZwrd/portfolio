
export function setupCalculator() {


    const result = document.querySelector('.result span')
    const all_clear = document.querySelector('.clear');
    const reversal = document.querySelector('.sign-reversal')
    const persent = document.querySelector('.sign-persent')
    const ope = document.querySelectorAll('.ope')
    const numbers = document.querySelectorAll('.number')
    const comma = document.querySelector('.comma')
    const equals = document.querySelector('.equals')

    let isFirstValue = false
    let isSecondValue = false
    let firstValue = ""
    let secondValue = ""
    let calOpe = ""                 // operator for calculation
    let isComma = false
    let num1, num2;                 // for calculate
    let index = 0                   // ope focus
    let isEqual = false
    let remain = 0                  // num -> ope -> = -> =...

    /* when you press the [0-9] */
    for (let i = 0; i < numbers.length; i++) {

        numbers[i].addEventListener('click', (e) => {
            showAll("numbers[i].addEventListener")
            let atr = e.target.getAttribute('value')
            ACtoC(atr)
            isEqual = false
            remain = atr
            if (isFirstValue === false && isSecondValue === false) {
                setFirstValue(atr)
            }
            if (isSecondValue === false && isFirstValue === true) {
                setSecondValue(atr)
                output(3)
            }

        })

    }

    /* when you press the [÷ × - +] */
    for (let i = 0; i < ope.length; i++) {
        
        ope[i].addEventListener('click', (e) => {
            showAll("operation")
            // value1 -> ope -> value2 -> ope -> ...
            if (firstValue !== "" && secondValue !== "" && isEqual === false) {
                let ans = cal(firstValue, secondValue)
                checkResultLength(String(ans).length)
                result.innerHTML = ans
                firstValue = ans
                secondValue = ""
            }

            calOpe = e.target.getAttribute('value')
            index = i
            isFirstValue = true                     // first value is determined             
            firstValue = result.innerHTML           // sign reversal
            isComma = false                         // comma can be used again                
        })

    }

    function setFirstValue(value) {
        showAll("setFirstValue")
        if (result.innerHTML == "0" && value == "0") {
            return
        } else if (result.innerHTML !== "0.") result.innerHTML = ""

        firstValue += value              
        result.innerHTML = firstValue
        
    }

    function setSecondValue(value) {
        showAll("setSecondValue")
        if (result.innerHTML == "0" && value == "0") {
            return
        } else if (result.innerHTML !== "0.") result.innerHTML = ""

        secondValue += value
        result.innerHTML = secondValue

    }

    function cal(first, second) {

        toDecimal(StoN(first), StoN(second))

        switch (calOpe) {
            case "÷":
                return num1.div(num2).toNumber()
                break;
            case "×":
                return num1.mul(num2).toNumber()
                break;
            case "-":
                return num1.sub(num2).toNumber()
                break;
            case "+":
                return num1.add(num2).toNumber()
                break;
            default:
                break;
        }
    }

    /* when you press the equals */
    equals.addEventListener('click', (e) => {
        showAll("equals.addEventListener")
        // first 〇, second ×，ope 〇　＝＞　num -> ope 
        if (firstValue !== "" && secondValue === "" && calOpe == "") {
            return
        }
        else if (firstValue !== "" && calOpe !== "") {
            secondValue = remain
            result.innerHTML = ""
            let ans = cal(firstValue, secondValue)
            checkResultLength(String(ans).length)
            result.innerHTML = ans.toLocaleString()
            isEqual = true
            firstValue = ans
            return
            
        }
        
        result.innerHTML = ""
        let ans = cal(firstValue, secondValue)
        checkResultLength(String(ans).length)
        result.innerHTML = ans.toLocaleString()
        isEqual = true
        firstValue = ans
        secondValue = ""
    })

    /* when you press the AC/C */
    all_clear.addEventListener('click', (e) => {
        showAll("all_clear.addEventListener")
        let atr = e.target.innerHTML
        // when you press the AC
        if (atr == "AC") {
            init()
        } 
   
        // when you press the C
        if (atr == "C" && isSecondValue == "" && isFirstValue === false || isEqual === true) {
            init()
        }
        else if (atr == "C" && calOpe !== "" && isEqual === false) {
            result.innerHTML = 0
            secondValue = ""
            all_clear.innerHTML = "AC";
            // output(ope[0])
            ope[index].focus()
            output('C')
        } 


    })

    /* when you press the +/- */
    reversal.addEventListener('click', (e) => {
        showAll("reversal.addEventListener")
        if (firstValue !== "" && secondValue == "") {
            firstValue *= -1
            remain *= -1
            result.innerHTML = firstValue
        }
        else if (secondValue !== "" && firstValue !== "") {
            secondValue *= -1   
            remain *= -1
            result.innerHTML = secondValue
        }

    })

    /* when you press the percent */
    persent.addEventListener('click', (e) => {
        let test = result.innerHTML
        result.innerHTML /= 100
    })

    /* when you press the comma */
    comma.addEventListener('click', (e) => {
        showAll("comma.addEventListener")
        ACtoC()

        // コンマ未使用で１回目の入力
        if (isComma === false && isFirstValue === false) {
            result.innerHTML += "."
            firstValue += "."
            isComma = true
            return
        }
        // コンマ未使用で２回目の入力 
        else if (isComma === false && isSecondValue === false) {
            // result.innerHTML = ""
            result.innerHTML += "."
            secondValue += "."
            isComma = true
            return
        }

    })

    function checkResultLength(value) {
        if (value >= 8) {
            result.style.fontSize = "4rem"
        }
    }

    /* Number to String */
    function NtoS(target) {
        return String(target)
    }

    /* String to Number */
    function StoN(target) {
        return Number(target)
    }

    function toDecimal(value1, value2) {
        num1 = new Decimal(value1);
        num2 = new Decimal(value2);
    }

    /* change html to C from AC */
    function ACtoC(value) {
        if (value === "0") return   // Not accepted on first entry
        all_clear.innerHTML = "C";
    }

    /* change html to AC from C */
    function CtoAC() {
        all_clear.innerHTML = "AC";
    }

    /* change String to Number */
    function StoN(value) {
        return Number(value)
    }

    /* initializer */
    function init() {
        result.innerHTML = 0
        isFirstValue = false
        firstValue = ""
        isSecondValue = false
        secondValue = ""
        isComma = false
        all_clear.innerHTML = "AC";
        calOpe = ""
        isEqual = false
        result.style.fontSize = "7rem"
        output('AC')
    }

    /* =========================================
        debug
     */
    
    function output(value) {
        console.log(value)
    }

    showAll("status")

    function showAll(_func){
        output(
            '------------------------------' + `\n` +
            _func + `\n` +
            '   result.innerHTML = ' + result.innerHTML + `\n` +
            '   isFirstValue     = ' + isFirstValue + `\n` +
            '   firstValue       = ' + firstValue + `\n` +
            '   isSecondValue    = ' + isSecondValue + `\n` +
            '   secondValue      = ' + secondValue + `\n` +
            '   isComma          = ' + isComma + `\n` +
            '   calOpe           = ' + calOpe + `\n` +
            '   isEqual          = ' + isEqual
        )
    }


}
