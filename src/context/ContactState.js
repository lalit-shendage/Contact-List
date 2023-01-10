import React, { useState } from "react";
import ContactContext from "./ContactContext";

const ContactState = (props) => {
    const host="https://jsonplaceholder.typicode.com/users"
  const contactsInitial = []
// get contacts 
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
const editContact=async(id, name, phone, email)=>{
    const response=await fetch(`${host}`,{
        method:'POST',
       
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:`${id}`,
          name: `${name}`,
          email: `${email}`,
          phone: `${phone}`
        }),
        // body: JSON.stringify({name, phone, email}),
    });
    const json = response.json();
    console.log(json)


    let newContacts =JSON.parse(JSON.stringify(contacts));
// edit contact logic 
    for (let index=0; index<contacts.length;index++){
        const element =newContacts[index];
        if(element.id===id){
          newContacts[index].name=name;
          newContacts[index].phone=phone;
          newContacts[index].email=email;
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
