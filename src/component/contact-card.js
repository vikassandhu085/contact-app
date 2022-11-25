import React from "react";
import { Link } from "react-router-dom";
import User from "../images/imguserdef.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <>
    <div className="item" key={id}>
      <img className="ui avatar image" src={User} alt="user" />
      <div className="content">
        <Link
          to={`/contact/${id}`} state={{contact:props.contact}}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i className="trash icon" onClick={()=> props.clickHandler(id)}></i>
      <Link to="/edit" state={{contact:props.contact}} >
      <i className="edit icon"></i>
      </Link>    
    </div>
    </>
  );
};

export default ContactCard;
