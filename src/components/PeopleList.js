import React, { Component } from 'react';



const myList = [
    {'id':'12345', 'name':'rodrigo', 'age':'24'},
    {'id':'12346', 'name':'aioria', 'age':'25'},
    {'id':'12347', 'name':'aioros', 'age':'26'},
    {'id':'12348', 'name':'shaka', 'age':'32'},
    {'id':'12349', 'name':'kamus', 'age':'40'},
    {'id':'12344', 'name':'doku', 'age':'80'},


];

class PeopleList extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = myList
    //
    // }

    // sayMyName(person)

    sayMyName(person){
        // console.log(person)
        alert(person.name)

    }
    render() {

        // const elementsList = [];
        // for (let i = 0 ; i < myList.length;  i ++ ){
        //     elementsList.push(
        //         <li>{myList[i].nome} - {myList[i].age} anos</li>
        //     )
        //
        // }

        // const list = myList.map(person => <li key={person.id}>{person.name} - {person.age} anos</li>);

        return(
            // utilizando a função => map / array function para 'substituir' o comando for;
            <ol>
                {/*{list}*/}
                {
                    myList.map(person => <li onClick={this.sayMyName.bind(this, person)} key={person.id}> {person.name} - {person.age} </li>)

                }
            </ol>
        );
    }

}



export default PeopleList;