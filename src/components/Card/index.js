import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="card detailed-card">
        <header className="card-header">
          <p className="card-header-title">
            {this.props.card.name}
          </p>
        </header>
        <div className="card-content">
          <div className="content description">
            {this.props.card.description}
          </div>
        </div>
        <div className="info">
          <div className="content apr">APR: {this.props.card.apr}%</div>
          <div className="content balance">Balance Transfer Offer Duration: {this.props.card.balanceDurationMonths} months</div>
          <div className="content purchase">Purchase Offer Duration: {this.props.card.purchaseDurationMonths} months</div>
          <div className="content credit">Credit Available: £{this.props.card.creditAvailable}</div>
        </div>
      </div>
    );
  }
}


Card.propTypes = PropTypes.shape({
  card: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    apr: PropTypes.number,
    balanceDurationMonths: PropTypes.number,
    purchaseDurationMonths: PropTypes.number,
    creditAvailable: PropTypes.number,
    id: PropTypes.number,
  }).isRequired
}).isRequired;

export default Card;