import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {


  render() {
    console.log('this.props', this.props)
    return (
      <div className="card" onClick={()=>{console.log('yo')}}>
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
        <footer className="card-footer">
          <div className="card-footer-item">APR: {this.props.card.apr}</div>
          <div className="card-footer-item">APR: {this.props.card.balanceDurationMonths}</div>
          <div className="card-footer-item">APR: {this.props.card.purchaseDurationMonths}</div>
          <div className="card-footer-item">APR: {this.props.card.creditAvailable}</div>
        </footer>
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