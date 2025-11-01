import React from 'react'
import { useState,useEffect } from 'react'

const calc = () => {
    let [number1, setNumber1] = useState('');
    let [number2, setNumber2] = useState('');
    
    const [output, setOutput] = useState(null);


    let operation = (operator)=>{
        let answer;
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        if (operator === '+'){
            answer = number1 + number2;
        }
        else if(operator === '-'){
            answer = number1 - number2
        }
        else if(operator === 'x'){
            answer = number1 * number2
        }
        else if(operator === '/'){
            if (number2 === 0){
                answer = Infinity
            }else{
                answer = number1 / number2
            }
        }
        setOutput(answer)
    }

  return (
    <div>
        <input type="text" placeholder='num1' onChange={(e)=> setNumber1(e.target.value)} />
        <input type="text" placeholder='num2' onChange={(e)=> setNumber2(e.target.value)} />
        <button onClick={()=>operation('+')}>+</button>
        <button onClick={()=>operation('-')}>-</button>
        <button onClick={()=>operation('x')}>x</button>
        <button onClick={()=>operation('/')}>/</button>

        {output && <div>{output}</div>}
    </div>
  )
}

export default calc