import React, { useState } from 'react';

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Test");
    const increment = () =>
    {
        setCounter(counter + 1);
    }
    const changeText = (event) =>{
        const newValue = event.target.value;
        setInputValue(newValue)
    }
    return (
        <div>
            {counter}
            <button onClick={increment}>Increment</button> <br/><br/>
            {inputValue}
            <input type="text" placeholder='Enter somthing...' onChange={changeText} />
        </div>
    );
}

export default StateTutorial;