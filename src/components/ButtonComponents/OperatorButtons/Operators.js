import React from "react";
import { operators } from "../../../data";
import { useState } from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

// STEP 2 - add the imported data to state
const Operators = () => {
  const [operatorsState, setOperatorState] = useState(operators);
  
  return (
    <div className="operatorsContainer">
      {operatorsState.map(operator => (
        <OperatorButton key={operator.char} operator={operator.char} />
      ))}
     
    </div>
  );
};

export default Operators;

 {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}