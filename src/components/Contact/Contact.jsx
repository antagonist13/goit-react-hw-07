import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
export default function Contact({ contacts: { name, id, number }, deleteContact }) {
    return (
    <>
        <div>
            <p className={css.text}>{<IoPerson className={css.icon} />} {name}</p>
            <p className={css.text}>{<FaPhoneAlt className={css.icon} />} {number}</p>
        </div>
      <button onClick={() => deleteContact(id)} className={css.removeButton}>
        Delete
      </button>
    </>
  );
}
