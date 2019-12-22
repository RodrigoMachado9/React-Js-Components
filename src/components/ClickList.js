import React , { Component} from 'react';



//recebendo elemento sagitário da tag app como filho.
class ClickList extends Component{
    render() {
        return (
            <div>
                Mestre:
                <ul>
                    {this.props.children.map(item=>{
                    return <li key={""}>

                            <item.type prop2={this.props.id}>
                                {this.props.children}
                            </item.type>
                        </li>
                    })}

                </ul>
            </div>);
    }
}
export default ClickList;