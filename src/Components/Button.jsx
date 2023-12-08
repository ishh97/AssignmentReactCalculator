import React, { useState } from 'react'



const Calculator = () => {

    const [expression, setExpression] = useState('')

    const HandleButtonClick = (e) => {
        setExpression(expression + e)
    }

    const HandleAC = () => {
        setExpression('')
    }
    const HandleDel = () => {
        if (typeof expression != 'string') {
            let exp = expression.toString()
            setExpression(exp.slice(0, -1))
        }
        else {
            setExpression(expression.slice(0, -1))
        }
    }
    const HandleEqual = () => {
        setExpression(eval(expression))
    }
    return (
        <>
            <div className='main'>
                <div>
                    <input type="text" defaultValue={expression} />
                </div>
                <div className='Div1'>
                    <button onClick={HandleDel} className='DelBtn'>Del</button>
                    <button onClick={HandleAC} className='Acbtn'>AC</button>
                </div>
                <div>
                    <button onClick={() => HandleButtonClick('1')}>1</button>
                    <button onClick={() => HandleButtonClick('2')}>2</button>
                    <button onClick={() => HandleButtonClick('3')}>3</button>
                    <button onClick={() => HandleButtonClick('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => HandleButtonClick('4')}>4</button>
                    <button onClick={() => HandleButtonClick('5')}>5</button>
                    <button onClick={() => HandleButtonClick('6')}>6</button>
                    <button onClick={() => HandleButtonClick('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => HandleButtonClick('7')}>7</button>
                    <button onClick={() => HandleButtonClick('8')}>8</button>
                    <button onClick={() => HandleButtonClick('9')}>9</button>
                    <button onClick={() => HandleButtonClick('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => HandleButtonClick('.')}>.</button>
                    <button onClick={() => HandleButtonClick('0')}>0</button>
                    <button onClick={() => HandleButtonClick('/')}>/</button>
                    <button onClick={HandleEqual}>=</button>

                </div>
            </div>
        </>
    )
}


export default Calculator