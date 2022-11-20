import logo from './logo.svg';
import './App.css';
import StateTutorial from './StateTutorial';
import ReducerHookSample from './ReducerHookSample';
import UseEffectHook from './UseEffectHookSample';
import RefSample from './RefSample';
import UseLayoutSample from './useLayoutEffectHook';
import ImperativeHandle from './ImperativeHandle';

import {UserContext} from './index'; // Method 1, Method 2
import React, {useContext} from 'react'; //Method 2


function App() {

  // Method 2
  const value1 = useContext(UserContext);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Hello World!
      </header>
      <label>--------useState---------</label>
      <StateTutorial />
      <label>--------useReducer---------</label>
      <ReducerHookSample/>
      <label>-------------------useEffect--------------</label>
      <UseEffectHook/>
      <label>-------------------RefSample---------------</label>
      <RefSample />
      <label>--------------UseLayoutSample-----------------</label>
      <UseLayoutSample />

      <label>--------------ImperativeHandle-----------------</label>
      <ImperativeHandle />

      
      <label>--------------UserContext Value-----------------</label>
      {/* Method 1 */}
      <UserContext.Consumer>
        {value => <div>Received, {value}</div>}
      </UserContext.Consumer>

      {/* Method 2 */}
      <div>Received : {value1}</div>

    </div>
 

  );
}

export default App;
