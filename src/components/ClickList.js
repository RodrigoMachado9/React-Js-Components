import React , { Component} from 'react';



//recebendo elemento sagitário da tag app como filho.
class ClickList extends Component{
    render() {
        return (
            <div>
                <h1>Mestre</h1>
                <ul>
                    {this.props.children.map(item=>{
                        return <li>
                            {item}
                        </li>
                    })}

                </ul>
            </div>);
    }
}
export default ClickList;