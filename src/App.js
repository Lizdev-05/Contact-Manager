import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import ContactList from "./Components/ContactList";
import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContact);
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="">
          <Router>
        <Header />
        {/* <Contact addContactHandler = {addContactHandler}/>
       <ContactList contacts = {contacts} getContactId={removeContactHandler}/>
       */}
     
        <Routes>
          <Route
            path="/"
           element= { (<ContactList  contacts = {contacts} getContactId={removeContactHandler}/> )} 
         exact />
          <Route
            path="/AddContact"
           element={ 
             <Contact addContactHandler = {addContactHandler}/>}
          
          />
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;
 