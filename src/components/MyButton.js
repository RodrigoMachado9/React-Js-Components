import React, { Component } from 'react';



// class MyButton extends Component{
//     render() {
//
//         return(
//             <button onClick={sayHello}>Click Me</button>
//
//         );
//     }
//
//
// }

function MyButton(props) {
    function sayHello(){
        alert('Hello!!')
    }
    return(
        <button onClick={sayHello}>Click Me</button>
    )
}


export default MyButton;