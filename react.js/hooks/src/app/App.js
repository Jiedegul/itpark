import React, { useState } from 'react';

const App = () => {
    const [top,setTop]=useState(0)
    const[left,setLeft]=useState(0)
    return (
        <div>
            <div>
                <button onClick={()=>setLeft(left-5)}>Left</button>
                <button onClick={()=>setLeft(left+5)}>Right</button>
                <button onClick={()=>setTop(top-5)}>Top</button>
                <button onClick={()=>setTop(top+5)}>Down</button>
            </div>
            <div className style={{
            background:"green",
            width:"100px",
            height:"100px",
            marginTop:top+"px",
            marginLeft:left+"px"
        }}
        className="cub">

        </div>
        </div>
    );
};

export default App;