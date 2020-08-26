import React from 'react';
import './App.css';
const App = () => {
    return(
        <div className="container">
            <h1>JuroComposto.net</h1>
            <div className="calculator">
                <div className="input">
                    <label htmlFor="initial_value">Aporte Inicial</label>
                    <input type="number" id="initial_value" className="initial_value"/>
                </div>
            </div>
        </div>
    )
}

export default App;