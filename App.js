import { useState } from 'react';
import { arr } from './Arr';
import ReactDOM  from 'react-dom/client';

function S({data}){
   return (<>
   <h1>{data.name}</h1>
   </>)
     
}
function Gun(){
    
  const object=[{name:'KFC'},{name:'Dominos'},{name:'mcdonald'}];
   const[res,setRes]=useState(object);
   const[dish,setDish]=useState();
   const click=()=>{
    setRes(res.filter(val=>val.name==dish))
    console.log(res);
   }
   const change=(e)=>{
     setDish(e.target.value)
   }
    
    return (<>
    <input type="text"  onChange={change}/>
    <button  onClick={click} type='submit'>search</button>
    {res?.map((val)=>(
            <h1>{val.name}</h1>
        )
    )}
  
    </>)
}

function fun(){
   return (<>
   <Gun/>  
   </>)
    
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(fun());