import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectError } from '../../redux/contactsSlice'
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';


export default function App() {
    
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return <div className={css.container}>
    <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
    {isLoading && <Loader>Loading message</Loader>}
    {isError && <Error>Error message</Error>}
        <ContactList/>
</div>
}