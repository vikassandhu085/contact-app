import React, { useEffect, useState } from "react";
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import api from "./api/contact.js";
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
  const getAllContacts = async () => {
   const response = await api.get("/contacts");
   return response.data;
  };

  const addContactHandler = async (contact) => {
    const uniqueId = Date.now();
    const postData = {
      id:uniqueId,
      ...contact
    }
    const response = await api.post("/contacts",postData)
    console.log(response,'response from post api ');
    setContacts([...contacts,response.data]);
    alert(" Contact added Successfully !!");
    
  };

  const editContactHandler = async (contact) => {
    console.log(contact,'contact');
    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log(response.data);
    const{id} = response.data;
    setContacts(contacts.map((contact)=>{
      return contact.id===id?{...response.data}:contact;
    }))
  };
  
  const removeContactHandler = async (id) => {
    await api.delete(`contacts/${id}`);
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
    const retrieveContacts = async () => {
      const allContacts = await getAllContacts();
      if(allContacts) setContacts(allContacts);
    }
    retrieveContacts();
  }, []);

  return (
    <div className="main">
      <div className="maindiv">
        <Router>
        <Header />
        <Routes>
          
        <Route path="/" element={<ContactList contacts={ search.length<1?contacts:result} getContactId = {removeContactHandler} term = {search} searchContact = {searchHandler}  />}  />
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
