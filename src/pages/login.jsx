import React from "react";
import '../css/signin.css'
import InputBox from "../components/InputBox";
import { useState } from 'react';
import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css";  
import RadioButton from "../components/radioButton";


const SignIn = () => {
const [activeLogin, SetActiveLogin] = useState(true);

const [sigin, SetSign] = useState({
  firstName:'',
  lastName:'',
  email:"",
  password:'',
  confirmPassword:'',
  mobil:'',
  dob:new Date(),
  gender:'',
});

const changePage = (type)=>{
  if(type === 'login'){
    SetActiveLogin(true);
  }else{
    SetActiveLogin(false);
  }

}

const handleChange = (e)=>{
  const { name, value } = e.target;
  SetSign(prevState => ({
    ...prevState,
    [name]: value
  }));
  console.log("gender---",sigin);
}
const LoginForm = (e)=>{
  e.preventDefault()
  console.log("call login submit",sigin)
}
const SigninForm = (e)=>{
  e.preventDefault()
  console.log("call signup submit",sigin)
}
  return (
    <div className="Login_form">
     { activeLogin ? <div className="login">
      <h1>Login page</h1>
       
        <InputBox 
          type='text'
          label="User Name"
          name='email'
          placeholder="Your user name.."
          onChange={handleChange}
        />
        <InputBox 
          type='password'
          label="Password"
          name='password'
          placeholder="Your password.."
          onChange={handleChange}
        />
      <button className="center-button" type="submit" value="button" onClick={(e)=>LoginForm(e)}> login </button>

      </div>
     : <div className="signin">
        <div className="signup-form">
            <h1>Sign up page</h1>
            <InputBox 
              type='text'
              label="First Name"
              name='firstName'
              placeholder="First name.."
              onChange={handleChange}
            />
            <InputBox 
              type='text'
              label="Last Name"
              name='firstName'
              placeholder="First name.."
              onChange={handleChange}
            />
            <InputBox 
              type='text'
              label="Email"
              name='email'
              placeholder="email.."
              onChange={handleChange}
            />
            <InputBox 
              type='text'
              label="password"
              name='password'
              placeholder="password.."
              onChange={handleChange}
            />
            <InputBox 
              type='text'
              label="Confim Password"
              name='confirmPassword'
              placeholder="confirmPassword.."
              onChange={handleChange}
            />         
            <div className="marginBottom">
                <label id="Dateofbirth-label" htmlFor="Date of birth">
                  Date of birth
                </label >
                <DatePicker
                  selected={sigin.dob}
                  onChange={handleChange}
                  maxDate={new Date()}
                />
            </div>
            <div className="radio-button">
              <label id="gender-label" htmlFor="Select gender">
                  Select Gender
                </label >
                <div>
              <RadioButton
              name="gender"
              id="male" 
              value="male"
              onChange={handleChange}
              checked={sigin.gender == 'male'}
              text="Male"
              />
              <RadioButton
              name="gender"
              id="female" 
              value="female"
              onChange={handleChange}
              checked={sigin.gender == 'female'}
              text="Female"
              />
              </div>
        </div>
        </ div>
        <button className="center-button" type="submit" value="button" onClick={(e)=>SigninForm(e)}> Sign in </button>
      </div>}
        <div className="custom-link">
          {activeLogin&&<span>User does't have an account user can <a href="#" className="active" onClick={()=>changePage('signin')} ><u>
          sign in </u></a> Here</span>}
          {!activeLogin && <span>User as Already have an account means user can <a href="#" className="active" onClick={()=>changePage('login')} ><u>login</u></a> Here</span>}
        {/* <button className="center-button" type="button" onClick={()=>changePage('login')}> login </button>
        <button className="center-button" type="button" value="button" onClick={()=>changePage('signin')}> signup </button> */}
        </div>
    </div>
  );
};

export default SignIn;
