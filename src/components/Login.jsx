import React, { Component } from 'react';

import '../../src/App.css';
import history from '../history';
import './Form.css';
import '../../src/App';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAuthenticated:false
        }
    }

fetchUserDetails=(username,password)=>{
    let url= 'http://localhost:4000/users?username='+username+'&password'+password;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.length===1){
        this.setState({isAuthenticated:true});
        console.log(this.state.isAuthenticated);
        if(this.state.isAuthenticated===true)
        history.push("/image");
        }
        else
        alert("Username and Password is invalid");
    });
}   

    handleUserName = (value) => {
        this.setState({ username : value });
    }

    handleUserPass = (value) => {
        this.setState({ password : value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchUserDetails(this.state.username,this.state.password);
        console.log(this.state.username+"-->"+this.state.password+"-->"+this.state.isAuthenticated);
    }
    render() {
        return (
            <div>
                <form className="demoForm jumbotron container">
                    <h2>Login</h2>
                    <br />
                    <div>
                        <input type="text" required className="form-control" name="username"
                            placeholder="UserName"
                            value={this.state.username}
                            onChange={(e)=>this.handleUserName(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" autoComplete="true" className="form-control" name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(e)=>this.handleUserPass(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary button-click"  onClick={(e) => this.handleSubmit(e)}>Login</button>
                </form></div>

        )
    }
}
export default Login;