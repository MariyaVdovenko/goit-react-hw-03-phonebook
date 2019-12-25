import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filterText, onDeleteContact }) => (
  <ul className={styles.list}>
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
