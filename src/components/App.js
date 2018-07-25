import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ExpenseReport from 'components/expenseReport/ExpenseReport';
import ReceiptItemizer from 'components/itemizer/ReceiptItemizer';

class App extends Component {

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Receipt Itemizer</Link>
        </li>
        <li>
          <Link to="/expreport">Expense Report</Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/expreport" component={ExpenseReport} />
        <Route path="/" exact component={ReceiptItemizer} />
      </div>
    );
  }
}


export default App;
