import React, {useEffect, useLayoutEffect, useRef, useState } from 'react';


//useLayoutEffect will be called before useEffect, that means earlier stage of page layout
//If you want to change tehlayout before it is printed in thescreen we can use useLayoutEffect
// If you want to change the layout after printed in the screnn we can use useEffect

const useLayoutEffectHook = () => {

    const inoutRef = useRef(null);
    useLayoutEffect(()=>{
        // executed before the page render
        console.log("UseLayoutEffect");
        console.log(inoutRef.current.value);
    }, []);
    
    useEffect(()=>{
        // executed after the page render
        console.log("UseEffect")
        inoutRef.current.value="after";
    }, []); 
    return (
        <div>
            <input ref={inoutRef} value="before" style={{width:200, height:100}} /> 
        </div>
    );
}

export default useLayoutEffectHook;