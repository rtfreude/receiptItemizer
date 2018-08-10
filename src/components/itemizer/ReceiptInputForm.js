import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import DatePicker from 'react-16-bootstrap-date-picker';
import PropTypes from 'prop-types';
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap';
import * as actions from 'actions';
import FieldGroup from 'components/itemizer/FieldGroup'
import './userInputForm.css';

class ReceiptInputForm extends Component {
  static propTypes = {
    addReceipt: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props)

    const value = new Date().toISOString();

    this.state = {
      uid: '',
      companyName: '',
      price: '',
      date: value,
      description: '',
      category: '',
    };
  }

  componentDidMount() {
    const uid = _.uniqueId('rec_');

    this.props.editing ? this.setState({
      uid: this.props.editreceipt.uid,
      companyName: this.props.editreceipt.companyName,
      price: this.props.editreceipt.price,
      description: this.props.editreceipt.description,
      category: this.props.editreceipt.category,
    }) : this.setState({uid: uid});
  }

  handleCompanyNameChange = event => {
    this.setState({ companyName: event.target.value });
  };

  handlePriceChange = event => {
    this.setState({ price: event.target.value });
  };

  handleDateChange = event => {
    const eventFormat = moment(event).toISOString()
    this.setState({ date: eventFormat });
  };

//TODO hook this up
  handleReceiptUpload = event => {
    //this.setState({ companyName: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const receipt = {
      uid: this.state.uid,
      companyName: this.state.companyName,
      price: this.state.price,
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
    }

    !this.props.editing ? this.props.addReceipt(receipt) : this.props.updateReceipt(receipt);
    this.props.onHide();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsFile"
            type="file"
            label="Upload Receipt"
            help="TODO"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handleCompanyNameChange}
            defaultValue={this.state.companyName}
            label="Merchant"
            placeholder="Company Name"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            onChange={this.handlePriceChange}
            defaultValue={this.state.price}
            label="Price"
            placeholder="Price"
          />
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Expense Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Description of expense"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Category</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleCategoryChange}
            >
              <option value={this.state}>{this.state.category}</option>
              <option value="Meals">Meals</option>
              <option value="Travel">Travel</option>
              <option value="Office">Office</option>
              <option value="Misc">Misc</option>
            </FormControl>
          </FormGroup>
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
