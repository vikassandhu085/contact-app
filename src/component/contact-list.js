import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./contact-card";


const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props?.contacts?.map((c) => {
    return (
      <ContactCard
        contact={c}
        clickHandler={deleteContactHandler}
        key={c.id}
      ></ContactCard>
    );
  });
  const getSearchTerm = () => {
    props.searchContact(inputEl.current.value);
  }
  return (
    <>
      <h1>
        Contact-List
        <Link to="/add" style={{float:"right"}}>
        <button className="ui button green right" >AddContact</button>
        </Link>
      </h1>
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} type="text" placeholder="Search Contact" className="prompt" value={props.term} onChange={getSearchTerm}/>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </>
  );
};
export default ContactList;
