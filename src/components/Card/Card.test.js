import React from 'react';
import {shallow} from 'enzyme';
import Card from './';

const cardProps = {
  "name": "Student Life Card",
  "description": "The Student Life credit card is only available to customers with an employment status of Student.",
  "apr": 18.9,
  "balanceDurationMonths": 0,
  "purchaseDurationMonths": 6,
  "creditAvailable": 1200,
  "id": 1
};

describe('<Card />', () => {
  it('should render the component with the correct information from props', () => {
    const wrapper = shallow(<Card card={cardProps}/>);
    expect(wrapper.find('.card-header-title').text()).toEqual('Student Life Card');
    expect(wrapper.find('.description').text())
      .toEqual('The Student Life credit card is only available to customers with an employment status of Student.');
    expect(wrapper.find('.apr').text()).toEqual('APR: 18.9%');
    expect(wrapper.find('.balance').text()).toEqual('Balance Transfer Offer Duration: 0 months');
    expect(wrapper.find('.purchase').text()).toEqual('Purchase Offer Duration: 6 months');
    expect(wrapper.find('.credit').text()).toEqual('Credit Available: £1200');
  });
});
