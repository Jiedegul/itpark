import React, { useState } from 'react';
 
// const App = () => {
//     // const[car,setCar]=useState ("BMV")
//     const [count, setCount] = useState(0)
//     const [color, setColor] = useState("black")


//     return (
//         <div>
//             {/* <h1>{car}</h1>
//             <button onClick={()=>{
//                 setCar("MERS")
//             // }}>MERS</button> */}


//             {/* <h1>Counter</h1>
//             <h2>{count}</h2>
//             <button onClick={
//                 ()=>{
//                     setCount(count+1)
//                 }
//             }>+</button>
//               <button onClick={
//                 ()=>{
//                     setCount(count0-1)
//                 }
//             }>-</button> */}


//             <h1>Counter</h1>
//             <h2 style={{color}}>{count}</h2>
//             <button onClick={()=>setCount(count+1)}>+</button>
//             <button onClick={()=>setCount(count-1)}>-</button>
//             <button onClick={()=>setCount(count*2)}>x*2</button>
//             <button onClick={()=>setCount(count/2)}>x/2</button>
//             <button onClick={()=>setColor("green")}>green</button>
//             <button onClick={()=>setColor("red")}>red</button>
//             <button onClick={()=>setColor("blue")}>blue</button>
//         </div>
//     );
// };

const App = () => {
    const [input, setInput] = useState("")
   


    return (
        <div>
            <h1>Calculator</h1>
            <h2>{input}</h2>
            <table>
                <tr>
                    <td><button onClick={()=>setInput(input+"+")}>+</button></td>
                    <td><button onClick={()=>setInput(input+"-")}>-</button></td>
                    <td><button onClick={()=>setInput(input+"*")}>*</button></td>
                    <td><button onClick={()=>setInput(input+"/")}>/</button></td>
                </tr> 
            </table>
            <table>
                <tr>
                    <td><button onClick={()=>setInput(input+"1")}>1</button></td>
                    <td><button onClick={()=>setInput(input+"2")}>2</button></td>
                    <td><button onClick={()=>setInput(input+"3")}>3</button></td>
                    <td><button onClick={()=>setInput(input+"4")}>4</button></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><button onClick={()=>setInput(input+"5")}>5</button></td>
                    <td><button onClick={()=>setInput(input+"6")}>6</button></td>
                    <td><button onClick={()=>setInput(input+"7")}>7</button></td>
                    <td><button onClick={()=>setInput(input+"8")}>8</button></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><button onClick={()=>setInput(input+"9")}>9</button></td>
                    <td><button onClick={()=>setInput(input+"0")}>0</button></td>
                    <td><button onClick={()=>setInput(input+"00")}>00</button></td>
                    <td><button onClick={()=>setInput(""+eval(input))}>=</button></td>
                </tr>
            </table>
            <td><button onClick={()=>setInput(input +".")}>.</button></td>
            <td><button onClick={()=>setInput("")}>C</button></td>
<td>
    <button onClick={()=> setInput(input.slice(0,input.length-1))}>
        {"<"}
    </button>
</td>
        
        </div>
    );
};

export default Calculator;