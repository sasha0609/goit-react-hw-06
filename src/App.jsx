import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./ContactList.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "./redux/contactsSlice";
import { useEffect } from "react";
import { selectNameFilter } from "./redux/filtersSlice";

export default function App() {
  // const dispatch = useDispatch();
  // const filter = useSelector(selectNameFilter);

  // const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     initialContacts.forEach((contact) => {
  //       dispatch(addContact(contact));
  //     });
  //   }
  // }, [dispatch, contacts.length]);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.includes(filter)
  // );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
