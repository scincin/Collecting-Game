import React, { Component } from 'react';
import { firebaseApp } from '../firebase';


class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  signUp(){
    console.log("state :", this.state);
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
		this.setState({error: "Hata "+ error.message});
	  console.log("error", error);
		})
  }

  render() {
    return(
      <div className="form-inline">
			     <h2>SignUp</h2>
			        <div className="form-group">
								<input
									className="form-control"
									type="text"
									placeholder="email"
									onChange={event => this.setState({email: event.target.value})}
								/>
								<input
									className="form-control"
									type="password"
									placeholder="password"
									onChange={event => this.setState({password: event.target.value})}
								/>
								<button
									className="btn btn-primary"
									type="button"
									onClick={() => this.signUp}>
										Sing Up
								</button>
							</div>
							<div><label>{this.state.error}</label></div>

			</div>
    );
  }
}

export default SignUp;
