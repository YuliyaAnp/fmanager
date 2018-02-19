import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            transactions:
                [
                    {Sum: -10, Description: "Food"},
                    {Sum: 200, Description: "Income"},
                    {Sum: -30, Description: "Cinema"},
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
                <ul></ul>
                <button onClick={() => {this.setState(
                                        {transactions: [...this.state.transactions, {Sum: 100, Description: "Desc"}]
                                        })}}>Add Transaction</button>
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
            <div>
                
                <button onClick={() => {this.SetState()}}>Add Transaction</button>
            </div>
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
                    {this.props.transactions.map( (tr, index) => (this.renderTransaction(index)) )}
                </table>
            </div>
        )
    }
}

export default App;
