import React, { Component }  from 'react';


const INITIAL_STATE = {
  time:0
};

class Time extends Component{
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;

        // utilizando o setState a variavel time será atualizada com um novo valor, alterando o seu stado inicial = 7
        // setTimeout(()=>{
        //     this.setState({
        //         time:5
        //     })
        // }, 1000);

        // setInterval > sera iniciado a cada 1 segundo;
        // para o setState atualizar o stado atual da variavel conforme intervalo, é necessario declarar uma função pra o setState.

    }

    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(()=>{
            this.setState(( state , props)=>{
                // console.log(this.state.time);
                return {
                    time: state.time + 1
                }
            })
        }, 1000)
    }

    // metodos do ciclo de vida do componentes... life cycle
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }

    render() {
        const state = this.state;

        return(
            <div>{state.time}</div>
        );
    }

}


export default Time;