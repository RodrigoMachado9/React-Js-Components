import React , { Component} from 'react';



// eslint-disable-next-line t
class ClickList extends Component{
    // eslint-disable-next-line t
    constructor(props){
        super(props);
    }



    render() {
        return (
            <div>
                Mestre: {this.props.name}
            </div>
        );
    }

}




export default ClickList;