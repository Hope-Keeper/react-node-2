import React, { Component } from "react";
import Navbar from "./components/navbar.jsx";
import { Route, Routes } from "react-router-dom";

import Users from "./components/users.jsx";

import Login from "./components/login.jsx";

import Register from "./components/Sign up/sign up.jsx";

import Home from "./components/Home/home.jsx";
import User from "./components/user.jsx";
import NotFound from "./components/notFound.jsx";
import Dashboard from "./components/dashboard.jsx";
import Logout from "./components/logout.jsx";
import Protect from "./components/protect.jsx";

class App extends Component {
  state = { user: null };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ user: null });
      return;
    }

    const response = { data: { user: { name: "p", email: "oo" } } };
    if (!response.data.user) {
      this.setState({ user: null });
      return;
    }

    this.setState({ user: response.data.user });
  }

  render() {
    return (
      <>
        <Navbar user={this.state.user} />
        <div className="container m-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="api/users/:id" element={<User />} />
            <Route path="api/users" element={<Users />} />

            <Route path="/dashboard" element={<Protect />} />

            <Route path="api/auth/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="api/auth/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
