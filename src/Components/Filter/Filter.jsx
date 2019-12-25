import React, { Component } from 'react';
import styles from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <section>
        <input
          className={styles.Input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.handleChange}
        />
      </section>
    );
  }
}
