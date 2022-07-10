import React from 'react';
import Select from 'react-select'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  }

  render() {
    return (
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">

        <h1> Login </h1>

        <form onSubmit={this.handleSubmit} className="d-flex flex-column">
          <div className='form-group my-2'>
            <label>
              Username
              <input 
                type="text" 
                name="username" 
                className='form-control' 
                value={this.state.username} 
                onChange={this.handleInputChange}
                required />
            </label>
          </div>

          <div className='form-group my-2'>
            <label>
              Password
              <input 
                type="password" 
                name="password" 
                className='form-control' 
                value={this.state.password} 
                onChange={this.handleInputChange}
                required />
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-success my-2">
              Log in
          </button>

        </form>

        <div className="d-flex flex-row align-items-center justify-content-center mt-4">
          <span className='text-muted mx-2'>Don't have an account?</span>
          <button type="submit" className="btn btn-sm btn-secondary mx-2">Signup</button>
        </div>

      </div>
    );
  }
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  }

  render() {
    return (
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">

        <h1> Sign Up </h1>

        <form onSubmit={this.handleSubmit} className="d-flex flex-column">
          <div className='form-group my-2'>
            <label>
              Username
              <input 
                type="text" 
                name="username" 
                className='form-control' 
                value={this.state.username} 
                onChange={this.handleInputChange}
                required />
            </label>
          </div>

          <div className='form-group my-2'>
            <label>
              Password
              <input 
                type="password" 
                name="password" 
                className='form-control' 
                value={this.state.password} 
                onChange={this.handleInputChange}
                required />
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-success my-2">
              Sign Up
          </button>

        </form>
      </div>
    );
  }
}

const states = [
  { value: 'AK', label: 'Alaska'},
  { value: 'TX', label: 'Texas'},
  { value: 'AL', label: 'Alabama'},
  { value: 'AR', label: 'Arkansas'},
  { value: 'AZ', label: 'Arizona'},
  { value: 'CA', label: 'California'},
  { value: 'CO', label: 'Colorado'},
  { value: 'CT', label: 'Connecticut'},
  { value: 'DC', label: 'District of Columbia'},
  { value: 'DE', label: 'Delaware'},
  { value: 'FL', label: 'Florida'},
  { value: 'GA', label: 'Georgia'},
  { value: 'HI', label: 'Hawaii'},
  { value: 'IA', label: 'Iowa'},
  { value: 'ID', label: 'Idaho'},
  { value: 'IL', label: 'Illinois'},
  { value: 'IN', label: 'Indiana'},
  { value: 'KS', label: 'Kansas'},
  { value: 'KY', label: 'Kentucky'},
  { value: 'LA', label: 'Louisiana'},
  { value: 'MA', label: 'Massachusetts'},
  { value: 'MD', label: 'Maryland'},
  { value: 'ME', label: 'Maine'},
  { value: 'MI', label: 'Michigan'},
  { value: 'MN', label: 'Minnesota'},
  { value: 'MO', label: 'Missouri'},
  { value: 'MS', label: 'Mississippi'},
  { value: 'MT', label: 'Montana'},
  { value: 'NC', label: 'North Carolina'},
  { value: 'ND', label: 'North Dakota'},
  { value: 'NE', label: 'Nebraska'},
  { value: 'NH', label: 'New Hampshire'},
  { value: 'NJ', label: 'NewJersey'},
  { value: 'NM', label: 'New Mexico'},
  { value: 'NV', label: 'Nevada'},
  { value: 'NY', label: 'New York'},
  { value: 'OH', label: 'Ohio'},
  { value: 'OK', label: 'Oklahoma'},
  { value: 'OR', label: 'Oregon'},
  { value: 'PA', label: 'Pennsylvania'},
  { value: 'RI', label: 'Rhode Island'},
  { value: 'SC', label: 'South Carolina'},
  { value: 'SD', label: 'South Dakota'},
  { value: 'TN', label: 'Tennessee'},
  { value: 'TX', label: 'Texas'},
  { value: 'UT', label: 'Utah'},
  { value: 'VA', label: 'Virginia'},
  { value: 'VT', label: 'Vermont'},
  { value: 'WA', label: 'Washington'},
  { value: 'WI', label: 'Wisconsin'},
  { value: 'WV', label: 'West Virginia'},
  { value: 'WY', label: 'Wyoming'}
  ];

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  }

  render() {
    return (
      <div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">

        <h1> Client Information </h1>

        <form name="clientInfo" onSubmit={this.handleSubmit} className="d-flex flex-column">
          <div className='form-group my-2 row'>
            <label className="col-4 col-form-label">
              Full Name
            </label>
            <div className="col-8">
              <input 
                type="text" 
                name="fullName"
                maxLength="50"
                className='form-control' 
                value={this.state.fullName}
                onChange={this.handleInputChange}
                required />
            </div>
          </div>

          <div className='form-group my-2 row'>
            <label className="col-4 col-form-label">
              Address 1
            </label>
            <div className="col-8">
              <input 
                type="text" 
                name="address1" 
                maxLength="100"
                className='form-control' 
                value={this.state.address1}
                onChange={this.handleInputChange}
                required />
            </div>
          </div>

          <div className='form-group my-2 row'>
            <label className="col-4 col-form-label">
              Address 2
            </label>
            <div className="col-8">
              <input 
                type="text" 
                name="address2" 
                maxLength="100"
                className='form-control' 
                value={this.state.address2}
                onChange={this.handleInputChange}
                />
            </div>
          </div>

          <div className='form-group my-2 row'>
            <label className="col-4 col-form-label">
              City
            </label>
            <div className="col-8">
              <input 
                type="text" 
                name="city" 
                maxLength="100"
                className='form-control' 
                value={this.state.city}
                onChange={this.handleInputChange}
                required />
            </div>
          </div>

          <div className='form-group my-2 row'>
            <label className="col-4 col-form-label">
              State
            </label>
            <div className="col-8">
              <Select options={states} />
            </div>
          </div>

          <div className='form-group my-2 row'>
            <label className="col-4 col-form-label">
              Zip Code
            </label>
            <div className="col-8">
              <input 
                type="text" 
                name="zip" 
                minLength="5"
                maxLength="9"
                className='form-control' 
                value={this.state.zip}
                onChange={this.handleInputChange}
                required />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-success my-2">
              Submit
          </button>

        </form>
      </div>
    );
  }
}

export { Profile };
export { Signup };
export default Login;