import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../auth.css";

import { FcGoogle } from "react-icons/fc";
import ButtonField from "../../components/Button/Button";
import Splitter from "../../components/ReuseComponents/Splitter";
import InputBox from "../../components/ReuseComponents/InputBox";
import LinkField from "../../components/ReuseComponents/LinkField";
//   InputBox,
//   ButtonField,
//   LinkField,
//   Splitter,
import ErrorMessage from "../../components/ReuseComponents/ErrorMessage";
import { createClient } from "@supabase/supabase-js";
import Preloader from "../../components/ReuseComponents/preloader";
import Load from '../assets/Load.gif';

function Signup() {
  const navigate = useNavigate();
  const [authErr, setAuthErr] = useState("");
  const [showErr, setShowErr] = useState(false);
  const location = useLocation();
const [ isLoading, setIsLoading ] = useState(false)


  const from = location.state?.from?.pathname || "/";
  const supabase = createClient(
    "https://phezxikpdsjliablknoy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZXp4aWtwZHNqbGlhYmxrbm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNjU5MzUsImV4cCI6MjAxODY0MTkzNX0.hNQpF6Uz653hsVofmmM1JYaFXjQ9U8luBdNDLLQxdLw"
  );

  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });

  const SignupWithEmailandPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const { data, error } = await supabase.auth.signUp(userValues);
    console.log(data)
    if (data.user != null) {
        setIsLoading(false)
        navigate("/registration-success");
      }
    if (error) {
        console.log(error)
        setIsLoading(false)
        setShowErr(true);
        setAuthErr(error.message);
        setTimeout(() => {
          setShowErr(false);
          setAuthErr(null);
        }, 5000);
      }
  };

  const goToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const withWithGoogle = {
    width: "99%",
    padding: "11px",
    marginTop: 30,
    background: "#fff",
    color: "#000",
    fontWeight: 100,
    fontSize: 13,
    borderRadius: 10,
    cursor: "pointer",
    border: "#bfbfbf 1px solid",
    display: "flex",
    justifyContent: "center",
  };

  const InputBoxStyle = {
    width: "94%",
    maxWidth: "",
    fontSize: 13,
    paddingLeft: "2%",
    height: 35,
    border: "none",
    borderBottom: "1px solid #000",
    padding: "5px 10px",
    outline: "none",
    outlineBottom: "3px solid #000",
    marginTop: 20,
  };

  const createAccountBtnStyle = {
    background: "none",
    border: "none",
    color: "black",
    width: "100%",
    marginTop: 15,
    cursor: "pointer",
    textDecoration: "none",
  };

  const submitBtnStyle = {
    width: "100%",
    height: 35,
    marginTop: 20,
    background: "#000",
    color: "#fff",
    fontWeight: 300,
    // borderRadius: 10,
    cursor: "pointer",
    border: "none",
  };

  const ErrorMessageStyles = {
    display: "flex",
    fontSize: "12px",
    marginTop: "15px",
    background: "#ff5858e5",
    color: "#ffffff",
    padding: "5px",
    borderRadius: "5px",
  };

  // console.log("user values", userValues);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errMessage: "Enter a valid email",
      pattern: "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$",
      required: true,
      className: "input-style",
      // style: {
      //   ...InputBoxStyle,
      // },
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errMessage: "Enter correct password",
      pattern: '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$',
      // pattern: 1234,
      required: true,
      className: "input-style",
      // style: {
      //   ...InputBoxStyle,
      // },
    },
  ];

  const setUserData = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page">
      <div
        style={
          {
            // backgroundImage: `url(${authBg})`,
          }
        }
        className="auth-headline"
      ></div>

      <div className="auth-container">
        <div className="auth-header">
          <h2> Create Mela account</h2>
          <p
            style={{
              color: "#6a6a6a",
              fontSize: "13px",
              paddingTop: "7px",
            }}
          >
            Create an account to get notification of new topics
          </p>
        </div>
        <div className="auth-form">
          <div className="continue-with-google">
            <ButtonField
              value="Log in with Google"
              name="Log in with Google"
              icon={
                <FcGoogle style={{ fontSize: "15px", marginRight: "5px" }} />
              }
              style={{
                ...withWithGoogle,
              }}
            />
          </div>

          <Splitter value="or" />

          <form onSubmit={SignupWithEmailandPassword}>
            {inputs.map((input) => (
              <InputBox
                key={input.id}
                {...input}
                className={input.className}
                value={userValues[input.name]}
                inputValue={setUserData}
              />
            ))}
            {isLoading == false && (
            <ButtonField
              value="Create my account"
              style={{
                ...submitBtnStyle,
              }}
            />
           )} 

            
            {isLoading == true && (
              <Preloader
                alt="logging in"
                src={Load}
                style={{
                  width: '97%',
                  height: '26px',
                  padding: '5px',
                  top: '15px',
                  margin: '4px auto 15px',
                  backgroundColor: '#e7e7e78c',
                  position: 'relative',
                  borderRadius: '10px',
                }}
              />
            )}
          </form>
        </div>
        <div className="create-account">
          <LinkField
            onClick={goToLogin}
            name="create an account"
            style={{
              ...createAccountBtnStyle,
            }}
            value={
              <p>
                 Have an accout?
                <span style={{ color: "orange" }}> Login </span>
              </p>
            }
          />
        </div>
        {showErr === true ? (
          <ErrorMessage
            errorMessage={authErr}
            style={{ ...ErrorMessageStyles }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Signup;
