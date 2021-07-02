import React from 'react';
// import ContactListItem from './contactListItem/ContactListItem';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

// import { connect } from 'react-redux';
// import contactsAction from '../../redux/phoneBook/phoneBook-actions';

const ContactsList = ({ children }) => {
  return (
    <ul className={style.contactList}>
      {children}
      {/* {findContact().map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })} */}
    </ul>
  );
};

ContactsList.prototype = {
  children: PropTypes.node,
};
export default ContactsList;
