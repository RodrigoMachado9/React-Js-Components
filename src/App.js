import React, { Component } from 'react';
import './App.css';
// import MeuComponente, {MeusComponentes} from "./components/MeuComponente";
import MeuComponente from "./components/MeuComponente";


class App extends Component {
  render() {
    // const name = 'Hello';  //acessando determinado objeto dos meus componentes;
    // aplicando determinada lógica posso alterar os componentes dinamicamente, via componente escolhido.

    //   const MeuComponentEscolhido = MeusComponentes[name];
    // const variableComponent = 'master machado!  ';

    // utilizando  { ...spread } para evitar "poluir" o componente com a passagem de diversas propriedades.  "conceito similar ao empacotamento de dicionarios do python"
    const dados = {
        nome:'rodrigo',
        sobrenome:'machado',
        profissao:'desenvolvedor'
    }


    return (
      <div className="App">
          <MeuComponente {...dados}/>
          {/*<MeuComponentEscolhido name={variableComponent}/>*/}

      </div>
    );
  }
}

export default App;
