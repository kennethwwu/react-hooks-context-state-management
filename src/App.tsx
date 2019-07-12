import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './store/Store';

const App: React.FC = () => {
  const [, dispatch]:any = useContext(Store.AppContext);

  const addCount = () => {
    dispatch({type:'addOne'})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter />
        <button onClick={() => addCount()}>add one</button>
      </header>
    </div>
  );
}


const Counter = () => {
  const [state]:any = useContext(Store.AppContext);
  return (
    <>
      <span>{state.count}</span>
    </>
  )
}

export default App;
