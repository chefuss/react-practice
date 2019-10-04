import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
    const valuesArray = this.makeQuestion();
    //initial state. random numbers for the values
    //the numbers comes from the method makeQuestion.
    this.state = {
      	value1: valuesArray[0],
        value2: valuesArray[1],
      	value3: valuesArray[2],
      	proposedAnswer: valuesArray[3],
      	numQuestions: 0,
      	numCorrect: 0,
    }
  }
  //gets the values for the question
  makeQuestion = () => {
  	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return [value1, value2, value3, proposedAnswer];
  }
  //gets a new set of numbers.
  //change the initial state. Updates the state.
  getNewNumbers = newValuesArray => {
    this.setState({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    });
  };
  //changes the state of the number of questions and correct question
  //if the answer was correct checkCorrectAnwser method
  answerCorrect = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        numCorrect: currState.numCorrect + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };
  //handles the click event from the buttons
  //call the answerCorrect method to change the state of questions and correct answers
  handleAnswer = event => {
    const newValuesArray = this.makeQuestion();
    this.getNewNumbers(newValuesArray);
    const answerWasCorrect = this.ifTrue(event.target.name);
    this.answerCorrect(answerWasCorrect);
  };
  //check if the answer was correct
  //the inputs takes the true or false value from the event target.
  ifTrue(givenAnswer) {
    const {value1, value2, value3, proposedAnswer} = this.state;
    const correct = value1 + value2 + value3;
    console.log(correct);
    
    return (
      (correct === proposedAnswer && givenAnswer === 'true') ||
        (correct !== proposedAnswer && givenAnswer === 'false')
    );
  }

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
