import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./Loading/loadingUsers";
import { Link } from "react-router-dom";
class Users extends Component {
  state = { users: [], isloading: true };

  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    //console.log(response);
    setTimeout(() => {
      this.setState({ users: response.data.data, isloading: false });
    }, 3000);
  }

  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">
          Create
        </button>

        <div className="row">
          {this.state.isloading ? (
            <>
              {" "}
              <LoadingUsers key={1} />
              <p>Loading...</p>
            </>
          ) : (
            this.state.users.map((user, idex) => {
              return (
                <div className="col-4 text-center p-5">
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                  />
                  <Link to={`/api/users/${user.id}`}>
                    <h4>
                      {user.first_name} {user.last_name}
                    </h4>
                  </Link>

                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={() => {
                          this.handleUpdate(user);
                        }}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => {
                          this.handleDelete(user);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }

  handleCreate = async () => {
    const newUser = {
      first_name: "Anglina",
      last_name: "Julay",
      email: "Anglina.Julay@gmail.com",
      avatar:
        "https://i.pinimg.com/736x/19/46/e2/1946e2aba2138ea6a0dc777d0f2eef0e.jpg",
    };
    const response = await axios.post("https://reqres.in/api/users", newUser);
    console.log(response.data);
    this.setState({ users: [...this.state.users, newUser] });
  };

  handleUpdate = async (user) => {
    user.first_name = "updated";
    const response = await axios.put(
      `https://reqres.in/api/users/${user.id}`,
      user
    );
    console.log(response);
    const updatedUser = [...this.state.users];
    const index = updatedUser.indexOf(user);
    updatedUser[index] = { ...user };
    this.setState({ users: updatedUser });
  };
  handleDelete = async (user) => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${user.id}`
    );
    const newUsers = this.state.users.filter((item) => item.id != user.id);
    this.setState({ users: newUsers });
  };
}

export default Users;
