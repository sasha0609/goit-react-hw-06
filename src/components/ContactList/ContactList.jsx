import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, addContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import initialContacts from "../../ContactList.json";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    if (contacts.length === 0) {
      initialContacts.forEach((contact) => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch, contacts.length]);

  const filteredContacts = contacts.filter((contact) => {
    if (contact) {
      return contact.name.includes(filter.name);
    }
    return false;
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
