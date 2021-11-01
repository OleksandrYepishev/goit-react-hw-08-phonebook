import { Toaster } from 'react-hot-toast';
import { Form } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Container } from '../../components/Container/Container';
import { useFetchContactsQuery } from '../../redux/contacts/contacts-slice';
import { Title } from './ContactsView.styled';

const ContactsView = () => {
  const { data: contacts } = useFetchContactsQuery();

  return (
    <Container>
      <Title>
        Phonebook
        <Form />
      </Title>
      {contacts && contacts.length > 0 && (
        <Title>
          Contacts
          <Filter />
          <ContactList />
        </Title>
      )}
      <Toaster position="top-right" />
    </Container>
  );
};

export default ContactsView;
