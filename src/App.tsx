import React, { useState, ChangeEvent, useEffect } from 'react';
import Input from './components/Input';
import './App.css';

interface Values {
    initial: number | null;
    monthly: number | null;
    months: number | null;
    interestRate: number | null;
}

const App = () => {
    const [initialValue,setInitialValue] = useState<number | null>(null);
    const handleInitialValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        setInitialValue(Number(event.target.value))
    }
    const [monthValue,setMonthValue] = useState<number | null>(null);
    const handleMonthValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        setMonthValue(Number(event.target.value))
    }
    const [monthAddValue,setAddMonthValue] = useState<number | null>(null);
    const handleAddMonthValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        setAddMonthValue(Number(event.target.value))
    }
    const [interestValue,setInterestValue] = useState<number | null>(null);
    const handleInterestValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        setInterestValue(Number(event.target.value))
    }
    const [values, setValues] = useState<Values>({initial: 0, monthly: 0, months: 0, interestRate: 0});
    const updateValues = (newValues: Values)=> {
        setValues(newValues);
        updateResult(values);
    }
    const [result, setResult] = useState<number | null>(null);
    const updateResult = (values: Values) => {
        if(!values.interestRate) return setResult(0);
        if(!values.months) return setResult(0);
        if (values.initial || values.monthly){
            setResult(1000);
        }
    }

    useEffect(
        ()=> {
            updateValues({initial:initialValue, monthly:monthAddValue, months:monthValue, interestRate:interestValue})
        },
    [initialValue,monthValue,monthAddValue,interestValue]);

    return(
        <div className="container">
            <h1>JuroComposto.net</h1>
            <div className="calculator">
                <Input
                    type="number"
                    min="0"
                    step="0.01" 
                    inputValue={initialValue} 
                    width={'100%'} 
                    label={'Aporte Inicial'} 
                    onValueChange={handleInitialValueChange} 
                />
                <Input inputValue={monthAddValue} width={'100%'} label={'Aporte Mensal'} onValueChange={handleAddMonthValueChange} />
                <div className="double">
                    <Input 
                        type="number"
                        inputValue={monthValue} 
                        width={'48%'} label={'Meses'} 
                        onValueChange={handleMonthValueChange} 
                    />
                    <Input 
                        inputValue={interestValue} 
                        width={'48%'} label={'Juros %'} 
                        onValueChange={handleInterestValueChange} 
                    />
                </div>
                <div className="result">
                    <span>{result}</span>
                </div>
            </div>
        </div>
    );
}

export default App;