import React from 'react';
import {shallow} from 'enzyme';
import { spy } from 'sinon'
import AvailableCards from './';

const cardProps = [
  {
    name: 'Student Life Card',
    description: 'The Student Life credit card is only available to customers with an employment status of Student.',
    apr: 18.9,
    balanceDurationMonths: 0,
    purchaseDurationMonths: 6,
    creditAvailable: 1200,
  id: 1
  },
  {
    name: "Anywhere Card",
    description: "The anywhere card is available to anyone anywhere.",
    apr: 33.9,
    balanceDurationMonths: 0,
    purchaseDurationMonths: 0,
    creditAvailable: 300,
    id: 2
  }
];

const backSpy = spy();

const userInformationProps = {
  title: 'Mr',
  firstName: 'John',
  lastName: 'Smith',
  dateOfBirth: '01/01/2000',
  annualIncome: '20000',
  employmentStatus: 'Student',
  houseNumber: '100',
  postCode: 'E1 1AA'
};

describe('<AvailableCards />', () => {
  it('should render the component with the correct information when multiple cards are passed in', () => {
    const wrapper = shallow(<AvailableCards cards={cardProps} back={backSpy} userInformation={userInformationProps}/>);
    expect(wrapper.find('.available-card').length).toEqual(2);
    expect(wrapper.find('.title').text()).toEqual('Your Available Cards');
    expect(wrapper.find('.subtitle').text()).toEqual('Select the cards you wish to see additional details of');
    expect(wrapper.find('.available-card-check').text()).toEqual('Student Life CardAnywhere Card');
    expect(wrapper.find('.button .is-info').props().disabled).toEqual(true);
  });

  it('should render the component with the correct information when no cards are passed in', () => {
    const wrapper = shallow(<AvailableCards cards={[]} back={backSpy} userInformation={userInformationProps}/>);
    expect(wrapper.find('.available-card').length).toEqual(0);
    expect(wrapper.find('.title').text()).toEqual('Your Available Cards');
    expect(wrapper.find('.subtitle').text()).toEqual('Select the cards you wish to see additional details of');
    expect(wrapper.find('.available-card-check').text()).toEqual('No cards available');
    expect(wrapper.find('.button .is-info').props().disabled).toEqual(true);
  });

  it('should call the back function when back button is clicked', () => {
    const wrapper = shallow(<AvailableCards cards={cardProps} back={backSpy} userInformation={userInformationProps}/>);
    const backButton = (wrapper.find('.button .is-warning'));
    expect(backSpy.callCount).toEqual(0);
    backButton.simulate('click', { preventDefault() {} });
    expect(backSpy.callCount).toEqual(1);
  });
});