import React from 'react'
import ContactCard from './ContactCard';
import {Link} from "react-router-dom";

function ContactList(props) {
    const deleteContactHandler = (id) => {
      props.getContactId(id)
    };


    // const contacts = [{
    //   id: "1",
    //   name: "Daniel Jones",
    //   email: "jones@gmail.com",
    //   PhoneNumber: "08067098765"
    // }]
    const displayContactList = props.contacts.map((contact) =>{
   
     return (
       <ContactCard contact = {contact} clickHandler = {deleteContactHandler}></ContactCard>
    );
    });

    return <div className='container'>
      
      <Link to ="/AddContact"> 
     <button className='ui right floated primary button'>Add Contact</button> </Link>
      <h2 >Contact List</h2>
      <div className="ui celled list">{displayContactList}</div>
    </div>
}

export default ContactList;


