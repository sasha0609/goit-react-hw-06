import ContactList from "./components/ContactList/ContactList";
import initialContact from "./ContactList.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState, useEffect } from "react";

export default function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContact;
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const daleteContact = (contactId) => {
    setContact((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };
  const visibleContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList arrContacts={visibleContacts} onDelete={daleteContact} />
    </div>
  );
}
