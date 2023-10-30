import React, { Component } from "react";
import axios from "axios";
import "./home.css";

class Home extends Component {
  state = {};

  handleclick = async () => {
    console.log("hello home");
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

    /* try {
      await fetch(
        "http://localhost:8080/http://0.0.0.0:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "sadra.horriiiiiii@gmail.com",
            name: "sadra",
            password: "Sh@13801018",
          }),
        }
      )
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
    }*/
  };

  render() {
    return (
      <>
        <div className="home">
          {" "}
          <h1>Home</h1>
          <button onClick={this.handleclick}>🖤</button>
        </div>
      </>
    );
  }
}

export default Home;
