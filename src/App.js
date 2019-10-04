import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const value1 = Math.floor(Math.random() * 100);
//const value2 = Math.floor(Math.random() * 100);
//const value3 = Math.floor(Math.random() * 100);
//const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
//const numQuestions = 0;
//const numCorrect = 0;
//const checkCorrectAnwser = () => {
  	//if the correct anwser is equal to the proposedAnswer return true
//    const correct = value1 + value2 + value3;
//    if (correct === proposedAnswer) {
//      return true
//    } else {
//      return false
//    }
    //else return false
//  };

class App extends Component {
  constructor(props) {
  	super(props);
    const valuesArray = this.makeQuestion();
    this.state = {
      	value1: valuesArray[0],
        value2: valuesArray[1],
      	value3: valuesArray[2],
      	proposedAnswer: valuesArray[3],
      	numQuestions: 0,
      	numCorrect: 0,
      	
    }
  }
  makeQuestion = () => {
  	const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }
  checkCorrectAnwser = () => {
    const correct = this.value1 + this.value2 + this.value3;
    return (correct === this.proposedAnswer) ? true : false;
  }
  getNewNumbers = newValuesArray => {
    this.setState(currState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    }));
  };

  handleAnswer = event => {
    const newValuesArray = this.makeQuestion();
    this.getNewNumbers(newValuesArray);
    const answerWasCorrect = this.ifTrue(event.target.name);
    this.handleAnswer(answerWasCorrect);
  };
  ifTrue = (givenAnswer) => {
    const {proposedAnswer} = this.state;
    const trueValue = this.checkCorrectAnwser();
    return (
      (trueValue === proposedAnswer && givenAnswer === 'true') ||
      (trueValue !== proposedAnswer && givenAnswer === 'false')
    );
  };
 
  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleAnswer} name="true">True</button>
          <button onClick={this.handleAnswer} name="false">False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
