import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input';
import './App.css';
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

    const [result, setResult] = useState<number | null>(null);

    return(
        <div className="container">
            <h1>JuroComposto.net</h1>
            <div className="calculator">
                <Input inputValue={initialValue} width={'100%'} label={'Aporte Inicial'} onValueChange={handleInitialValueChange} />
                <Input inputValue={monthAddValue} width={'100%'} label={'Aporte Mensal'} onValueChange={handleAddMonthValueChange} />
                <div className="double">
                    <Input 
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