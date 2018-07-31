import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card'
import './AvailableCards.css';

class AvailableCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      isSelected: false,
      totalCredit: 0,
    };
  }

  seeDetailsButton() {
    this.setState(() => {
      return {isSelected: true};
    })
  }

  back() {
    this.setState(() => {
      return {isSelected: false}
    })
  }

  render() {
    const availableCardsArray = [];
    const cardsArray = [];
    if (this.props.cards.length > 0) {

      for (let i = 0; i < this.props.cards.length; i++)
      {
        availableCardsArray.push(
          <div key={this.props.cards[i].id}>
            <label className="checkbox">
              <input type="checkbox" name="question" className="checkbox-box"/>
                {this.props.cards[i].name}
            </label>
          </div>
        )
      }
    }

    if (this.props.cards.length > 0) {
      for (let i = 0; i < this.props.cards.length; i++)
      {
        cardsArray.push(<Card card={this.props.cards[i]} key={this.props.cards[i].id} />)
      }
    }

    return (
      <div>
        {!this.state.isSelected &&
        <div className="card">
          <div className="card-content available-cards">
            <p className="title">
              Your Available Cards
            </p>
            <p className="subtitle">
              Select the cards you wish to see additional details of
            </p>
            {availableCardsArray.length > 0 ? availableCardsArray : 'No cards available'}
            <button className="button is-warning" onClick={() => this.props.back()}>back</button>
            <button className="button is-info" onClick={() => this.seeDetailsButton()}>see details</button>
          </div>
        </div>
        }
        {this.state.isSelected &&
        <div className="card">
          <div className="card-content card-details">
            <p className="title">
              Total credit available £{this.state.totalCredit}
            </p>
            {cardsArray.length > 0 ? cardsArray : 'No cards available'}
            <button className="button is-warning" onClick={() => this.back()}>back</button>
          </div>
        </div>}
      </div>
    );
  }
}

AvailableCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      apr: PropTypes.number,
      balanceDurationMonths: PropTypes.number,
      purchaseDurationMonths: PropTypes.number,
      creditAvailable: PropTypes.number,
      id: PropTypes.number,
    })
  ).isRequired,
  back: PropTypes.func.isRequired
};

export default AvailableCards;