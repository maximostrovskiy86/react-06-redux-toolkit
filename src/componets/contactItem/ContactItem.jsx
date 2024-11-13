import { useDispatch } from 'react-redux';
import { deleteContact} from "../../redux/actions";
import IconButton from "../iconButton";
import {ReactComponent as DeleteIcon} from "../../icons/cross.svg";
import {ContactItemWrapper} from "./ContactItem.styled";

const Contacttem = ({contact, deleteUser, id}) => {
    const dispatch = useDispatch();
    
    const removeUser = () => {
        dispatch(deleteContact(id));
    }
    
    return (
        <ContactItemWrapper>
            <span>{contact.name}: </span><span>{contact.number} </span>
            <span>
                <IconButton deleteUser={removeUser} id={id} aria-label="Delete User">
                    <DeleteIcon width={30} height={30} />
                </IconButton>
            </span>
        </ContactItemWrapper>
    )
}

export default Contacttem;