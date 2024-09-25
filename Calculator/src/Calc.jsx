
import React from 'react'
import { useState } from 'react'

const Calc = () => {    
    const nums = ["1", "2", "3", "+","4", "5", "6","-", "7", "8", "9","*", "0","."];
    const [display, setDisplay]=useState('0');
    const handleSetDisplay = (value)=>{
        (display==='0') ? setDisplay(value) : 
                setDisplay((prev)=>prev+value)
    }
    const handleClearValues = () =>{
        setDisplay((prev)=>'')
    }
    const handleEval = () =>{
        try {
            const result = eval(display)
            setDisplay(result)
        } catch (error) {
            setDisplay("ERROR")
        }  
    }
    const deleteValue = () =>{
        if (display!=='0') setDisplay(display.slice(0,-1))
    }
    const handleSquareRoot = () =>{
        setDisplay(Math.sqrt(prev))
    }
  return (
    <>
    <div className='calculator'>
        <div className='display'>{display||0}</div>
        <div className='buttons'>
            <button onClick={()=>handleClearValues()}>CE</button> 
            <button onClick={()=>deleteValue()}>DEL</button>
            <button onClick={()=>handleSetDisplay('%')}>MOD</button> 
            <button onClick={()=>handleSetDisplay('/')}>÷</button> 
            {nums.map((input) => ( 
                <button key={input} 
                    onClick={() => handleSetDisplay(input)}> 
                    {input} 
                </button> 
            ))} 
            <button className='equal' onClick={()=>handleEval()}>=</button> 
        </div>
    </div>
    </>
  )
}

export default Calc