import React from 'react';
import Form from './form/Form.js';
import Filter from './filter/Filter';
import { connect } from 'react-redux';
import Container from './container/Container';
import ContactsList from './contactList/ContactList';
import contactOperations from '../redux/phoneBook/phoneBook-operations';
import ContactsListItem from './contactList/contactListItem/ContactListItem';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <Container>
        <h1>PhoneBook</h1>
        <Form />

        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList>
            <ContactsListItem />
          </ContactsList>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperations.fetchContact()),
});
export default connect(null, mapDispatchToProps)(App);
