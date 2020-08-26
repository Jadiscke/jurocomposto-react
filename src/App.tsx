import React, { useState } from 'react';
import './App.css';
const App = () => {
    const [initialValue,setInitialValue] = useState<number | null>(null);
    return(
        <div className="container">
            <h1>JuroComposto.net</h1>
            <div className="calculator">
                <div className="input">
                    {initialValue? 
                        <label className="valued" htmlFor="initial_value">Aporte Inicial</label>
                        :<label htmlFor="initial_value">Aporte Inicial</label>
                    } 
                    
                    <input type="number" id="initial_value"  value={initialValue? initialValue : ''}   onChange={(event)=>{setInitialValue(Number(event.target.value))}} className="initial_value"/>
                </div>


            </div>
        </div>
    );
}

export default App;