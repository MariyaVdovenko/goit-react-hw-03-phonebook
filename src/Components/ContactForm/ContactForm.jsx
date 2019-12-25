import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
  <form className={styles.Form} onSubmit={handleSubmit}>
    <label className={styles.Label}>
      <span className={styles.Label__text}>Name</span>
      <input
        className={styles.Input}
        type="text"
        placeholder="Enter name"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        placeholder="Enter number 123-45-67"
        name="number"
        value={number}
        onChange={handleChange}
      />
    </label>

    <button className={styles.Button} type="submit">
      Add contact
    </button>
  </form>
);

export default ContactForm;
