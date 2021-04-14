import React, { Component } from 'react';
import MenuList from '../components/MenuList';
import Shop from '../components/Shop';

class App extends Component {
    state={

    }
    render() {
        return (
            <div>
                <h1>shop</h1>
                <Shop/>
                <MenuList/>
            </div>
        );
    }
}

export default App;