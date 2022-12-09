import React, { useEffect, useState } from "react";
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Header from "./component/header.js";
import AddContact from "./component/add-contact.js";
import EditContact from "./component/edit-contact.js";
import ContactList from "./component/contact-list.js";
import ContactDetails from "./component/contactDetails.js";
import "./App.scss";

function App() {
  const [ contacts, setContacts] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ result, setResult ] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = async (contact) => {
    const uniqueId = Date.now();
    const postData = {
      id:uniqueId,
      ...contact
    }
    setContacts([...contacts,postData]);
    alert(" Contact added Successfully !!");
    
  };

  const editContactHandler = (contact) => {
    const id = contact.id;
    const newContactList = contacts.map((item) => {
      return item.id === id ? {...contact} : item;
    })
    setContacts(newContactList)
  };
  
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  const searchHandler = (d) => {
    setSearch(d);
    if(search!==""){
    const newContactsList = contacts.filter((contact) => {
      return Object.values(contact).join("").toLowerCase().includes(d.toLowerCase())
    })
    setResult(newContactsList);
  }
  else
  {
    setResult(contacts);
  }
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    if(contacts?.length){
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }
  }, [contacts]);

  return (
    <div className="main">
      <div className="maindiv">
        <Router>
        <Header />
        <Routes>
          
        <Route path="/contact-app" element={<ContactList contacts={ search.length<1?contacts:result} getContactId = {removeContactHandler} term = {search} searchContact = {searchHandler}  />}  />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/edit" element={<EditContact editContactHandler={editContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId = {removeContactHandler}/> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
