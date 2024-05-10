import React from 'react';
// console.log(React, "<<<")
import './counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    increment = () => {
        console.log("increment is clicked")
        this.setState({ counter: this.state.counter + 1 })
    }
    decrement = () => {
        console.log("decrement is clicked")
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div className='counter'>
                <div>{this.state.counter}</div>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}

function App() {
    const [counter, setCounter] = React.useState(null)
    function increment() {
        if (!counter) {
            setCounter(1)
            return
        }
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <div>{counter}</div>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default App;