
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstnum : 0,
      Secondnum : 0,
      Result : '',
    };
  }

  inputHandler = (event) => {
    const { Firstnum, Secondnum, Result } = this.state;
    if(event.target.value === "+") {
      this.setState({Result : Firstnum + Secondnum});
    }
    if(event.target.value === "-") {
        this.setState({Result : Firstnum - Secondnum});
    }
    if(event.target.value === "*") {
        this.setState({Result : Firstnum * Secondnum});
    }
    if(event.target.value === "/") {
        this.setState({Result : Firstnum / Secondnum});
    }
    if(event.target.value === "^") {
        this.setState({Result : Math.pow(Firstnum, Secondnum)});
    }
   
  }

  render() {
    const { Firstnum, Secondnum, Result } = this.state;
    return (
    <div class="center">
    <br/><br/>
    <h1>Calculator</h1>
    <hr/>
      <label>Firstnumber:</label><input type="number" placeholder="input number here..."onChange={event => this.setState({ Firstnum: Number(event.target.value) })}></input>
      &nbsp; &nbsp;
      <label>Secondnumber:</label> <input type="number" placeholder="input number here..." onChange={event => this.setState({Secondnum: Number(event.target.value) })}></input>
      <div>
        <br/>
          <label>Operations: </label>
          <br/><br/>
          <button value="+" onClick={event => this.inputHandler(event)}>+</button>&nbsp;&nbsp;
          <button value="-" onClick={event => this.inputHandler(event)}>-</button>&nbsp; &nbsp;
          <button value="*" onClick={event => this.inputHandler(event)}>*</button>&nbsp; &nbsp;
          <button value="/" onClick={event => this.inputHandler(event)}>/</button>&nbsp; &nbsp;
          <button value="^" onClick={event => this.inputHandler(event)}>^</button>
       <br/><br/>
       <label>Result:</label> <h3>{this.state.Result}</h3>
      </div>     
    </div>
    );    
  }
}
export default App;

