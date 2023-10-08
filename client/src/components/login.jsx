import axios from "axios";
import React from "react";
import { Component, createRef } from "react";
import Input from "./input";
import "./login.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

class Login extends Component {
  componentDidMount() {
    console.log(this.state.account);
  }
  state = {
    account: { email: "", password: "" },
    errors: [],
    sending: false,
  };

  schema = yup.object().shape({
    email: yup.string().email("invalid!!!").required(),
    password: yup.string().min(4, "pass word should be atleast 4 char!!"),
  });

  validate = async () => {
    try {
      const resultOfValidation = await this.schema.validate(
        this.state.account,
        { abortEarly: false }
      );
      return resultOfValidation;
    } catch (error) {
      console.log(error.errors);
      this.setState({ errors: error.errors });
    }
  };

  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log(input.name, input.value);
    this.setState({ account });
  };

  handleSubmite = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log("account :", this.state.account);
    console.log(result);
    if (result) {
      try {
        this.setState({ sending: true });
        const res = await axios.post(
          "http://0.0.0.0:5000/api/auth/login",
          result
        );

        /* const res = await fetch("http://0.0.0.0:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result),
        });*/

        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);

        this.setState({ sending: false, errors: [] });
        window.location = "/dashboard";
      } catch (error) {
        this.setState({ errors: ["invalid email or pass"] });
        this.setState({ sending: false });
      }
    }
  };

  render() {
    const { email, password } = this.state.account;
    return (
      <>
        {this.state.errors.length !== 0 && (
          <>
            <div className="alert alert-danger">
              <ul>
                {this.state.errors.map((err, i) => {
                  return <li key={i}>{err}</li>;
                })}
              </ul>
            </div>
          </>
        )}

        <div class="wrapper">
          <form class="form-signin" onSubmit={this.handleSubmite}>
            <h2 class="form-signin-heading">Please login</h2>
            <Input
              name="email"
              value={email}
              lable="Email Address"
              onChange={this.handleChange}
            />
            <Input
              name="password"
              value={password}
              lable="Password"
              onChange={this.handleChange}
            />

            <label class="checkbox">
              <input
                type="checkbox"
                value="remember-me"
                id="rememberMe"
                name="rememberMe"
              />
              Remember me
            </label>
            <button
              class="btn btn-lg btn-primary btn-block"
              type="submit"
              disabled={this.state.sending}
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
