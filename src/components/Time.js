import React, { Component }  from 'react';


const INITIAL_STATE = {
  time:7
};

class Time extends Component{
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;

        // setTimeout(()=>{
        //     this.setState({
        //         time:5
        //     })
        // }, 1000);


    }
    render() {
        const state = this.state;

        return(
            <div>{state.time}</div>
        );
    }

}


export default Time;