import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact, selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'

export default function ContactList() {
    const value = useSelector(selectContacts);
    const searchValue = useSelector(selectNameFilter)
    const dispatch = useDispatch()
    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId))
    }
const visibleContacts = value.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()))
    return <ul className={css.contactList}>
        {visibleContacts.map((contact) => (
                <li key={contact.id} className={css.contactCard}>
                    <Contact contacts={contact} deleteContact={handleDeleteContact} />
                </li>
        ))} 
    </ul>
}