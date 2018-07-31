import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card'
import './AvailableCards.css';

class AvailableCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      isMoreDetails: false,
      totalCredit: 0,
    };
  }

  seeDetailsButton() {
    this.setState(() => {
      return {isMoreDetails: true};
    })
  }

  back() {
    this.setState(() => {
      return {isMoreDetails: false, selectedCards: []}
    })
  }

  toggleCheckBox(isChecked, newCard) {
    if (isChecked){
      this.setState((prevState) => {
        const newSelectedCards = [ ...prevState.selectedCards ];
        newSelectedCards.push(newCard);
        return {selectedCards: newSelectedCards}
      }, () => console.log('this.state123: ', this.state))
    } else {
      this.setState((prevState) => {
        const newSelectedCards = prevState.selectedCards.filter(function( oldCard ) {
          return oldCard.id !== newCard.id;
        });
        return {selectedCards: newSelectedCards}
      }, () => console.log('this.state123: ', this.state))
    }
  }

  render() {



    // build the component for the array of cards from which the user can choose which ones they wish to see more of
    const allCardsArray = [];
    if (this.props.cards.length > 0) {
      for (let i = 0; i < this.props.cards.length; i++)
      {
        allCardsArray.push(
          <div key={this.props.cards[i].id}>
            <label className="checkbox">
              <input
                type="checkbox"
                name="question"
                className="checkbox-box"
                onChange={
                  (e) => {
                    const checked = e.currentTarget.checked;
                    this.toggleCheckBox(checked, this.props.cards[i])
                  }
                }
              />
                {this.props.cards[i].name}
            </label>
          </div>
        )
      }
    }

    // build the component for the array of selected cards showing their additional details
    const availableCardsArray = [];
    if (this.state.selectedCards.length > 0) {
      for (let i = 0; i < this.state.selectedCards.length; i++)
      {
        availableCardsArray.push(<Card card={this.state.selectedCards[i]} key={this.state.selectedCards[i].id} />)
      }
    }

    return (
      <div>
        {!this.state.isMoreDetails &&
        <div className="card">
          <div className="card-content available-cards">
            <p className="title">
              Your Available Cards
            </p>
            <p className="subtitle">
              Select the cards you wish to see additional details of
            </p>
            {allCardsArray.length > 0 ? allCardsArray : 'No cards available'}
            <button className="button is-warning" onClick={() => this.props.back()}>back</button>
            <button className="button is-info" onClick={() => this.seeDetailsButton()}>see details</button>
          </div>
        </div>
        }
        {this.state.isMoreDetails &&
        <div className="card">
          <div className="card-content card-details">
            <p className="title">
              Total credit available £{this.state.totalCredit}
            </p>
            {availableCardsArray.length > 0 ? availableCardsArray : 'No cards available'}
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