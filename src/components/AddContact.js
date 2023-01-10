import React, { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";

const AddContact = () => {
const context=useContext(ContactContext);
const{addContact}=context;

const [contact,setContact]=useState({name:"",phone:"", email:""})
  // submit button handler
  const submit = (e) => {
    e.preventDefault();
    addContact(contact.name,contact.phone, contact.email)
  }
  const onChange=(e)=>{
    setContact({...contact, [e.target.name]:e.target.value})
  }
  return (
    // form to add contact
    <div>
      <h2 className="text-center my-3">Add Contacts</h2>
      <div className="container ">
        <form action="#" method="POST">
          <div className="form-row d-flex flex-wrap">
            <div className="col-md-4 mb-3 mx-3">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                name="name"
                placeholder="Name"
                required
                onChange={onChange}
              />
            </div>
            <div className="col-md-4 mb-3 mx-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="phone no."
                required
                onChange={onChange}
              />
            </div>
            <div className="col-md-4 mb-3 mx-3">
              <label htmlFor="username">Mail</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="mail">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="mail"
                  placeholder="email"
                  name="email"
                  required
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="text-center ">
            <button
              className="btn btn-primary w-25 submit"
              type="submit"
              onClick={submit}
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
