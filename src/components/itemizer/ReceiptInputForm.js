import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-16-bootstrap-date-picker';
import { ControlLabel, Button } from 'react-bootstrap';
import * as actions from 'actions';
import FieldGroup from 'components/itemizer/FieldGroup'
import './userInputForm.css';

class ReceiptInputForm extends Component {
  constructor(props) {
    super(props)

    let value = new Date().toISOString();
    this.state = {
      companyName: '',
      price: '',
      date: value,
    };
  }

  handleCompanyNameChange = event => {
    this.setState({ companyName: event.target.value });
  };

  handlePriceChange = event => {
    this.setState({ price: event.target.value });
  };

  handleDateChange = event => {
    this.setState({ date: event });
  };



  handleSubmit = event => {
    event.preventDefault();

    let receipt = {
      companyName: this.state.companyName,
      price: this.state.price,
      date: this.state.date,
    }
    this.props.addReceipt(receipt);
    this.props.onHide();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handleCompanyNameChange}
            value={this.state.companyName}
            label="Name"
            placeholder="Company Name"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handlePriceChange}
            value={this.state.price}
            label="Price"
            placeholder="Price"
          />
          <div className="field-dates">
            <ControlLabel>Start Date</ControlLabel>
            <DatePicker
              id="receipt-datepicker"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

//temporarliy connect the component to wire everything up...will be moved to it's container
export default connect(null, actions)(ReceiptInputForm);
