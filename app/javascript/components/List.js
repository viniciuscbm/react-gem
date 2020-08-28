import React from "react"
import Car from "./Car"

class List extends React.Component {
  render(){
    let cars = this.props.cars.map((car) => {
     return(
      <div key={car.id}>
       <Car car={car} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate}/>
       <hr></hr>
      </div>
     )
    })

    return(
     <div>
      {cars}
     </div>
    )
   }
}

export default List
