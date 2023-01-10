import React, { useContext } from "react";
import ContactContext from "../context/ContactContext";

const ContactItem = (props) => {
  // context call
  const context = useContext(ContactContext);
  const {deleteContact}= context;
  const { contacts,updateContact } = props;

  return (
    // card for contact
    <div>
      <div className="card mx-3 my-2 cardStyle text-center d-flex flex-row">
        <div className="card-body ">
          <h5 className="card-title">{contacts.name}</h5>
          <h6 className="card-subtitle mb-2 my-2">
            <i className="fa fa-phone" aria-hidden="true"></i> {contacts.phone}
          </h6>
          <h6 className="card-subtitle mb-2 ">
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            {contacts.email}
          </h6>
          <button className="mx-2 btn btn-warning" onClick={()=>{updateContact(contacts)}}>
            Edit
          </button>
          <button className="mx-2 btn btn-danger" onClick={()=>{deleteContact(contacts.id)}}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
