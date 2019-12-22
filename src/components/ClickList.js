import React , { Component} from 'react';



//recebendo elemento sagitário da tag app como filho.
class ClickList extends Component{
    render() {
        return (
            <div>
                Mestre: {this.props.children}
            </div>
        );
    }

}

export default ClickList;