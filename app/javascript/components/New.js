import React from "react"

class New extends React.Component {
  render(){
    let formFields = {}

    return(
      <form>
       <input ref={input => formFields.name = input} placeholder='Nome do carro'/>
       <input ref={input => formFields.age = input} placeholder='Ano do carro' />
       <button onClick={ () => this.props.handleFormSubmit(formFields.name.value, formFields.age.value)}>Submit</button>
      </form>
    )
   }
}

export default New
