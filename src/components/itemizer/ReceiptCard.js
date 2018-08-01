import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';
import receiptImage from './receipt.jpg'
import './receiptCard.css';

class ReceiptCard extends Component {
//TODO probably can just make function component
  render() {
    const {
      companyName,
      price,
      date,
      description,
      category,
    } = this.props;

    const dateFormatted = moment(date).format("MMMM Do YYYY");
    return (
      <div className="card-container">
        <Grid className="grid-container">
          <Row className="show-grid">
            <Col xs={6} md={1}>
              <img width={64} height={64} src={receiptImage} alt="thumbnail" />
            </Col>
            <Col xs={6} md={3}>
              <div className="name-cat-container">
                <span className="company">{companyName}</span>
                <span>{category}</span>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <span className="description">{description}</span>
            </Col>
            <Col xs={6} md={2}>
              <div className="price-date-container">
                <span className="price">{price}</span>
                <span>{dateFormatted}</span>
              </div>
            </Col>
            <Col xs={6} md={1}>
              <div className="button-container">
                <Button className="card-button">Edit</Button>
                <Button className="card-button delete-button">Delete</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReceiptCard;
