import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts} from "../../redux/contactsSlice";
import { selectFilterName } from "../../redux/filtersSlice";
import createPersistoid from "redux-persist/es/createPersistoid";

const ContactList=() =>{

const filter = useSelector(selectFilterName);
const contacts = useSelector(selectContacts);
// console.log (contacts); 
const filterContacts = contacts.filter((contact) => { 
  const nameIncludes = contact.name.toLowerCase().includes(filter.toLowerCase());
  const numberIncludes = typeof contact.number === 'string' && contact.number.toLowerCase().includes(filter.toLowerCase());
  return nameIncludes || numberIncludes;
});

return (
  <ul className={css.contactList}>
      {filterContacts.map((contact) => {
          return (<li className={css.contactListItem} key={contact.id}>
              <Contact name={contact.name} number={contact.number} id={contact.id} />
          </li>)
      })}
  </ul>
);
};
  export default ContactList;