import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class New extends React.Component {
  render(){
    let formFields = {}

    return(
      <form>
        <TextField variant="standard" label="Nome do carro" inputRef={input => formFields.name = input} />
        <TextField variant="standard" label="Ano do carro" inputRef={input => formFields.age = input} />
        <Button variant="contained" color="primary" onClick={ () => this.props.handleFormSubmit(formFields.name.value, formFields.age.value)}>
          Enviar
        </Button>
      </form>
    )
   }
}

export default New
