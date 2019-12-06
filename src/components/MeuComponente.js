import React, { Component }  from 'react';

// Function components ,
// Sempre deverá retornar algum elemento. como no exemplo abaixo => <h1></h1>

// function MeuComponente(){
//     return <h1>HelloWorl</h1>;
// }

// Outra forma de construir determinado componente
// const MeuComponente = () => {
//     return (
//         <div>
//         <h1>Hello_World</h1>
//         </div>)
//
// };


class MeuComponente extends Component{
    render() {
        return (
            <div>
                <h1> Hello World </h1>
            </div>
        );
    }

}

export const MeusComponentes = {

    Hello: function () {
        return(
            <div>
                <h1> Hello Developers! </h1>
                </div>
        );
        
    }



};

export default  MeuComponente;

