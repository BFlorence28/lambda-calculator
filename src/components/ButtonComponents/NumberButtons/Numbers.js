import React from "react";
import { numbers } from "../../../data";
import { useState } from "react";
import NumberButton from "./NumberButton";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  const [numberState, setNumberState] = useState(numbers);

  function handleChange(yoyo) {
    console.log(yoyo)
    props.countNumbers(yoyo)
  }


  // STEP 2 - add the imported data to state


  return (
    <div className="numbersContainer">
      {numberState.map(num => (
        <NumberButton handleChange={() => handleChange(num)} key={num} num={num} />
      ))}
    </div>
  );
};

export default Numbers;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

      //  export default function Counter() {
      //   const [count, setCount] = useState(0);
      //   const changeNumber = () => {
      //     setCount(count => count + 1);
      //   };
      //   const multiNumber = () => {
      //     setCount(count => count * 5);
      //   };
      //   const resetNumber = () => {
      //     setCount(0);
      //   };