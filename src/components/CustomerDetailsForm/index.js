import React, { Component } from 'react';
import './CustomerDetailsForm.css';

class CustomerDetailsForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content card-application">
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
                <select>
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
              <input className="input" type="text" placeholder="First Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="email" placeholder="Last Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Birth</label>
            <div className="control">
              <input className="input" type="date" placeholder="Annual Income"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Annual Income</label>
            <div className="control">
              <input className="input" type="email" placeholder="Annual Income"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Employment Status</label>
            <div className="control has-text-centered">
              <div className="select">
                <select>
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
              <input className="input" type="email" placeholder="House Number"/>
            </div>
          </div>
        </div>
        <footer className="card-footer">
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

export default CustomerDetailsForm;