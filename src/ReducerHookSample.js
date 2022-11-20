import React, { useState, useReducer } from 'react';

const reducer = (state, action) =>{
    switch(action.type) {
        case "INCREMENT":
            //return {count: state.count + 1, showText: state.showText};
            return {...state,count: state.count + 1};   //Spread operator
        case "TOGGLESHOWTEXT" :
            //return {count:state.count, showText: !state.showText};
            return {...state, showText: !state.showText};
        default:
            return state;
    }
};
const ReducerHook = () => {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(false);

    //There are two evevnts are happing when we click the button, instead of using two useState we can use Reducer

    const[state, dispatch] = useReducer(reducer, {count:0, showText:true});

    return (
        <div>
            <h1>{state.count}</h1>
            <button 
                onClick={() => {
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "TOGGLESHOWTEXT"});
                }}
                >
                    Click Here
                </button>
                {state.showText && <p>This is a Text </p>}
        </div>
    );
}

export default ReducerHook;