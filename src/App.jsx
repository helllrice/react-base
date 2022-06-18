import React, { Component } from "react";
import './App.css'
import {Humans} from "./components/Humans";

class App extends  Component {
    state = {
      count: 0,
      isCounting: false,
      counter: 0,
      humans: [
          {name: 'vasil', age: 21, id: 0},
          {name: 'Maxim', age: 21, id: 1},
          {name: 'Vlad',  age: 19, id: 2}
      ]

    };

    removeHumans = (id) => {
        this.setState({
            humans: this.state.humans.filter(human => human.id !== id)
        })
    }

    handleSomething = () => {
        this.setState({

        })
    }

    componentDidMount() {
        const userCount = localStorage.getItem("timer");
        if(userCount) {
            this.setState({counter: +userCount});
        }
    }

    componentDidUpdate() {
        localStorage.setItem('timer', this.state.counter);
    }

    componentWillUnmount() {
        clearInterval(this.counterInterval);
    }

    increaseClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    decreaseClick = () => {
        this.setState({
            count: this.state.count - 1
        })
    };


    timerStart = () => {
        this.setState({isCounting: true})

        this. counterInterval = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        })
    }

    timerStop = () => {
        this.setState({isCounting: false})
        clearInterval(this.counterInterval)
    }

    timerReset = () => {
        this.setState({isCounting: false, counter: 0})
        clearInterval(this.counterInterval)
    }






    render() {
        const {humans} = this.state

        return (
            <div className="App">
                <button onClick={this.increaseClick}>+</button>
                  <p>{this.state.count}</p>
                  <button onClick={this.decreaseClick}>-</button>
                <br/>
                <h2>React Timer</h2>
                <p>{this.state.counter}</p>
                {!this.state.isCounting ? (
                    <button onClick={this.timerStart}>Start</button> ) : (
                    <button onClick={this.timerStop}>Stop</button>
                )}
                <button onClick={this.timerReset}>Reset</button>

                <h2>My brothers</h2>
                <Humans humans={humans} removeHumans={this.removeHumans}/>

            </div>
        );
    }
}

export default App;
