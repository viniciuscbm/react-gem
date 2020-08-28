import React from "react"
import List from './List'
import New from "./New";

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewCar = this.addNewCar.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteCar = this.deleteCar.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateCar = this.updateCar.bind(this)
  }

  handleFormSubmit(name, age){
    let body = JSON.stringify({car: {name: name, age: age} })
    fetch('/api/v1/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((car)=>{
      this.addNewCar(car)
    })
  }

  handleDelete(id){
    fetch(`/api/v1/cars/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
        this.deleteCar(id)
    })
  }

  handleUpdate(car){
    fetch(`/api/v1/cars/${car.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({car: car}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
        this.updateCar(car)
      })
  }


  addNewCar(car){ this.setState({cars: this.state.cars.concat(car)}) }

  deleteCar(id){
    let newCars = this.state.cars.filter((car) => car.id !== id)
    this.setState({cars: newCars})
  }

  updateCar(car){
    let newCars = this.state.cars.filter((f) => f.id !== car.id)
    newCars.push(car)
    this.setState({
      cars: newCars
    })
  }

  componentDidMount(){
    fetch('/api/v1/cars.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ cars: data }) });
  }

  render(){
      return(
        <div>
          <New handleFormSubmit={this.handleFormSubmit}/>
          <List cars={this.state.cars} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        </div>
      )
    }
  }

  export default Service
