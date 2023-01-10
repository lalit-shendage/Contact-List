import React, { useContext, useEffect, useRef, useState } from "react";
import ContactContext from "../context/ContactContext";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";

const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts, getContacts, editContact} = context;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null)

  const refClose=useRef(null)
  const [contact, setContact] = useState({ename:"", ephone:"", eemail:""});
  // update contact 
  const updateContact = (currentContact) => {
    ref.current.click();
    console.log(currentContact);
    setContact({
      ename: currentContact.name,
      ephone: currentContact.phone,
      eemail: currentContact.email,
    });
  };
 
  const submit = (e) => {
    editContact(contact.id, contact.ename, contact.eemail, contact.ephone)
    console.log("updating the note");
    e.preventDefault();
  };
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddContact />
      {/* edit contact form using bottstrap modal */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="container ">
        <form action="#" method="PUT">
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
          <button ref={refClose} type="button" className="btn btn-danger my-2 mx-2" data-bs-dismiss="modal">Close</button>
            <button
              className="btn btn-primary w-25 submit my-2 mx-2"
              type="submit"
              onClick={submit}
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
                    </div>
                </div>
            </div>
      <h2>Your Contacts</h2>
      <div className="d-flex flex-wrap">
        {contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contacts={contact}
              updateContact={updateContact}
            />
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
