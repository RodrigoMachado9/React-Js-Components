import React , { Component} from 'react';

// item.type  -> itera sobre os filhos e também os filhos dos filhos de um determinado elemento pai!
//recebendo elemento sagitário da tag app como filho.
class ClickList extends Component{
    constructor(props){
        super(props);
        this.state = {
            total: 0
        };
        this.setTotal = this.setTotal.bind(this);

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