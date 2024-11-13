import { useMemo } from "react";
import { useSelector } from "react-redux";
import {getContacts, getFilter} from "../../redux/selectors";
import ContactItem from "../contactItem";

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const visibleContacts = useMemo(() => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));
    }, [contacts, filter]);
    
    return (
        <ul>
            {visibleContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} id={contact.id}/>
            ))}
        </ul>
    )
}

export default ContactList;