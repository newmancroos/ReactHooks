import React,{forwardRef, useImperativeHandle, useState} from 'react';

const Button = forwardRef((props, ref) =>{
    const [toggle, setToggle] = useState(false);

    //using forwardRef we can convert this parent component as reference

    useImperativeHandle(ref, () =>({
        alterToggle(){
            setToggle(!toggle);
        }
    }));
    return(
        <>
        {/* <button onClick={() => { 
            setToggle(!toggle);
        }}>
            Button From Child
        </button> */}
        <button>Button From Child</button>
        {toggle && <span> Toggle</span>}
        </>

    );

});

export default Button