import React from "react";

let total = 0;

function Display(props) {
  return (
    
      <h1 className="display">{props.total}</h1>
    
  );
};

export default Display;


// const Display = () => {
//   return (
//     <div className="display">
//       <h3>30 + 5</h3>
//       <div class="display-result">
//         <h2>35</h2>  
//       </div>
//   </div>
//   );
// };
