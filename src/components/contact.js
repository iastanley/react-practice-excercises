import React from 'react';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  return (
    <div className="contact">
      <img src={props.photo} alt="avatar"/>
      <p className="contact-name">{props.name}</p>
      <p className="contact-address">{props.address}</p>
    </div>
  );
}

Contact.defaultProps = {
  photo: '',
  name: '',
  address: ''
}
