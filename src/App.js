import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      employees: []
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div class= "jumbotron container">
      <div className="App container">
      
      <h1 class="display-4">Sogeti </h1>
      <h3> Employee Directory </h3>
      <div className="row">
      
      {this.state.employees.map((employee, index) => {
        return (
         
          <div class="media col-12 mb-4 p-3 directory-entry">
          <img  src={employee.image} class="mr-3 directory-image" alt="..." /> 
          <div class="media-body">
            <h5 class="mt-0">{employee.name}</h5>
            
          
          </div>
        </div>
       
        )
      })
      }

      </div>
      </div>
      </div>
      
    );

  }
  
}

export default App;
