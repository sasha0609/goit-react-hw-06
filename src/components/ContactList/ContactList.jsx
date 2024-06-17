import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ arrContacts, onDelete }) {
  return (
    <ul className={css.list}>
      {arrContacts.map((arrContact) => {
        return (
          <li className={css.item} key={arrContact.id}>
            <Contact arrContact={arrContact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
