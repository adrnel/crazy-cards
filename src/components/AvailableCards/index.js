import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card'
import './AvailableCards.css';

class AvailableCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      isSelected: false
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
            <label className="radio">
              <input type="checkbox" name="question"/>
              I have a bike
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
          <div>
            {availableCardsArray.length > 0 ? availableCardsArray : 'No cards available'}
            <button onClick={() => this.props.back()}>back</button>
            <button onClick={() => this.seeDetailsButton()}>see details</button>
          </div>
        }
        {this.state.isSelected &&
          <div>
            {cardsArray.length > 0 ? cardsArray : 'No cards available'}
            <button onClick={() => this.back()}>back</button>
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