import React, { Component } from 'react';
//import styles from './App.module.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import shortId from 'shortid';

//Телефонная книга
// Возьми свое решение задания из домашней работы 2 и добавь хранение контактов
// телефонной книги в localStorage. Используй методы жизненного цикла.

// При добавлении и удалении контакта, контакты сохраняются в локальное хранилище.
// При загрузке приложения, контакты, если таковые есть, считываются из локального
// хранилища и записываются в состояние.

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  componentDidMount() {
    try {
      const contacts = localStorage.getItem('contacts');
      if (contacts) {
        const parsedContacts = JSON.parse(contacts);
        console.log(parsedContacts);

        this.setState({ contacts: parsedContacts });
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number, contacts } = this.state;
    const filr = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (filr !== undefined) {
      console.log(`${name} already exist`);
      return;
    }

    console.log(filr);

    console.log(`
    name: ${name}
    nunber: ${number} `);

    this.addContact(name, number);
  };

  addContact() {
    this.setState(prevState => ({
      name: '',
      number: '',
      contacts: [
        ...prevState.contacts,
        {
          id: shortId.generate(),
          name: prevState.name,
          number: prevState.number,
        },
      ],
    }));
  }

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, filter, number, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} />

        <ContactList
          contacts={contacts}
          filterText={filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
