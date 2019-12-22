import React, { Component } from 'react';
import './App.css';
// import MeuComponente, {MeusComponentes} from "./components/MeuComponente";
// import MeuComponente from "./components/MeuComponente";
// import Time from "./components/Time";
import MyButton from "./components/MyButton";
import PeopleList from "./components/PeopleList";
import ClickList from "./components/ClickList";
import ClickListItem from "./components/ClickListItem";
import MyVideo from "./components/MyVideo";

// const INITIAL_STATE = {
//     name:"Sagitário"
//
// };


class App extends Component {




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


    // ClickList elementos filhos
    return (
      <div className="App">
          <MyVideo src={"https://storage.coverr.co/videos/coverr-sunset-yoga-1572185971669?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc3MDU3MjM1fQ.V4VpPP1Lx01iFQAGXhaAa7fCOh3BI1b_lB2f7BBcrzk"}/>
          <MyButton/>
          <PeopleList/>
          <ClickList id={'cavaleiro-do-zodiaco'}>
              {/*<div>hello developers!</div>*/}
              {/*<h2>Aioros de Sagitário</h2>*/}
              <ClickListItem></ClickListItem>
              <ClickListItem></ClickListItem>
              <ClickListItem></ClickListItem>
          </ClickList>
          {/*<MeuComponente {...dados}/>*/}
          {/*<Time/>*/}
          {/*<MeuComponentEscolhido name={variableComponent}/>*/}
      </div>
    );
  }
}

export default App;
