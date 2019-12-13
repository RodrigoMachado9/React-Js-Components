import React, { Component } from 'react';



const myList = [
    {'id':'12345', 'nome':'rodrigo', 'idade':'24'},
    {'id':'12346', 'nome':'aioria', 'idade':'25'},
    {'id':'12347', 'nome':'aioros', 'idade':'26'},
    {'id':'12348', 'nome':'shaka', 'idade':'32'},
    {'id':'12349', 'nome':'kamus', 'idade':'40'},
    {'id':'12344', 'nome':'doku', 'idade':'80'},


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
        const list = myList.map(person => <li key={person.id}>{person.nome} - {person.idade} anos</li>);
        return(
            // utilizando a função => map / array function para 'substituir' o comando for;
            <ul>
                {list}
            </ul>
        );
    }

}



export default PeopleList;