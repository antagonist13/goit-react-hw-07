import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'
import { deleteContact } from '../../redux/contactsOps';

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch()
    
    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }

    return <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
                <li key={contact.id} className={css.contactCard}>
                    <Contact contacts={contact} deleteContact={handleDeleteContact} />
                </li>
        ))} 
    </ul>
}