import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {


  render() {
    console.log('this.props', this.props)
    return (
      <div class="card" onclick={()=>{console.log('yo')}}>
        <header class="card-header">
          <p class="card-header-title">
            {this.props.card.name}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {this.props.card.description}
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">APR: {this.props.card.apr}</div>
          <div class="card-footer-item">APR: {this.props.card.balanceDurationMonths}</div>
          <div class="card-footer-item">APR: {this.props.card.purchaseDurationMonths}</div>
          <div class="card-footer-item">APR: {this.props.card.creditAvailable}</div>
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