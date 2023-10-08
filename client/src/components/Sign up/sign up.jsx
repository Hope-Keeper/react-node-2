import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./sign up.css";

class SingUP extends Component {
  state = {
    account: {
      email: "",
      name: "",
      password: "",
    },
    account_isValid: false,
    sending: false,
    errors: [],
    succes: [],
  };

  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    // console.log(input.name, input.value);
    this.setState({ account });
  };

  Submit = async (e) => {
    e.preventDefault();

    console.log(this.state.account);

    try {
      await fetch(
        "http://localhost:8080/http://0.0.0.0:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.account),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({ errors: [], succes: [] });
          console.log("data :", data);
          if (data.message == "validation error") {
            this.setState({ errors: data.data });
          } else if (data.message == "the user succesfully registerd") {
            this.setState({ succes: [data.message] });
          } else if (data.message == "this user already registerd") {
            this.setState({ errors: [data.message] });
          }
        })
        .catch((err) => console.error("ohhhh nooo", err));
      /*if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }*/

      // const data = await response.json();
      //  this.setState({ sending: false, errors: [] });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  render() {
    const { email, name, password } = this.state.account;
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
        <div className="body">
          <form onSubmit={this.Submit}>
            <div class="segment">
              <h1>Sign up</h1>
            </div>

            <label>
              <input
                type="text"
                placeholder="Email Address"
                onChange={this.handleChange}
                name="email"
                value={email}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="name"
                onChange={this.handleChange}
                name="name"
                value={name}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                name="password"
                value={password}
              />
            </label>
            <button class="red" type="submit" disabled={this.state.sending}>
              <i class="icon ion-md-lock"></i> Register
            </button>
          </form>
        </div>
        {this.state.succes.length !== 0 && (
          <>
            <div className="alert alert-success">
              <ul>
                {this.state.succes.map((err, i) => {
                  return (
                    <div>
                      <li key={i}>{err}</li>
                      <button type="button" class="btn btn-success">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                            Done✔
                          </NavLink>
                        </li>
                      </button>
                    </div>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </>
    );
  }
}

export default SingUP;
