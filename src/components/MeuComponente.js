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
        const props =  this.props;
        // return (
        //     <div>
        //         <h1> Hello World, {props.name} </h1>
        //     </div>
        // );
        return (
          <ul>
              <h1>
              <li>Nome: {props.nome} </li>
              <li>Sobrenome: {props.sobrenome} </li>
              <li>Profissao: {props.profissao} </li>
              </h1>
          </ul>
        );
    }

}

// export const MeusComponentes = {
//     Hello: function (props) {
//         return(
//             <div>
//                 <h1> Hello Developer: {props.name} </h1>
//                 </div>
//         );
//
//     }
//
//
//
// };

export default  MeuComponente;

