
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import GridLoader from "react-spinners/GridLoader";
import {ContactItem} from '../ContactItem';
import {List, Box} from './ContactList.styled';


export const ContactList = ({contacts, onDeleteContact}) => {

  

   const spinner = useSelector(state=> state.contacts.isLoading)

    return (
       <Box>
       {spinner ? <GridLoader  color="#12039b" /> : <List>
{contacts.map(({id, name, number}) => {
    return (
        <ContactItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>
    )
})}
        </List>}
       </Box>
        
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

