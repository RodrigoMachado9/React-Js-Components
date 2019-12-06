import React, { Component } from 'react';
import './App.css';
import MeuComponente, {MeusComponentes} from "./components/MeuComponente";


class App extends Component {
  render() {
    const name = 'Hello';  //acessando determinado objeto dos meus componentes;
    // aplicando determinada lógica posso alterar os componentes dinamicamente, via componente escolhido.
    const MeuComponentEscolhido = MeusComponentes[name];


    return (
      <div className="App">
          <MeuComponente/>
          <MeuComponentEscolhido/>

      </div>
    );
  }
}

export default App;
