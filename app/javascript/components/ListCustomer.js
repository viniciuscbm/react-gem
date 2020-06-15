import React from "react"
import PropTypes from "prop-types"
import { Button, List, TableDefault, TableHeaderDefault, TableCellDefault, TableBodyDefault, TableRowDefault } from "acmesquita-ui"

class ListCustomer extends React.Component {

  render() {
    console.log(this.props);
    const listItems = this.props.customers.map((customer) => <li key={customer.name}>{customer.name}</li>);
    return (
      <div>
        <strong>Clientes:</strong>
        {listItems}
        <Button onClick={() => { alert('hello') }}>Teste</Button>
        <List
          data={[
            'João',
            'Maria'
          ]}
        />
        <TableDefault>
          <TableHeaderDefault>
            <TableCellDefault>Nome</TableCellDefault>
            <TableCellDefault>Email</TableCellDefault>
          </TableHeaderDefault>
          <TableBodyDefault>
            {this.props.customers.map((customer) => (
              <TableRowDefault key={customer.id}>
                <TableCellDefault
                  component="th"
                  scope="row"
                >{customer.name}</TableCellDefault>
                <TableCellDefault>{customer.email}</TableCellDefault>
              </TableRowDefault>
            ))
            }
          </TableBodyDefault>
        </TableDefault>
      </div>
    );
  }
}

ListCustomer.propTypes = {
  customers: PropTypes.array
};
export default ListCustomer
