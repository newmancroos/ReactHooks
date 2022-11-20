import React, { useRef, useState } from 'react';
import Button from "./Button";
const ImperativeHandle = () => {
    //From the parent need to access child's state, without passing props using ImperativeHandle

    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
        
    );
}

export default ImperativeHandle;