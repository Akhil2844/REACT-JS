import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
function App() {

  const[text,setText]=useState('');
  const[name,setName]=useState('');

   // variation 1 ->  ever render
  // useEffect(()=>{

  //   console.log("UI RENDRING DONE")
    
  //     })

  // variation 2 = first render

  // useEffect(()=>{

  //     console.log("UI RENDRING DONE")
      
  //       },[])


  //  variation 3  -> First render +  whenever dependency changes

//   useEffect(( ) =>
//     {
//       console.log("change observed")
// },[name])
   

// variation 4 -> to handle unmounting of a component \
useEffect(()=>
{
    //add event listener
  console.log("Listener Added")
    return()=>
    {
      console.log("Listener Removed")
    }

},[text])
 
  function changeHandler(event)
  {
    console.log(text);
     setText(event.target.value)
  }

  return (
    <div className="App">
          <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
