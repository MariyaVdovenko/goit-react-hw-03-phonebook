import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, filterText, onDeleteContact }) => (
  <ul>
    {contacts
      .filter(contact => {
        return (
          contact.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map(contact => (
        <ContactListItem
          key={contact.id}
          onDeleteContact={onDeleteContact}
          contact={contact}
        />
      ))}
  </ul>
);

export default ContactList;
