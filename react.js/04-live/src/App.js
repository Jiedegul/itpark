import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Jertva extends Component{
   componentWillUnmount(){
     console.log("I died")
   }
  render(){
    return(
    <h1>I am Jertva</h1>)
  }
}

class App extends Component {
  componentDidMount(){
    console.log("I am born")
  }



  state={
    live:true,
    update:false
  }

  updateApp=()=>{
    this.setState({update:true})
  }


  updateLive=()=>{
    this.setState((state) =>{
      return {live:!state.live}
    })
  }


  componentWillUpdate(){
    console.log("I will change")
  }
  componentUpdate(){
    console.log("I was change")
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.updateApp}>
          Learn React
        </button>
        { this.state.live &&  <Jertva/> }

        <button onClick={this.updateLive}>
         Died
          
        </button>
        
      </header>
    </div>
  );
}}

export default App;
