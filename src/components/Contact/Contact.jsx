import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({id, name, number}) {
  const dispatch = useDispatch();
  
   const onDelete = (contactId) => {
     const action = deleteContact(contactId);
     dispatch(action);
   }
 
   return (
     <div className={css.contactContainer}>
       <div className={css.contactItem}>
         <span>{name}</span> 
         <span>{number}</span>
       </div>
       <button onClick={() => {onDelete(id)}}>Delete</button>
     </div>
   );
 }
 
 export default Contact;