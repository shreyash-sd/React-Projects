import React,{useState} from 'react'
import './App.css';

function App() {
  
  let [variable,setVariable]= useState(0)
  // const addFunction= (variable) => {
  //   variable ++;
  //   variable =variable++;
  // }
  // function addFunction(){
  //   setVariable(variable++);
  // }
  
  // function subtractFunction(){
  //   setVariable(variable--);
  // }
  return (
   <>
   <div className="button">
   <button onClick={()=>setVariable(variable-1)}>-</button>
   <button>{variable}</button>
   <button onClick={()=>setVariable(variable+1)}>+</button>

   </div>
   </>
  );
}

export default App;
