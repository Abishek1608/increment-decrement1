import { useState } from 'react';


// function ButtonIncrement(props) {
  
//    return (
//      <button style={{backgroundColor:'green'}}onClick={props.onClickFunc}>
//      Increment
//      </button>
//    )
// }
// function ButtonDecrement(props) {
  
//   return (
//     <button style={{backgroundColor:'red'}} onClick={props.onClickFunc}>
//     Decrement
//     </button>
//   )
// }
// function Display(props) {
//   return (
//     <label>{props.message}</label>
//   )
// }
function App() {

  const [counter, setCounter] = useState(0);
  return(
    <div>
    <button onClick = { () => setCounter(counter+1)}>Increment</button>
    <p>{counter} </p>
    <button onClick = { () => setCounter(counter-1)}>Decrement</button>
    </div>
  )
//   const incrementCounter = () => setCounter(counter + 1);
//   let decrementCounter = () => setCounter(counter - 1);
//   if(counter<=1) {
//     decrementCounter = () => setCounter(0);
//   }
//   return (
//     <div> 
//       <ButtonIncrement onClickFunc={incrementCounter}/>
//       <Display message={counter}/> 
//       <ButtonDecrement onClickFunc={decrementCounter}/>
//     </div>
//   );
// const [count, setCount] = useState(0);
// return (
//   <div><center><p>{count} Items</p>
//   <button id="btn" onClick={() => setCount(count + 1)}>
//     Click me
//   </button>
//   </center>
// </div>  
// );
}


export default App;
