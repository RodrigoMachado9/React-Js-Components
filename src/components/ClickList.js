import React , { Component} from 'react';
import { Channel } from '../services/EventEmitter';

// item.type  -> itera sobre os filhos e também os filhos dos filhos de um determinado elemento pai!
//recebendo elemento sagitário da tag app como filho.
class ClickList extends Component{
    constructor(props){
        super(props);
        this.state = {
            total: 0,
            hasError: false
        };
        this.setTotal = this.setTotal.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        Channel.on('listItem:click', this.setTotal);
    }

    componentWillUnmount() {
        Channel.removeEventListener('listItem:click', this.setTotal);
    }

    static getDerivedStateFromError(error){
        return  {
            hasError: true
        }

    }


    componentDidCatch(error, errorInfo) {
        // this.setState(state=>{
        //     return  {hasError:!state.hasError}
        // })
        console.log('Error')
        }

    restart(){
        this.setState({hasError:false, total: 0})
    }

    setTotal(){
        this.setState(state=>{
            return {
                total: state.total + 1
            }
        })
    }

    render() {
        const { state } = this;
        if (state.hasError){
            return <button onClick={this.restart}> Restart </button>
        }
        return (
            <div>
                Total: {state.total}
                <ul>
                    {this.props.children.map((item, index) =>{
                    return <item.type index={index} handleClick={this.setTotal}>
                        {this.props.children}
                    </item.type>
                    })}
                </ul>
            </div>);
    }
}
export default ClickList;