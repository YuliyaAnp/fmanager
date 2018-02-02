import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            transactions:
                [
                    {Sum: 10, Description: "Description1"},
                    {Sum: 20, Description: "Description2"}
                ]
        };
    }

    render() {
      return (
          <div>
              <div>
                <TableOfTransactions
                transactions = {this.state.transactions}/>
            </div>
            <div>
                <AddTransaction />
            </div>
          </div>
          );
  }
}

App.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        sum: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })),
}



class AddTransaction extends Component {
    render() {
        return(
                <button onClick={() => {this.SetState()}}>Add Transaction</button>
        );
    }
}

class TableOfTransactions extends Component {

    renderTransaction(i)
    {
        return (
            <tr>
                <td>{i+1}</td>
                <td>{this.props.transactions[i].Sum}</td>
                <td>{this.props.transactions[i].Description}</td>
            </tr>
        );

    }

    render() {
        return (
            <div className="transactions-table">
                <h1>Transactions</h1>
                <table>
                    <tr>
                        <th style={{"width" : "20%"}}>No</th>
                        <th style={{"width" : "30%"}}>Sum</th>
                        <th style={{"width" : "50%"}}>Description</th>
                    </tr>
                    {this.renderTransaction(0)}
                    {this.renderTransaction(1)}
                </table>
            </div>
        )
    }
}

export default App;
