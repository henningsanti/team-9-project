import React from 'react';

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

        <form onSubmit={this.handleSubmit} className="d-flex flex-column">
          <div className='form-group my-2 row'>
            <label className="col-auto col-form-label">
              Full Name
            </label>
            <div className="col-auto">
              <input 
                type="text" 
                name="fullName" 
                className='form-control' 
                value={this.state.fullName}
                onChange={this.handleInputChange}
                required />
            </div>
          </div>

          <div className='form-group my-2 row'>
            <label className="col-auto col-form-label">
              Address 1
            </label>
            <div className="col-auto">
              <input 
                type="text" 
                name="address1" 
                className='form-control' 
                value={this.state.address1}
                onChange={this.handleInputChange}
                required />
            </div>
          </div>

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

export { Profile };
export { Signup };
export default Login;