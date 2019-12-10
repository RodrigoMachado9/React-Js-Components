import React, { Component } from 'react';
import './App.css';
// import MeuComponente, {MeusComponentes} from "./components/MeuComponente";
// import MeuComponente from "./components/MeuComponente";
// import Time from "./components/Time";
import MyButton from "./components/MyButton";
import PeopleList from "./components/PeopleList";


class App extends Component {

    componentDidMount() {

    }


    render() {
    // const name = 'Hello';  //acessando determinado objeto dos meus componentes;
    // aplicando determinada lógica posso alterar os componentes dinamicamente, via componente escolhido.

    //   const MeuComponentEscolhido = MeusComponentes[name];
    // const variableComponent = 'master machado!  ';

    // utilizando  { ...spread } para evitar "poluir" o componente com a passagem de diversas propriedades.  "conceito similar ao empacotamento de dicionarios do python"
    // const dados = {
    //     nome:'rodrigo',
    //     sobrenome:'machado',
    //     profissao:'desenvolvedor'
    // };


    return (
      <div className="App">
          <MyButton/>
          <PeopleList/>
          {/*<MeuComponente {...dados}/>*/}
          {/*<Time/>*/}
          {/*<MeuComponentEscolhido name={variableComponent}/>*/}
      </div>
    );
  }
}

export default App;
