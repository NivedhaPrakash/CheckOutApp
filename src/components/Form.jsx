import React, { Component } from 'react';

import '../../src/App.css';
import history from '../history';
import { FormErrors } from './FormErrors.jsx';
import './Form.css';
import '../../src/App';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id:1,
      username: '',
      password: '',
      confrmpasswrd:'',
      formErrors: {username: '', password: '',confrmpasswrd:''},
      usernameValid: false,
      passwordValid: false,
      confrmValid:false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let confrmValid = this.state.confrmValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.match('^[a-z]{5,}$');
        fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length>6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      case 'confrmpasswrd':
        confrmValid = value.length>6;
        fieldValidationErrors.confrmpasswrd = confrmValid ? '': 'Not Matching With Passwrod';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid,
                    confrmValid: confrmValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid && this.state.confrmValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit=(e)=>{
    this.setState({id:++this.state.id});
    console.log(this.state.id);
    e.preventDefault();
    fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        id:this.state.id,
        username:this.state.username,
        password:this.state.password,
      }),
    });
    history.push("/image");
    console.log(this.state.id+"-->"+this.state.username+"-->"+this.state.password);
  }
 render () {
   return (
  <form className="demoForm jumbotron container">
    <h2>Sign up</h2>
    <br/>
    <div>
      <FormErrors formErrors={this.state.formErrors} />
    </div>
    <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
      <input type="text" required className="form-control" name="username"
        placeholder="UserName"
        value={this.state.username}
        onChange={this.handleUserInput}  />
    </div>
    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
      <input type="password" className="form-control" name="password"
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleUserInput}  />
    </div>
    <div className={`form-group ${this.errorClass(this.state.formErrors.confrmpasswrd)}`}>
      <input type="password" className="form-control" name="confrmpasswrd"
        placeholder="Confirm Password"
        value={this.state.confrmpasswrd}
        onChange={this.handleUserInput}  />
    </div>
    <button type="submit" className="btn btn-primary button-click" disabled={!this.state.formValid} onClick={(e)=>this.handleSubmit(e)}>Sign up</button>
  </form>
   )
 }
}
export default Form;