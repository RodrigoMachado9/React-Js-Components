import React, { Component } from 'react';



const myList = [
    {'nome':'rodrigo', 'idade':'24'},
    {'nome':'aioria', 'idade':'25'},
    {'nome':'aioros', 'idade':'26'},
    {'nome':'shaka', 'idade':'32'},
    {'nome':'kamus', 'idade':'40'},
    {'nome':'doku', 'idade':'80'},


];

class PeopleList extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = myList
    //
    // }

    render() {

        // const elementsList = [];
        // for (let i = 0 ; i < myList.length;  i ++ ){
        //     elementsList.push(
        //         <li>{myList[i].nome} - {myList[i].idade} anos</li>
        //     )
        //
        // }

        return(
            // utilizando a função => map / array function para 'substituir' o comando for;
            <ul>
                {myList.map(person => <li>{person.nome} - {person.idade} anos</li>)}
            </ul>
        );
    }

}



export default PeopleList;