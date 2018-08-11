import React, { Component } from 'react';
import { Button, Row, Col, Glyphicon } from 'react-bootstrap';
//import PropTypes from 'prop-types';
import './receiptControls.css';

class ReceiptControls extends Component {
  //TODO  need to get these set
  // static propTypes = {
  //
  // };

  render() {
    const {
      className,
      addReceipt,
      sortPriceAsc,
      sortPriceDesc,
      sortCatAsc,
      sortCatDesc,
    } = this.props;

    return (
      <div className="controls-container">
        <Row>
          <Col xs={6} md={3}>
            <div >
              <span className="control-sort-label">Sort by price</span>
              <div className="sort-buttons">
                <Button
                  bsSize="xsmall"
                  bsStyle="primary"
                  onClick={sortPriceAsc}
                >
                  <Glyphicon glyph="chevron-up" />
                </Button>
                <Button
                  bsSize="xsmall"
                  bsStyle="primary"
                  className="button-right"
                  onClick={sortPriceDesc}
                >
                  <Glyphicon glyph="chevron-down" />
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div>
              <span className="control-sort-label">Sort by categor</span>
              <div className="sort-buttons">
                <Button
                  bsSize="xsmall"
                  bsStyle="primary"
                  onClick={sortCatAsc}
                >
                  <Glyphicon glyph="chevron-up" />
                </Button>
                <Button
                  bsSize="xsmall"
                  bsStyle="primary"
                  className="button-right"
                  onClick={sortCatDesc}
                >
                  <Glyphicon glyph="chevron-down" />
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Button
              className={className}
              bsStyle="primary"
              onClick={addReceipt}>
                Add Receipt
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReceiptControls;
