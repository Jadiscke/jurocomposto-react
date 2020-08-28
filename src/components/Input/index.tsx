import React, { InputHTMLAttributes, ChangeEvent } from 'react'
import './index.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputValue: number | null;
    onValueChange(event: ChangeEvent<HTMLInputElement>): any;
    
}

const Input = ({label,inputValue,onValueChange, ...att } :InputProps) => {

    return(
        <div 
            className="input"
            style={{
            width: att.width
            }
            }
        >
        {inputValue? 
            <label 
                className="valued" 
                htmlFor="inputValue"
            >{label}</label>
            :<label 
                htmlFor="inputValue"
                    
            >{label}</label>
        } 
                    
        <input 
            type={att.type}
            min={att.min}
            step={att.step}
            id="inputValue" 
            value={inputValue? inputValue : ''} onChange={ onValueChange } className="initial_inputValue"/>
    </div>
    )
   
}


export default Input;