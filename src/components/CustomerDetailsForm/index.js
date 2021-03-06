import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomerDetailsForm.css';

class CustomerDetailsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      annualIncome: '',
      employmentStatus: '',
      houseNumber: '',
      postCode: ''
    };
  }

  render() {
    return (
      <div className="card">
        <div className="card-content customer-details">
          <p className="title">
            Card Application
          </p>
          <p className="subtitle">
            Enter your details below
          </p>
          <div className="field">
            <label className="label">Title</label>
            <div className="control has-text-centered">
              <div className="select">
                <select onChange={
                  (e) => {
                    const value = e.target.value;
                    this.setState(() => {
                      return {title: value}
                    })}
                }>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Miss</option>
                  <option>Ms</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="First Name" onChange={
                (e) => {
                  const value = e.target.value;
                  this.setState(() => {
                  return {firstName: value}
                })}
              }/>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Last Name" onChange={
                (e) => {
                  const value = e.target.value;
                  this.setState(() => {
                    return {lastName: value}
                  })}
              }/>
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Birth</label>
            <div className="control">
              <input className="input" type="date" onChange={
                (e) => {
                  const value = e.target.value;
                  this.setState(() => {
                    return {dateOfBirth: value}
                  })}
              }/>
            </div>
          </div>
          <div className="field">
            <label className="label">Annual Income</label>
            <div className="control">
              <input className="input" placeholder="Annual Income" type="number"  onChange={
                (e) => {
                  const value = e.target.value;
                  this.setState(() => {
                    return {annualIncome: value}
                  })}
              }/>
            </div>
          </div>
          <div className="field">
            <label className="label">Employment Status</label>
            <div className="control has-text-centered">
              <div className="select">
                <select onChange={
                  (e) => {
                    const value = e.target.value;
                    this.setState(() => {
                      return {employmentStatus: value}
                    })}
                }>
                  <option>Full Time Employment</option>
                  <option>Part Time Employed</option>
                  <option>Student</option>
                  <option>Unemployed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">House Number</label>
            <div className="control">
              <input className="input" type="email" placeholder="House Number" onChange={
                (e) => {
                  const value = e.target.value;
                  this.setState(() => {
                    return {houseNumber: value}
                  })}
              }/>
            </div>
          </div>
          <div className="field">
            <label className="label">Post Code</label>
            <div className="control">
              <input className="input" type="email" placeholder="Post Code" onChange={
                (e) => {
                  const value = e.target.value;
                  this.setState(() => {
                    return {postCode: value}
                  })}
              }/>
            </div>
          </div>
        </div>
        <footer className="card-footer" onClick={
          () => {
            this.props.setUserInformation(this.state);
            this.props.proceed();
          }
        }>
          <p className="card-footer-item apply-button">
            <span>
              Apply
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

CustomerDetailsForm.propTypes = {
  proceed: PropTypes.func.isRequired,
  setUserInformation: PropTypes.func.isRequired,
}

export default CustomerDetailsForm;