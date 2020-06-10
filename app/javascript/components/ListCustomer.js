import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    console.log(this.props);
    const listItems = this.props.customers.map((customer) => <li key={customer.name}>{customer.name}</li>);
    return (
      <div>
        <strong>Clientes:</strong>
        { listItems }
      </div>
    );
  }
}

HelloWorld.propTypes = {
  customers: PropTypes.array
};
export default HelloWorld
