import React, { Component } from 'react';

class CounterClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementhandle = () => {
        if (this.state.count < 10) { 
            this.setState({ count: this.state.count + 1 });
        }
    }

    decrementhandle = () => {
        if (this.state.count > 0) { 
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.incrementhandle}>Increment</button>
                &nbsp;&nbsp;{this.state.count}&nbsp;&nbsp;
                <button type="button" onClick={this.decrementhandle}>Decrement</button>
            </div>
        );
    }
}

export default CounterClassComp;
