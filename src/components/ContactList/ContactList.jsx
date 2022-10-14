

import { useSelector } from 'react-redux';
import GridLoader from "react-spinners/GridLoader";
import {ContactItem} from '../ContactItem';
import {List, Box} from './ContactList.styled';


export const ContactList = ({contacts, onDeleteContact}) => {

  

   const spinner = useSelector(state=> state.contacts.isLoading)

    return (
       <Box>
       {spinner ? <GridLoader  color="#12039b" /> : <List>
{contacts.map(({id, name, phone}) => {
    return (
        <ContactItem key={id} id={id} name={name} phone={phone} onDeleteContact={onDeleteContact}/>
    )
})}
        </List>}
       </Box>
        
    )
}



