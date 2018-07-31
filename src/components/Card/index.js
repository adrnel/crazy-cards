import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {


  render() {
    console.log('this.props', this.props)
    return (
      <div className="card detailed-card" onClick={()=>{console.log('yo')}}>
        <header className="card-header">
          <p className="card-header-title">
            {this.props.card.name}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.card.description}
          </div>
        </div>
        <div className="info">
          <div>APR: {this.props.card.apr}%</div>
          <div>Balance Transfer Offer Duration: {this.props.card.balanceDurationMonths} months</div>
          <div>Purchase Offer Duration: {this.props.card.purchaseDurationMonths} months</div>
          <div>Credit Available: £{this.props.card.creditAvailable} months</div>
        </div>
      </div>
    );
  }
}


Card.propTypes = PropTypes.shape({
  name: PropTypes.string,
  description: PropTypes.string,
  apr: PropTypes.number,
  balanceDurationMonths: PropTypes.number,
  purchaseDurationMonths: PropTypes.number,
  creditAvailable: PropTypes.number,
  id: PropTypes.number,
}).isRequired;

export default Card;