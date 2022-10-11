import { useDispatch, useSelector } from 'react-redux';
import {addContacts, deleteContacts, filterContacts} from '../../redux/slice';
import { ContactForm } from '../ContactForm/ContactForm';
import { Section } from '../Section/Section';
import { Filter } from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {GlobalBox} from './App.styled';


export function App() {

const state = useSelector(state => state);
const dispatch = useDispatch();


		
const getValueSubmitForm = value => {
    if(checkContacts(value.name)) {
      return alert(`${value.name} is already in contacts`)
    }
			dispatch(addContacts(value))
	};

const checkContacts = contact => {
  return state.contacts.find(element => 
    element.name.toLowerCase() === contact.toLowerCase()
  )
}

const onChange = (event) => {
		const {value} = event.currentTarget;
		dispatch(filterContacts(value))
	    }

const onFilterContact = () => {
	const currentFilter = state.filter.toLowerCase();
	return state.contacts.filter((element) => {
return element.name.toLowerCase().includes(currentFilter)
	})
}

const onDeleteContact = (id) => {

dispatch(deleteContacts(id))
}

		return (
			<>
			<GlobalBox>
				<Section title="PhoneBook">
					<ContactForm submitForm={getValueSubmitForm} />
				</Section>
				<Section title="Contacts">
					<Filter onChange={onChange} />
					<ContactList contacts={onFilterContact()} deleteContact={onDeleteContact} />
				</Section>
				</GlobalBox>
			</>
		);
}

