import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import "./signupform.css"
import logo from "../../logo.png"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, firstName, lastName));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/images/following' />;
  }

  return (
    <div className="login-page-container">
      <div className="login-section-container">
      <div className="logo__wrapper">
        <img className="logo__image" src={logo} alt=""></img>    
      </div>
      <h2>Sign Up</h2>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            {/* <label>User Name</label> */}
            <input
              placeholder="Username"
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            {/* <label>Email</label> */}
            <input
              placeholder="Email"
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            {/* <label>First Name</label> */}
            <input
              placeholder="First Name"
              type='text'
              name='firstName'
              onChange={updateFirstName}
              value={firstName}
            ></input>
          </div>
          <div>
            {/* <label>Last Name</label> */}
            <input
              placeholder="Last Name"
              type='text'
              name='lastName'
              onChange={updateLastName}
              value={lastName}
            ></input>
          </div>
            {/* <label>Password</label> */}
            <input
              placeholder="Password"
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          <div>
            {/* <label>Repeat Password</label> */}
            <input
              placeholder="Repeat Password"
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className="sign-up__submit--button" type='submit'>Sign Up</button>
        </form>
        <div>
          Already have an account? <NavLink className="login-page-signup-link" to="/login">Log In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
