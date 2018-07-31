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
      filteredUserCards: this.filterUserCards(this.props.cards)
    };
  }

  filterUserCards(cards){
    let filteredCards = [...cards];

    // filter out Student cards for non-students
    if (this.props.userInformation.employmentStatus !== 'Student'){
      filteredCards = filteredCards.filter((card) => card.id !== 1)
    }

    // filter out Liquid cards for income below £16000
    if (this.props.userInformation.annualIncome <= 16000){
      filteredCards = filteredCards.filter((card) => card.id !== 3)
    }
    return filteredCards
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
    if (this.state.filteredUserCards.length > 0) {
      for (let i = 0; i < this.state.filteredUserCards.length; i++)
      {
        allCardsArray.push(
          <div key={this.state.filteredUserCards[i].id}>
            <label className="checkbox">
              <input
                type="checkbox"
                name="question"
                className="checkbox-box"
                onChange={
                  (e) => {
                    const checked = e.currentTarget.checked;
                    this.toggleCheckBox(checked, this.state.filteredUserCards[i])
                  }
                }
              />
                {this.state.filteredUserCards[i].name}
            </label>
          </div>
        )
      }
    }

    // build the component for the array of selected cards showing their additional details
    const availableCardsArray = [];
    let totalCredit = 0;
    if (this.state.selectedCards.length > 0) {
      for (let i = 0; i < this.state.selectedCards.length; i++)
      {
        availableCardsArray.push(<Card card={this.state.selectedCards[i]} key={this.state.selectedCards[i].id} />);
        totalCredit += this.state.selectedCards[i].creditAvailable
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
              <button
                disabled={availableCardsArray.length === 0}
                className="button is-info"
                onClick={() => this.seeDetailsButton()}
              >
                see details
              </button>
            </div>
          </div>
        }
        {this.state.isMoreDetails &&
          <div className="card">
            <div className="card-content card-details">
              <p className="title">
                Total credit available £{totalCredit}
              </p>
              {availableCardsArray.length > 0 ? availableCardsArray : 'No cards available'}
              <button className="button is-warning" onClick={() => this.back()}>back</button>
            </div>
          </div>
        }
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
  back: PropTypes.func.isRequired,
  userInformation: PropTypes.shape({
    Title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    annualIncome: PropTypes.string,
    employmentStatus: PropTypes.string,
    houseNumber: PropTypes.string,
    postCode: PropTypes.string
  }).isRequired
};

export default AvailableCards;