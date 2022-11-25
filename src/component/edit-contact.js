import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.scss";
function EditContact(props) {
  const location = useLocation();
  const { id, name, email } = location?.state?.contact;
  const [Name, setName] = useState(name);
  const [Email, setEmail] = useState(email);
  const navigate = useNavigate();
  const Edit = () => {
    const data = {
      id: id,
      name: Name,
      email: Email,
    };
    props.editContactHandler(data);
    setName("");
    setEmail("");
    navigate("/");
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={Edit}>
        <div className="field">
          <label className="label">Name</label>
          <input type="text" name="name" placeholder="Name" value={Name} onChange={handleName} />
        </div>
        <div className="field">
          <label className="label">Email</label>
          <input type="text" name="email" placeholder="Email" value={Email} onChange={handleEmail} />
        </div>
        <button className="positive ui button">Update</button>
        <Link to="/" style={{ float: "right" }}>
          <button className="ui button blue right">Contact List</button>
        </Link>
      </form>
    </div>
  );
}

export default EditContact;
