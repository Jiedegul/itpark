import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import axios from "axios"



const initialState = [
    {
        id: 1,
        title: "Hello news",
        short_body: " la la la la",
        type: "sport"

    },
    {
        id: 3,
        title: "Hello news",
        short_body: " la la la la",
        type: "sport"

    },
    {
        id: 5,
        title: "Hello news",
        short_body: " la la dla dla",
        type: "game"

    },
    {
        id: 6,
        title: "Hello news",
        short_body: " la la bla bla",
        type: "home"

    }
]

const App = () => {

    const [news, setNews] = useState(initialState)
    useEffect(() => {
        axios.get("https://nurkadyrnur.pythonanywhere.com/news/").then((res) => {
            setNews(res.data.results);
        })
    }, [])
    return (
        <div className="container border shadow-sm">
            <h1 className="text center">Hello news</h1>
            <div className="row mt-5 mb-5">
                {news.map((item) => (
                    <div key={item.id} className="col-6 mt-4">
                        <Newsitem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;