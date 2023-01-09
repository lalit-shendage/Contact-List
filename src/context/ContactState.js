import React, { useState } from "react";
import ContactContext from "./ContactContext";

const ContactState = (props) => {
    const host="https://jsonplaceholder.typicode.com/users"
  const contactsInitial = []

  const [contacts, setContacts] = useState(contactsInitial);
  const getContacts=async()=>{
    const response=await fetch(`${host}`,{
        method:'GET',
    headers:{
        'Content-Type': 'application/json'
    }});
    const json=await response.json()
    setContacts(json)
  }

// Add Contact
const addContact=async (name, phone, email, street, suite, city, zipcode)=>{
    const response=await fetch(`${host}`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, phone, email, street, suite, city, zipcode})
});
 const contact=await response.json()
  setContacts(contacts.concat(contact))
};

// Delete Contact

const deleteContact=(id)=>{
    console.log("deleting the Contact "+id);
    const newContacts=contacts.filter((contact)=>{
        return contact.id!==id
    }
    )
    setContacts(newContacts)
}

// Edit Contact
const editContact=async(id, name, phone, email, street, suite, city, zipcode)=>{
    const response=await fetch(`${host}${id}`,{
        method:'PUT',
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email
          }),
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, phone, email, street, suite, city, zipcode})
    });
    const json = response.json();
    let newContact =JSON.parse(JSON.stringify(contacts));

    for (let index=0; index<contacts.length;index++){
        const element =contacts[index];
        if(element.id===id){
            element.name=name;
            element.phone=phone;
            element.email=email;
            element.address.street=street;
            element.address.suite=suite;
            element.address.city=city;
            element.address.zipcode=zipcode;
        }
    }
}

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, editContact, getContacts}}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
