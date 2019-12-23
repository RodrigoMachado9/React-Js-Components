import React , { Component} from 'react';
import {Channel} from "../services/EventEmitter";


//recebendo elemento sagitário da tag app como filho.
class ClickListItem extends Component{
    static defaultProps = {
        index:0,
        handleClick: () => {}
    };

    constructor(props){
        super(props);
        this.state = {

            counter:0
        };
        this.increment = this.increment.bind(this)

    }

    increment(){
        this.setState(state => {
            return {
                counter: state.counter + 1
            }
        });
        this.props.handleClick();
        // Channel.emmit('list:')
    }

    render() {
        const {state, props}  = this;
        if(state.counter > 4){
            throw new Error('POKEMON')
        }

        return (
            <li onClick={this.increment}>
                Item { props.index} - {state.counter}
            </li>
            );
    }
}
export default ClickListItem;