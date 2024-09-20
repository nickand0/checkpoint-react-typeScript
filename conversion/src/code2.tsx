import React, { Component } from 'react';

//definiition de l'objet state et son type avec une interface
interface CounterState {
    count:number
}

//
class Counter extends Component<CounterState> { 
    state:CounterState = {
        count: 0
    }; 

    //la fonction 'increment' avec le bon type
    increment= ():void =>{
        this.setState({count:this.state.count+1})
    }

    //La méthode render retourne du JSX, typé comme un JSX.Element
    render():JSX.Element { 
        return ( 
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
                </div> 
            );
            }
} 
export default Counter;
