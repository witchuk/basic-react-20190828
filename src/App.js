import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      result: 'TODO'
    }
    this.yyy = this.onName.bind(this)
  }
  onName(e) {
    // console.log(e.target.value)
    // this.setState({
    //   result: e.target.value
    // })
    this.name = e.target.value
  }
  doHi = (e) => {
    this.setState({
      result: 'Hello ' + this.name
    })
  }
  render() {
    return (
      // <div>Hello World</div>
      <div>
        Your name: <input type="text" onKeyUp={this.yyy}/>
        <button onClick={this.doHi}>Hi !!</button>
        <h2>{this.state.result}</h2>
      </div>
    )
  }
}

export default App;
