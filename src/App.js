import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }))
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default App;



//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React or you'll be a big loser!'
//         </a>
//       </header>
//     </div>
//   );
// }
