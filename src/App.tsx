import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import Input from './components/Input';
import './App.css';
import calculateReturn from './utils/calculateReturn';
interface Values {
    initialValue: number;
    monthly: number;
    months: number;
    interestRate: number;
    interestType: string;
}

const App = () => {
    const FORMAT_CONSTANT:number = 100;
    const formatValue = (eventValue: string):string => {
        const newEventValue = Math.ceil(Number(eventValue) * FORMAT_CONSTANT)/FORMAT_CONSTANT;
        return String(newEventValue)
    }
    function numberWithCommas(number:number):string {
        return number.toLocaleString()
    }
    const formatMonthValue = (eventValue: string):string => {
        const  newEventValue = Math.ceil(Number(eventValue));
        return String(newEventValue)
    }
    const [initialValue,setInitialValue] = useState<number>(0);
    const handleInitialValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        event.target.value = formatValue(event.target.value);
        setInitialValue(Number(event.target.value));

        
    }
    const [monthValue,setMonthValue] = useState<number>(0);
    const handleMonthValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        event.target.value = formatMonthValue(event.target.value);
        setMonthValue(Number(event.target.value));
    }
    const [monthAddValue,setAddMonthValue] = useState<number>(0);
    const handleAddMonthValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        event.target.value = formatValue(event.target.value);
        setAddMonthValue(Number(event.target.value));
    }
    const [interestValue,setInterestValue] = useState<number>(0);
    const handleInterestValueChange= (event:ChangeEvent<HTMLInputElement> )=> {
        event.target.value = formatValue(event.target.value);
        setInterestValue(Number(event.target.value));
    }
    const [values, setValues] = useState<Values>({initialValue: 0, monthly: 0, months: 0, interestRate: 0, interestType: 'yearly'});
    const updateValues = (newValues: Values)=> {
        setValues(newValues);
    }
    const [result, setResult] = useState<number>(0);
    const updateResult = (values: Values) => {
        if(!values.interestRate) return setResult(0);
        if(!values.months) return setResult(0);
        if (values.initialValue || values.monthly){
            const newResult = calculateReturn(values);
            setResult(Number(newResult));
        }else {
            setResult(0);
        }
    }

    const updateResultSpan = useCallback(
        ()=>{
            updateResult(values)
        },[values]
    )

    useEffect( ()=>{
        updateResultSpan();
    },[updateResultSpan])

    useEffect( ()=>{
        updateValues({...values,initialValue:initialValue,months:monthValue,monthly:monthAddValue, interestRate:interestValue});
    },[initialValue,monthAddValue,monthValue,interestValue])

    return(
        <div className="container">
            <h1>JuroComposto.net</h1>
            <div className="calculator">
                <Input
                    type={"number"}
                    min={0}
                    step={0.01} 
                    inputValue={initialValue} 
                    width={'100%'} 
                    label={'Aporte Inicial'} 
                    onValueChange={handleInitialValueChange} 
                    className={'money'}
                />
                <Input
                    type={"number"}
                    min={0}
                    step={0.01} 
                    inputValue={monthAddValue} 
                    width={'100%'} 
                    label={'Aporte Mensal'} 
                    onValueChange={handleAddMonthValueChange} 
                    className={'money'}
                />
                <div className="double">
                    <Input
                        type="number"
                        step={1}
                        min={1} 
                        inputValue={monthValue} 
                        width={'48%'} label={'Meses'} 
                        onValueChange={handleMonthValueChange} 
                        
                    />
                    <Input
                        type={"number"}
                        min={0}
                        step={0.01}  
                        inputValue={interestValue} 
                        width={'48%'} label={'Juros'} 
                        onValueChange={handleInterestValueChange} 
                        className="interest"
                    />
                </div>
                <div className="result money">
                    <span>{numberWithCommas(result)}</span>
                </div>
            </div>
        </div>
    );
}

export default App;