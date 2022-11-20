import React, {useRef} from "react";

function RefSample(){
    const inputRef = useRef(null);

    const onClick = () =>{
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };

    return (
        <div> 
            <input type="text" placeholder='Ex...' ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
         </div>
    );
}

export default RefSample;