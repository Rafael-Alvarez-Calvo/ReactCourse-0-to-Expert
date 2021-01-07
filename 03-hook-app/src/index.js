import React from 'react';
import ReactDOM from 'react-dom';
// import { MultipleCustomHooks } from './components/Examples/MultipleCustomHooks';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';
// import { CounterApp } from './components/useState/CounterApp';
// import { HookApp } from './HookApp';
import './index.css';


ReactDOM.render(
  
    // <HookApp />,
    // <CounterApp />,
    // <CounterWithCustomHook />,
    // <SimpleForm />,
    <FormWithCustomHook />,
    // <MultipleCustomHooks />,
    document.getElementById('root')
);

