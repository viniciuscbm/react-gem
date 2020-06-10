import React from "react"
import PropTypes from "prop-types"
class ListCustomer extends React.Component {
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

ListCustomer.propTypes = {
  customers: PropTypes.array
};
export default ListCustomer
