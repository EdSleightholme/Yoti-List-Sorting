/*jshint esversion: 6 */
import React, { Component } from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parameterState: "name",
      people: [
        {
          name: "John Sina",
          birth: "11/30/2011"
        }, {
          name: "Barcy Washington",
          birth: "09/16/1992"
        }, {
          name: "Peter Parker",
          birth: "01/16/1992"
        }, {
          name: "Jimmy Shergil",
          birth: "12/12/2001"
        }, {
          name: "Alexander Alfred",
          birth: "02/09/1891"
        }, {
          name: "Krishna Gupta",
          birth: "12/01/1982"
        }, {
          name: "Sania Mirza",
          birth: "11/30/2011"
        }, {
          name: "Lata Pathak",
          birth: "10/31/1999"
        }
      ]
    };
  }

  //takes 2 person objects and returns 1 if person1 birth is more recent than person2 birth, 0 if same , -1
  compareDates(person1, person2) {
    const dateArray1 = person1.birth.split('/')
    const dateArray2 = person2.birth.split('/')
    if (dateArray1[2] === dateArray2[2]) {
      if (dateArray1[1] === dateArray2[1]) {
        //compare days
        return dateArray1[0] > dateArray2[0] ? 1 : -1;
      } else {
        //compare months
        return dateArray1[1] > dateArray2[1] ? 1 : -1;
      }
    } else {
      //compare years
      return dateArray1[2] > dateArray2[2] ? 1 : -1;
    }
  }

  //takes 2 person objects and returns true if person1 name is greater than person2 name
  compareNames(person1, person2) {
    return person1.name > person2.name ? 1 : -1;
  }

  // method does nothing and can be removed - same with the value it changes in state
  //takes a value and load it in to this.state.parameterState
  sortByParameter(parameterState) {
    this.setState({ parameterState })
  }


  //Needs tests
  sortBy(valueToSortBy) {
    this.sortByParameter(valueToSortBy) // 
    if (valueToSortBy === "age") {
      this.setState({...this.state, people: this.state.people.sort(this.compareDates)})
    }
    if (valueToSortBy === "name") {
      this.setState({...this.state, people: this.state.people.sort(this.compareNames)})
    }

  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Radio sortBy={(value => this.sortBy(value))} />
        <Table people={this.state.people} />
      </div>
    );
  }
}

export default App;