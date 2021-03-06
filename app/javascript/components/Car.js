import React from "react"
import Button from '@material-ui/core/Button';

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let age = this.age.value
      let id = this.props.car.id
      let car = {id: id, name: name, age: age}
      this.props.handleUpdate(car)
    }

    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.car.name}/>:<h3>{this.props.car.name}</h3>

    let age = this.state.editable ? <input type='text' ref={input => this.age = input} defaultValue={this.props.car.age}/>:<p>{this.props.car.age}</p>

    return(
      <div>
        {name}
        {age}
        <Button variant="contained" color="primary" onClick={() => this.handleEdit()}>{this.state.editable ? 'Atualizar' : 'Editar'} </Button>
        <Button variant="contained" color="secondary" onClick={() => this.props.handleDelete(this.props.car.id)}>Excliur</Button>
      </div>
    )
  }
}

export default Car
