import React from "react";

// const NumberButton = props => {
//   return <button className="button numberButton">{props.num}</button>;
  
// };

function NumberButton(props) {

  // const handleChange = num => {
  //   props.handleChange(num)
  // }
  return (
    <button className={props.buttonStyle} onClick={props.handleChange}>{props.num}</button>
  );
}

export default NumberButton;