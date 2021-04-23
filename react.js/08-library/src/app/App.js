import React, { useState } from 'react';
import Navbar from '../component/Navbar'


 const initialState=[
     {
         id:1,
         title:"Sungan Kuluch",
         price:120,
         content:"lorem hlksjdfkjkh;ukmkj jhliu4irp",
         img:"https://kitapp.as.kg/wp-content/uploads/2020/11/106779776_141015994308626_1798602639614172740_o-e1605243649583.jpg"
     },
     {
        id:1,
        title:"Sungan Kuluch",
        price:120,
        content:"кызыктуу китептер",
        img:"https://kitapp.as.kg/wp-content/uploads/2020/11/106779776_141015994308626_1798602639614172740_o-e1605243649583.jpg"
    },
    {
        id:1,
        title:"Эрте келген Турналар",
        price:120,
        content:"кызыктуу китептер",
        img:"http://i.mycdn.me/i?r=AEHujHvw2RjEbemUCNEorZbxYpb_p_9AcN2FmGik64KrkWmHukKQGwb-JbW28DZGbGt7Zi9s0CiBOSDmbngC-I-k&fn=external_8"
    },
    {
        id:1,
        title:"Гулсарат",
        price:120,
        content:"кызыктуу китептер",
        img:"https://kitapp.as.kg/wp-content/uploads/2020/11/106779776_141015994308626_1798602639614172740_o-e1605243649583.jpg"
    },
 ]

const App = (props) => {
    const [books,setBooks]= useState(initialState)
    return (
        <div>
            <header>
            <Navbar/>
            </header>
            <main>
             <div className="container border shadow-sm rounded pb-4">
            <h1>Books</h1>
            <div className="row">

                {books.map((item)=>(
                     <div className="col-3">
                    <div className="card books-item">
                        <img className="card-img-top" src={item.img} alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="card=text">Price :{item.price}c</p>
                        </div>
                    </div>
                </div>

                ))}
            
            </div>
            </div>
            </main>
        </div>
    );
};

export default App;