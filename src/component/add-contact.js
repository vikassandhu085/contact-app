import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  Add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are Mandatory !!");
      return;
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
    }
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.Add}>
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div className="field">
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <button className="positive ui button">Add</button>
          <Link to="/" style={{float:"right"}}>
        <button className="ui button blue right" >Contact List</button>
        </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
