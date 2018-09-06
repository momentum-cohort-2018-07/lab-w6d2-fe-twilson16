import React, { Component } from 'react'
// import Button from './Button.js'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: '',
      history: []
    }
  }

  createHistory () {
    let display = this.state.display
    let result = eval(this.state.display)
    this.setState({history: this.state.history.concat(`${display} = ${result}`), display: result})
  }

  validOperator () {
    let display = this.state.display
    const hasAdd = display.includes('+')
    const hasMinus = display.includes('-')
    const hasDivide = display.includes('/')
    const hasMultiply = display.includes('*')
    return (hasAdd || hasMinus || hasDivide || hasMultiply ? console.log('true') : console.log('false'))
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Calculator</h1>
        </header>
        <div className='section'>
          <button className='button' id='clear' onClick={() => this.setState({display: ''})}>C</button>
          <div id='display' type='text'>{this.state.display}</div>
          <button className='button' id='seven' onClick={() => this.setState({display: this.state.display + '7'})}>7</button>
          <button className='button' id='eight' onClick={() => this.setState({display: this.state.display + '8'})}>8</button>
          <button className='button' id='nine' onClick={() => this.setState({display: this.state.display + '9'})}>9</button>
          <button className='button' type='action' id='divide' onClick={() => this.setState({display: this.state.display + '/'}, console.log(this.state))}>/</button>
          <button className='button' id='four' onClick={() => this.setState({display: this.state.display + '4'})}>4</button>
          <button className='button' id='five' onClick={() => this.setState({display: this.state.display + '5'})}>5</button>
          <button className='button' id='six' onClick={() => this.setState({display: this.state.display + '6'})}>6</button>
          <button className='button' type='action' id='multiply' onClick={() => this.setState({display: this.state.display + '*'})}>*</button>
          <button className='button' id='one' onClick={() => this.setState({display: this.state.display + '1'})}>1</button>
          <button className='button' id='two' onClick={() => this.setState({display: this.state.display + '2'})}>2</button>
          <button className='button' id='three' onClick={() => this.setState({display: this.state.display + '3'})}>3</button>
          <button className='button' type='action' id='subtract' onClick={() => this.setState({display: this.state.display + '-'})}>-</button>
          <button className='button' id='zero' onClick={() => this.setState({display: this.state.display + '0'})}>0</button>
          <button className='button' type='action' id='decimal' onClick={() => this.setState({display: this.state.display + '.'})}>.</button>
          <button className='button' id='equal' onClick={() => this.createHistory()}>=</button>
          <button className='button' type='action'id='add' onClick={() => this.setState({display: this.state.display + '+'})}>+</button>
          <div className="paper" id='history'>{this.state.history.map((h, idx) => <div key={idx}>{h}</div>)}</div>
        </div>
      </div>

    )
  }
}

export default App
