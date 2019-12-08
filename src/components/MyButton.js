import React, { Component } from 'react';


 const INITIAL_STATE = {
  isOn: true

};


class MyButton extends Component{

    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
        this.handleClick = this.handleClick.bind(this); // função bind sobrescreve o scopo atual do this.

    }


    sayHello(event){
        event.preventDefault();
        alert('Hello!!')
    }


    handleClick(){
        console.log(this);
        this.setState((state, props) => {
            return {isOn: !state.isOn};                 // altera o stado atual do isON, conforme handleClick
        })
    }

    render() {
        // const state =  this.state;
        return(
            <button onClick={this.handleClick}>{this.state.isOn ? 'Desligar': 'Ligar'}</button>
        )
    }
}

// function MyButton(props) {
//     function sayHello(){
//         alert('Hello!!')
//     }
//     return(
//         <button onClick={sayHello}>Click Me</button>
//     )
// }


export default MyButton;