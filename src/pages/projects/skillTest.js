import React, { Component } from 'react'

import { Test1Data } from './Test1Data'

import Button from '@material-ui/core/Button'

class Test1 extends Component {

    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        endTest: false,
        score: 0,
        disabled: true
    }

    loadTest = () => {
        const {currentQuestion} = this.state
        this.setState(() => {
            return {
                questions: Test1Data[currentQuestion].question,
                options: Test1Data[currentQuestion].options,
                answers: Test1Data[currentQuestion].answer
            }
        })
    }

    componentDidMount() {
        this.loadTest()
    }

    handleNext = () => {
        const {userAnswer, answers, score} = this.state
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        //incrementing scores if answer is correct
        if(userAnswer === answers){
            this.setState({
                score: score + 1
            })
        }
    }
    handlePrevious = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion - 1
        })
    }
    //Updates the component
    componentDidUpdate(prevProps, prevState) {
        const {currentQuestion} = this.state
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.setState(() => {
                return{
                    disabled: false,
                    questions: Test1Data[currentQuestion].question,
                    options: Test1Data[currentQuestion].options,
                    answers: Test1Data[currentQuestion].answer
                }
            })
        } 
    }

    //Check Answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }
    handleFinish = () => {
        if(this.state.currentQuestion === Test1Data.length - 1){
            this.setState({
                endTest: true
            })
        }
    }

    render() {
        const { questions, options, currentQuestion, endTest } = this.state

        if(endTest){
            return(
                <div>
                    <h3>Test is over. Final score is {this.state.score} points.</h3>
                </div>
            )
        }
        
        return (
            <div>
                <h3>{questions}</h3>
        <span>{`Questions ${currentQuestion}/${Test1Data.length - 1}`}</span>
                {options.map(option => (
                    <Button color="primary" key={option.id} onClick={() => this.checkAnswer(option)}>{option}</Button>
                ))}
                {currentQuestion < Test1Data.length - 1 &&
                <Button color="primary" variant="contained" onClick={this.handleNext} disabled={this.state.disabled}>Next</Button>
                }
                {currentQuestion === Test1Data.length - 1 &&
                <Button color="secondary" variant="contained" onClick={this.handleFinish}>Finish</Button>
                }
                <Button color="primary" variant="contained" onClick={this.handlePrevious}>Previous</Button>

            </div>
        )
    }
}

export default Test1
