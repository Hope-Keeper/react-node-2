import React, { Component, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import PersonalCard from "../Personal Card/personalcard";
import PersonalCard2 from "../Personal Card/personalcard2";
axios.defaults.headers.common["token"] = localStorage.getItem("token");

class Dashboard extends Component {
  state = {
    name: "",
    email: "",
  };
  componentDidMount = async () => {
    console.log("hello Dashboard");
    try {
      await fetch("http://localhost:8080/http://0.0.0.0:5000/api/user", {
        method: "GET",
        headers: {
          "Autho-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log("data :", data))
        .catch((err) => console.error("ohhhh nooo", err));
      // if (!response.ok) {
      //   console.log(response);
      //   throw new Error("Network response was not ok");
      // }

      // const data = await response.json();
    } catch (error) {
      console.log("Error:", error);
    }
  };
  handleclick = async () => {
    console.log("hello me");

    try {
      await fetch("http://localhost:8080/http://0.0.0.0:5000/api/user/me", {
        method: "GET",
        headers: {
          "Autho-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data :", data);
          this.setState({ name: data.data.name, email: data.data.email });
        })
        .catch((err) => console.error("ohhhh nooo", err));
      // if (!response.ok) {
      //   console.log(response);
      //   throw new Error("Network response was not ok");
      // }

      // const data = await response.json();
    } catch (error) {
      console.log("Error:", error);
    }

    /* const result = {
      email: "sadra.horriiiiiii@gmail.com",
      name: "sadra",
      password: "Sh@13801018",
    };
    const res = await axios.post(
      "http://0.0.0.0:5000/api/auth/register",
      result
    );
    console.log(res);*/
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Dashbooard</h1>
          <button onClick={this.handleclick}>🖤ME🤍</button>
          {this.state.name.length != 0 ? (
            <PersonalCard2 name={this.state.name} email={this.state.email} />
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

// const Dashboard = () => {
//   /* useEffect(async () => {
//     console.log("dashboard");
// //const response= await axios.get('https://reqres.in/api/unknown')
// //  console.log(response.data);
//   }, []);*/

//   return (
//     <>
//       <h1>dashboard</h1>
//     </>
//   );
//};

export default Dashboard;
